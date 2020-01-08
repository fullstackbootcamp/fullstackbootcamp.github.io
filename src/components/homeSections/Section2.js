import React from 'react';
import styled from '@emotion/styled';

import { rhythm, scale } from '../../utils/typography';

const Container = styled.div`
  background: #cc0000;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
  margin: 0;
`;

const AbsoluteContainer = styled.div`
  color: #fff;
  font-size: ${rhythm(25)};
  line-height: ${rhythm(25)};
  position: absolute;
  right: -54px;
  bottom: 0;
  transform: translateY(44%);
`;

export default () => (
  <Container>
    <AbsoluteContainer>{'{'}</AbsoluteContainer>
  </Container>
);
