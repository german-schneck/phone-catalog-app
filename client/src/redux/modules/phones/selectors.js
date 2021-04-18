export const getPhoneList = (state) => state.phones.data;

export const getPhoneListIsLoading = state => state.phones.isLoading;

export const getPhoneById = (state, id) => state.phones.data[id];
