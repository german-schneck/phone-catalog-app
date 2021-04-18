// Dependencies
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Constants from '../../../../config/layout';
import { PageContainer } from '../../../styled-components/layout';

export const Layout = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	height: ${Constants.sizing.HEADER_HEIGHT}px;
	display: flex;
	flex-direction: column;
	user-select: none;
`;

export const TopContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	background-color: ${Constants.colors.BASE_GRAY};
`;

export const TopNavigator = styled.nav`
  padding: 8px;
	display: flex;
	justify-content: flex-end;
	flex-grow: 0;
`;

export const TopNavigatorItem = styled(NavLink)`
	margin-right: 12px;
	
	&:last-child {
		margin-right: 0;
	}
	
	font-size: 12px;
	color: ${Constants.colors.GRAY};
`;

export const MainContainer = styled.div`
  background: ${Constants.colors.WHITE};
  box-shadow: 0 1px 2px #0000002e;
  display: flex;
  align-items: center;
	flex-grow: 1;
`;

export const Logotype = styled(Link)`
	font-family: ${Constants.fonts.BOLD};
	color: ${Constants.colors.BLACK};
	
	&:active, &:hover {
    color: ${Constants.colors.BLACK};
	}
`;

export const HeaderContent = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 176px;
`;
