// Defs
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// Actions
export function openModal(modalId = null, data = {}) {
  return {
    type: OPEN_MODAL,
    payload: {
      modalId,
      data
    }
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
