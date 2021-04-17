// Dependencies
import React from 'react';

// View
import HeaderView from './view';

// Config
import {
  topNavigationRoutes
} from '../../../../config/routes';

function Header() {
  return (
		<HeaderView
			topNavigationRoutes={topNavigationRoutes}
		/>
  );
}

export default Header;
