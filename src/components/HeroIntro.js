/** @jsx jsx */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

import Form from './Form';
import { rhythm, scale } from '../utils/typography';
import { Hero, Lead } from './typo';

const HeroContainer = styled.div`
  background: #000;
  height: calc(100vh - 45px);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
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

const RedText = styled.span`
  color: #cc0000;
`;

const WhiteText = styled.span`
  color: #fff;
`;

const Panel = styled.div`
  flex-flow: column nowrap;
`;

export default () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/fullstack_icon.png/" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <HeroContainer>
      <Panel>
        <Image fixed={query.logo.childImageSharp.fixed} />
        <TypistLoop>
          {[
            'Be a full-stack web developer.',
            'Learn Ruby on Rails.',
            'Learn React JS.',
            'Learn industry coding standards.',
          ].map(text => (
            <Typist key={text} startDelay={100} css={{ color: '#fff' }}>
              {text}
              <Typist.Backspace count={text.length} delay={1500} />
            </Typist>
          ))}
        </TypistLoop>
        <Divider />
        <P>
          FullStack Bootcamp is offering a <RedText>free</RedText> coding bootcamp.
          <br />
          What are you waiting for?
        </P>
        <Lead color="white">Apply now!</Lead>
      </Panel>
      <Panel>
        <Form />
      </Panel>
    </HeroContainer>
  );
};
