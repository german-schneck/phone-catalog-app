// Dependencies
import { takeLatest, call, put, delay } from 'redux-saga/effects';

// Actions
import {
  FETCH_PHONES_LIST,

  setPhonesList,
  setPhonesListIsLoading
} from './actions';

// Services
import { getPhoneListByAPI } from './services';

// Utils
import { normalizeState } from '../../../shared/utils/store';

function * fetchPhoneListProcess() {
  try {
    yield put(setPhonesListIsLoading(true));

    const response = yield call(getPhoneListByAPI);

    if (response.status === 'ok' && response.data) {
      yield put(setPhonesList(normalizeState(response.data)));
    }

    yield delay(1000); // A delay to show the spinner.
    yield put(setPhonesListIsLoading(false));
  } catch (e) {
    yield put(setPhonesListIsLoading(false));
    console.error(e);
  }
}

export function * watchPhoneListProcess() {
  yield takeLatest(FETCH_PHONES_LIST, fetchPhoneListProcess);
}
