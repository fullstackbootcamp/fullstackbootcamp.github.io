import React from 'react';
import styled from '@emotion/styled';

import { rhythm, scale } from '../utils/typography';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0;
  padding: ${rhythm(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  background-color: ${props => props.backgroundColor || '#fff'};
  color: ${props => props.color || '#000'};
`;
