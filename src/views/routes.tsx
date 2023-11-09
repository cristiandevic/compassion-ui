import React from 'react';

import {
  Home,
  TestimoniosView
} from 'views';

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
];

export default routes;
