import {
  SEND_APPLICATION_FAILURE,
  SEND_APPLICATION_SUCCESS,
} from '../../types';

const initialState = {
  errors: {},
  success: {},
};
export const ajaxStatuses = (
  prevState = initialState,
  { type, payload }) => {
  switch (type) {
    case SEND_APPLICATION_SUCCESS:
      console.log('payload', payload);
      prevState.success.sendApplication = payload.message;
      return { ...prevState };
    case SEND_APPLICATION_FAILURE:
      prevState.errors.sendApplication = payload.error;
      return { ...prevState };
    default:
      return prevState;
  }
};
