import React from 'react';

import {
  Home,
  TestimoniosView
} from 'views';
import NotFoundCover from './NotFoundCover';
import AtWork from './atWork';
import BlogArticle from './BlogArticle';

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
  {
    path: '/blog',
    renderer: (params = {}): JSX.Element => <BlogArticle {...params} />,
  },
];

export default routes;
