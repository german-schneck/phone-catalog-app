// Dependencies
import React, { useCallback, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// View
import PhoneListContainerView from './view';

// Selectors
import { getPhoneList, getPhoneListIsLoading } from '../../../../redux/modules/phones/selectors';

// Actions
import { fetchPhonesList } from '../../../../redux/modules/phones/actions';
import { openModal } from '../../../../redux/modules/gui/actions';

// Components
import LoaderContainer from '../LoaderContainer';

// Styles
import { loaderStyle } from './styles';

// Utils
import { unNormalizeState } from '../../../utils/store';

// Types
import { modalTypesId } from '../../../types/modals';

function PhoneListContainer() {
  // Hooks
  const dispatch = useDispatch();

  // Selectors
  const phoneList = useSelector(state => unNormalizeState(getPhoneList(state)));
  const isLoading = useSelector(getPhoneListIsLoading);

  useLayoutEffect(() => {
    dispatch(fetchPhonesList());
  }, []);

  const onClickPhone = useCallback((phoneId) => {
    dispatch(openModal(modalTypesId.PHONE_DETAILS, { phoneId }));
  }, []);

  return (
    <LoaderContainer isLoading={isLoading} customContainerStyle={loaderStyle}>
      <PhoneListContainerView
        data={phoneList}
        onClickPhone={onClickPhone}
      />
    </LoaderContainer>
  );
}

export default PhoneListContainer;
