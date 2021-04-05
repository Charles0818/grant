import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import {
  SEND_APPLICATION_REQUEST,
} from '../../types';
import {
  sendApplicationSuccess,
  sendApplicationFailure,
  sendApplicationLoadingIndicator,
} from '../../actions';
import axios from 'axios';
import { clientErrorMessage, delay } from '../reusables';
// https://script.google.com/macros/s/AKfycbzDYATIqVgWyLJULP-hZyPlwRAEjdViS65XzprRk6s6OHE7TkZIrPBywuihUJVlwlQQ/exec
const ajaxDBCalls = {
  sendApplication: async (
    payload,
  ) => {
    // const options = {
    //   method: 'GET',
    //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data: payload,
    //   url: "https://docs.google.com/forms/d/e/1FAIpQLSe514L72Lx9KrQT2-hWB_eMv6W3lnr3J8nbLE4adewfzs6otA/formResponse",
    // };
    // axios(options);
    const response = await axios.get(
      'https://docs.google.com/forms/d/e/1FAIpQLSe514L72Lx9KrQT2-hWB_eMv6W3lnr3J8nbLE4adewfzs6otA/formResponse',
      payload,
      {
        'Content-Type': 'application/json',
      },
    );
    return response;
  },
};

// Generators
function* sendApplication({ payload }) {
  try {
    yield put(sendApplicationLoadingIndicator(true));
    yield call(ajaxDBCalls.sendApplication, payload);
    yield put(sendApplicationSuccess({ message: 'Application successfuly sent' }));
    yield put(sendApplicationLoadingIndicator(false));
    yield call(delay);
    yield put(sendApplicationSuccess({ message: undefined }));
  } catch (err) {
    let errorMessage = '';
    let statusCode;
    if (err.request) errorMessage = clientErrorMessage;
    if (err.response) {
      const { message, code } = err.response.data;
      errorMessage = message;
      statusCode = code;
    }

    yield put(sendApplicationFailure({ error: errorMessage, statusCode }));
    yield put(sendApplicationLoadingIndicator(false));
    yield call(delay);
    yield put(sendApplicationFailure({ statusCode }));
  }
}

// Watchers
function* sendApplicationWatcher() {
  yield takeLatest(SEND_APPLICATION_REQUEST, sendApplication);
}

export default function* authSagas() {
  yield spawn(sendApplicationWatcher);
}
