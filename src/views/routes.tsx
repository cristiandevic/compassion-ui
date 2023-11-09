import React from 'react';

import {
  Home,
  TestimoniosView
} from 'views';
import NotFoundCover from './NotFoundCover';
import AtWork from './atWork';

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
  {
    path: '/in-maintenance',
    renderer: (params = {}): JSX.Element => <AtWork {...params} />,
  },
];

export default routes;
