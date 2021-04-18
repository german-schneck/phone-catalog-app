// Dependencies
import React from 'react';

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

export default PhoneDetailsModal;
