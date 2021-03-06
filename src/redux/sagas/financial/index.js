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
    const response = await fetch("https://script.google.com/macros/s/AKfycbwIIiHC8SJszcDSy2ISmwEG_6iectUvOV-T9a9HnS-12e6eeoqz6yBiwcvt30TLSwdUMw/exec", {
      method: "POST",
      mode: "no-cors",
      cache: 'no-cache',
      redirect: 'follow',
      body: JSON.stringify(payload)
    });
    if(response.status >= 400) {
      const err = await response.json();
      throw err
    }
    return { message: 'Successful' }
  },
};

// Generators
function* sendApplication({ payload }) {
  try {
    yield put(sendApplicationLoadingIndicator(true));
    console.log('Before Calling Success');
    yield call(ajaxDBCalls.sendApplication, payload);
    yield put(sendApplicationSuccess({ message: 'Just a moment while we connect you' }));
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

export default function* financialSagas() {
  yield spawn(sendApplicationWatcher);
}
