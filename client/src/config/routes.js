// Dependencies
import React from 'react';
import { Redirect } from 'react-router-dom';

// Screens
import Home from '../screens/Home';

export const routes = [
  // Home
  {
    path: '/store',
    component: Home
  },

  // NotFound
  {
    path: '*',
    component: () => (
			<Redirect to={'/store'} />
    )
  }
];

export const topNavigationRoutes = [
  {
    label: 'Personas',
    path: '/people'
  },
  {
    label: 'Empresas',
    path: '/enterprise'
  },
  {
    label: 'Institucional',
    path: '/institution'
  }
];

export const mainNavigationRoutes = [
  {
    label: 'Tienda',
    path: '/store'
  },
  {
    label: 'Productos y Servicios',
    path: '/products-and-services'
  },
  {
    label: 'Atención al Cliente',
    path: '/customer-help'
  }
];

export default routes;
