import React from 'react';

import {
  Home
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
];

export default routes;
