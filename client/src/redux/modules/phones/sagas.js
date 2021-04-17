// Dependencies
import { takeLatest, put } from 'redux-saga/effects';

// Actions
import {
  FETCH_PHONES_LIST,

  setPhonesListIsLoading
} from './actions';

function * fetchPhoneListProcess() {
  try {
    yield put(setPhonesListIsLoading(true));

    // Request API.
  } catch (e) {
    yield put(setPhonesListIsLoading(false));
    console.error(e);
  }
}

export function * watchPhoneListProcess() {
  yield takeLatest(FETCH_PHONES_LIST, fetchPhoneListProcess);
}
