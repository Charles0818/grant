import {
  SEND_APPLICATION_FAILURE,
  SEND_APPLICATION_REQUEST,
  SEND_APPLICATION_SUCCESS,
  SEND_APPLICATION_LOADING_INDICATOR,
} from '../../types';

export const sendApplicationRequest = (prop) => {
  return {
    type: SEND_APPLICATION_REQUEST,
    payload: prop,
  };
};

export const sendApplicationSuccess = (prop) => {
  console.log("na wa o I got called");
  return {
    type: SEND_APPLICATION_SUCCESS,
    payload: prop,
  };
};

export const sendApplicationFailure = (prop) => {
  return {
    type: SEND_APPLICATION_FAILURE,
    payload: prop,
  };
};

export const sendApplicationLoadingIndicator = (loading) => {
  console.log('What about me???')
  return {
    type: SEND_APPLICATION_LOADING_INDICATOR,
    payload: { loading },
  };
};
