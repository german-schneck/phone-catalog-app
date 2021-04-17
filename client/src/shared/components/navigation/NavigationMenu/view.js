// Dependencies
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// Assets
import MenuOutlineIcon from '../../../assets/icons/menu-outline.svg';

// Styles
import {
  MainNavigation,
  MainNavigatorItem,
  MenuButton,
  MenuButtonIcon
} from './styles';

function NavigationMenu({
  isMobile,
  mainNavigationRoutes = []
}) {
  const renderNavigationItems = useMemo(() => (
		<MainNavigation>
			{mainNavigationRoutes.map((route, index) => (
				<MainNavigatorItem
					key={`--top-navigator-item-${index.toString()}`}
					to={route.path}
				>
					{route.label}
				</MainNavigatorItem>
			))}
		</MainNavigation>
  ), [mainNavigationRoutes]);

  const renderNavigationButton = useMemo(() => (
		<MenuButton>
			<MenuButtonIcon src={MenuOutlineIcon} alt={'Menú Principal'} />
		</MenuButton>
  ), []);

  return !isMobile ? renderNavigationItems : renderNavigationButton;
}

NavigationMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mainNavigationRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

export default NavigationMenu;
