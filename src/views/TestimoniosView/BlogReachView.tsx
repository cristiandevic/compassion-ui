import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  FeaturedArticle,
} from './components';

const BlogReachView = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Hero />
        <Container>
          <FeaturedArticle />
        </Container>

      </Box>
    </Main>
  );
};

export default BlogReachView;
