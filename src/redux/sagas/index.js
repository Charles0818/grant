import { spawn } from 'redux-saga/effects';
import financialSagas from './financial';

export default function* rootSaga() {
  yield spawn(financialSagas);
}
