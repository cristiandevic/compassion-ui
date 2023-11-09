import React from 'react';

import {
  Home,
  TestimoniosView
} from 'views';
import NotFoundCover from './NotFoundCover';

const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <Home {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}): JSX.Element => <Home {...params} />,
  },
  {
    path: '/testimonios',
    renderer: (params = {}): JSX.Element => <TestimoniosView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}): JSX.Element => <NotFoundCover {...params} />,
  },
];

export default routes;
