import React from 'react';
import styled from '@emotion/styled';

import { rhythm, scale } from '../../utils/typography';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0;
`;

const AbsoluteContainer = styled.div`
  color: #cc0000;
  font-size: ${rhythm(20)};
  line-height: ${rhythm(20)};
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
