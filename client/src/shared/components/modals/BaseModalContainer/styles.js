// Dependencies
import styled from 'styled-components';
import { ModalContainer } from '../../../styled-components/modals';

export const Layout = styled(ModalContainer)`
	max-width: ${props => props.width || 'auto'};
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	border-radius: 8px;
	margin: 0 auto;
  overflow: hidden;
	z-index: 1000;
`;

export const Header = styled.div`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
	flex-grow: 1;
  overflow: auto;
`;

export const Title = styled.h3`
	font-size: 16px;
`;
