// Dependencies
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// View
import PhoneListContainerView from './view';

// Selectors
import { getPhoneList, getPhoneListIsLoading } from '../../../../redux/modules/phones/selectors';

// Actions
import { fetchPhonesList } from '../../../../redux/modules/phones/actions';

// Components
import LoaderContainer from '../LoaderContainer';

// Styles
import { loaderStyle } from './styles';

function PhoneListContainer() {
  // Hooks
  const dispatch = useDispatch();

  // Selectors
  const phoneList = useSelector(getPhoneList);
  const isLoading = useSelector(getPhoneListIsLoading);

  useLayoutEffect(() => {
    dispatch(fetchPhonesList());
  }, []);

  return (
    <LoaderContainer isLoading={isLoading} customContainerStyle={loaderStyle}>
      <PhoneListContainerView
        data={phoneList}
      />
    </LoaderContainer>
  );
}

export default PhoneListContainer;
