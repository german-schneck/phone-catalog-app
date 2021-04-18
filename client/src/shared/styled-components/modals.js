import styled from 'styled-components';
import Constants from '../../config/layout';

/**
 * @name BackDrop
 * @description This component renders a backdrop to be used within any
 * pop-up message on the screen such as modals or menus.
 */
export const BackDrop = styled.div`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 100;
	padding: 22px;

  @media screen and (min-width: 0px) and (max-width: ${Constants.sizing.MAX_MOBILE_WIDTH}px) {
    display: flex;
    flex-grow: 1;
  }
	
`;

/**
 * @name ModalContainer
 * @description Assign a default style for all content to be
 * rendered floating on the screen.
 */
export const ModalContainer = styled.div`
	background: ${Constants.colors.WHITE};
	margin: 22px;
`;
