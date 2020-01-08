import React from 'react';
import styled from '@emotion/styled';
import { SectionHeader } from '../typo';

import { rhythm, scale } from '../../utils/typography';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: ${rhythm(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`;

export default () => (
  <Container>
    <h2>Powered by</h2>
    <h4>together with</h4>
  </Container>
);
