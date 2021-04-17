// Dependencies
import { all, fork } from 'redux-saga/effects';

// Wallet
import { watchPhoneListProcess } from './modules/phones/sagas';

export default function * rootSagas() {
  yield all([
    // Phone List
    fork(watchPhoneListProcess)
  ]);
}
