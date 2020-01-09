import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { rhythm, scale } from '../utils/typography';
import Footer from './Footer';

const Container = styled.div`
  margin: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  min-height: calc(100vh - 120px);
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <>
        <Container>{children}</Container>
        <Footer />
      </>
    );
  }
}

export default Layout;
