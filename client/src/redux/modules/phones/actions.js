// Defs
export const FETCH_PHONES_LIST = 'FETCH_PHONES_LIST';
export const SET_PHONES_LIST = 'SET_PHONES_LIST';
export const SET_PHONES_LIST_IS_LOADING = 'SET_PHONES_LIST_IS_LOADING';

// Actions
export function fetchPhonesList() {
  return {
    type: FETCH_PHONES_LIST,
    payload: {}
  };
}

export function setPhonesList(phones = []) {
  return {
    type: SET_PHONES_LIST,
    payload: {
      phones
    }
  };
}

export function setPhonesListIsLoading(isLoading) {
  return {
    type: SET_PHONES_LIST_IS_LOADING,
    payload: {
      isLoading
    }
  };
}
