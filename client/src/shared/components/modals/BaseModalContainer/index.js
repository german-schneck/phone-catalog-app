// Dependencies
import React from 'react';

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
  height,
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

export default BaseModalContainer;
