import {
  SEND_APPLICATION_LOADING_INDICATOR,
} from '../../types';

const initialState = {};
export const loadingIndicatorsReducer = (
  prevState = initialState,
  { type, payload }) => {
  switch (type) {
    // Auth Loading Indicators
    case SEND_APPLICATION_LOADING_INDICATOR:
      prevState.sendApplication = payload.loading;
      return { ...prevState };
    // Default
    default:
      return prevState;
  }
};
