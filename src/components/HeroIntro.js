import React from 'react';
import styled from '@emotion/styled';
import { rhythm, scale } from '../utils/typography';
import { Hero, Lead } from './typo';

const HeroContainer = styled.div`
  background: #000;
  height: calc(100vh - 45px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 ${rhythm(1)} 45px;
`;

const Divider = styled.div`
  height: 3px;
  background-color: white;
  width: 100px;
  margin: ${rhythm(1)} 0;
`;

const P = styled.p`
  color: #fff;
  max-width: 500px;
`;

export default () => (
  <HeroContainer>
    <Hero color="white">Marc Dagatan</Hero>
    <Lead color="white">Developer, Nerd, Father</Lead>
    <Divider />
    <P>
      A Ruby on Rails engineer and React JS/Native evangelist.
      <br /> CTO, FullSuite
    </P>
  </HeroContainer>
);
