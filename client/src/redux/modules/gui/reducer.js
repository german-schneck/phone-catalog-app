// Actions
import {
  CLOSE_MODAL,
  OPEN_MODAL
} from './actions';

const initialState = {
  modal: {
    modalId: null,
    data: {}
  }
};

export default function gui(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          modalId: payload.modalId,
          data: payload.data
        }
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modal: initialState.modal
      };

    default:
      return state;
  }
}
