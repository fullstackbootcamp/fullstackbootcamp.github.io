import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import { SectionHeader, RedText, Lead } from '../typo';
import { Container } from '../Components';
import { rhythm, scale } from '../../utils/typography';

const AbsoluteContainer = styled.div`
  color: #cc0000;
  font-size: ${rhythm(20)};
  line-height: ${rhythm(20)};
  position: absolute;
  right: -54px;
  top: 0;
  transform: translateY(-56.5%);
`;

const ContentContainer = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const Item = styled.div`
  width: calc(100% / 2);
  padding: ${rhythm(1)};
`;

const ImageContainer = styled.div`
  width: 100%;
`;

export default () => {
  const query = useStaticQuery(graphql`
    query {
      ror: file(absolutePath: { regex: "/ruby_on_rails_logo.png/" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      react: file(absolutePath: { regex: "/react_js_logo.png/" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container>
      <SectionHeader>
        Tech you <RedText>learn</RedText>.
      </SectionHeader>
      <Lead fontSize="1">Technology that Silicon Valley loves.</Lead>
      <ContentContainer>
        <Item>
          <ImageContainer>
            <Image fixed={query.ror.childImageSharp.fixed} />
          </ImageContainer>
          Ruby on Rails is a ruby engine for web which makes creating web apps fast, easy, and scalable. It is one of
          the most stable platforms with a huge community. Shopify, Github, Airbnb, Twitch, and Square all uses Ruby on
          Rails.
        </Item>
        <Item>
          <ImageContainer>
            <Image fixed={query.react.childImageSharp.fixed} />
          </ImageContainer>
          Built by Facebook, React JS is a javascript library for building highly functional interfaces. It is currently
          the fastest growing front-end javascript framework.
        </Item>
      </ContentContainer>
      <AbsoluteContainer>{'{'}</AbsoluteContainer>
    </Container>
  );
};
