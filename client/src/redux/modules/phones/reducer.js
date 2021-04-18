// Actions
import {
  SET_PHONES_LIST,
  SET_PHONES_LIST_IS_LOADING
} from './actions';

const initialState = {
  isLoading: true,
  data: []
};

export default function wallet(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PHONES_LIST:
      return {
        ...state,
        data: payload.phones
      };

    case SET_PHONES_LIST_IS_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading
      };

    default:
      return state;
  }
}
