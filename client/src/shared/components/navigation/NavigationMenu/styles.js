import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Constants from '../../../../config/layout';

export const mainNavigatorItemActive = {
  color: Constants.colors.PRIMARY
};

export const MainNavigation = styled.nav``;

export const MainNavigatorItem = styled(NavLink)`
  margin-right: 42px;
  color: ${Constants.colors.BLACK};
	
  &:last-child {
    margin-right: 0;
  }
	
	&:hover {
		color: ${Constants.colors.PRIMARY};
	}
	
	transition: color ${Constants.transitions.FAST} ease-in-out;
`;

export const MenuButton = styled.button`
  border: 0;
  background: transparent;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
	outline: none;
	border-radius: 50px;
	
	&:active {
		background-color: ${Constants.colors.BASE_GRAY};
	}
`;

export const MenuButtonIcon = styled.img`
	width: 28px;
	height: 28px;
`;
