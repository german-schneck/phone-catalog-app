// Dependencies
import React from 'react';

// View
import NavigationMenuView from './view';

// Config
import { mainNavigationRoutes } from '../../../../config/routes';

// Hooks
import { useCheckMobile } from '../../../hooks/useCheckMobile';

function NavigationMenu() {
  // Hooks
  const isMobile = useCheckMobile();
  return (
    <NavigationMenuView
      isMobile={isMobile}
      mainNavigationRoutes={mainNavigationRoutes}
    />
  );
}

export default NavigationMenu;
