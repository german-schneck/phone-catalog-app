// Dependencies
import React from 'react';
import { Redirect } from 'react-router-dom';

// Screens
import Home from '../screens/Home';

export const routes = [
  // Home
  {
    path: '/',
    component: Home
  },

  // NotFound
  {
    path: '*',
    component: () => (
			<Redirect to={'/'} />
    )
  }
];

export const topNavigationRoutes = [
  {
    label: 'Personas',
    path: '#'
  },
  {
    label: 'Empresas',
    path: '#'
  },
  {
    label: 'Institucional',
    path: '#'
  }
];

export const mainNavigationRoutes = [
  {
    label: 'Tienda',
    path: '#'
  },
  {
    label: 'Productos y Servicios',
    path: '#'
  },
  {
    label: 'Atención al Cliente',
    path: '#'
  }
];

export default routes;
