import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
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

const RedText = styled.span`
  color: #cc0000;
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
      <Image fixed={query.logo.childImageSharp.fixed} />
      <Divider />
      <P>
        FullStack Bootcamp is offering a <RedText>free</RedText> coding bootcamp.
        <br />
        What are you waiting for?
      </P>
      <Lead color="white">Reserve a slot now!</Lead>
    </HeroContainer>
  );
};
