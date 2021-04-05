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
      prevState.success.sendApplication = payload;
      return { ...prevState };
    case SEND_APPLICATION_FAILURE:
      prevState.errors.sendApplication = payload;
      return { ...prevState };
    default:
      return prevState;
  }
};
