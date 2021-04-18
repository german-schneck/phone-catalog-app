import fetchAPI from '../../../shared/utils/fetchAPI';

export const getPhoneListByAPI = () =>
  fetchAPI({
    method: 'GET',
    endPoint: '/phones'
  });
