// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import {
  Layout,
  Header,
  Body,
  Title
} from './styles';

// Components
import IconButton from '../../buttons/IconButton';

// Assets
import CloseIcon from '../../../assets/icons/close-outline.svg';

function BaseModalContainer({
  width,
  title,
  children,
  onClickClose = () => {}
}) {
  return (
		<Layout width={width}>
			<Header>
				<Title>{title}</Title>
				<IconButton
					onClick={onClickClose}
					icon={CloseIcon}
					alt={'Cerrar modal'}
				/>
			</Header>
			<Body>
				{children}
			</Body>
		</Layout>
  );
}

BaseModalContainer.propTypes = {
  width: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClickClose: PropTypes.func
};

export default BaseModalContainer;
