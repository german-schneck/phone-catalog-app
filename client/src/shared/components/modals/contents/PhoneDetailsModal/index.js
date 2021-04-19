// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import BaseModalContainer from '../../BaseModalContainer';
import PhoneDetailComponent from '../../../containers/PhoneDetailComponent';

function PhoneDetailsModal({ data: { phoneId }, closeModal }) {
  return (
		<BaseModalContainer
			width={'700px'}
			title={'Detalles del Dispositivo'}
			onClickClose={closeModal}
		>
			<PhoneDetailComponent id={phoneId} />
		</BaseModalContainer>
  );
}

PhoneDetailsModal.propTypes = {
  data: PropTypes.shape({
    phoneId: PropTypes.string.isRequired
  }),
  closeModal: PropTypes.func.isRequired
};

export default PhoneDetailsModal;
