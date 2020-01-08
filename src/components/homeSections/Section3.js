import React from 'react';
import styled from '@emotion/styled';

import { rhythm, scale } from '../../utils/typography';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
  margin: 0;
`;

const AbsoluteContainer = styled.div`
  color: #cc0000;
  font-size: ${rhythm(25)};
  line-height: ${rhythm(25)};
  position: absolute;
  right: -54px;
  top: 0;
  transform: translateY(-56.5%);
`;

export default () => (
  <Container>
    <AbsoluteContainer>{'{'}</AbsoluteContainer>
  </Container>
);
