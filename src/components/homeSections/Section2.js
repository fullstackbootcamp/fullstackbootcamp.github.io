import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import { rhythm, scale } from '../../utils/typography';
import { SectionHeader, BlackText, WhiteText } from '../typo';

const Container = styled.div`
  background: #cc0000;
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
`;

const AbsoluteContainer = styled.div`
  color: #fff;
  font-size: ${rhythm(20)};
  line-height: ${rhythm(20)};
  position: absolute;
  right: -54px;
  bottom: 0;
  transform: translateY(44%);
  z-index: 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const Item = styled.div`
  width: calc(100% / 3);
  padding: ${rhythm(0.5)};
`;

const ImageContainer = styled.div`
  width: 100%;
`;

export default () => {
  const query = useStaticQuery(graphql`
    query {
      icon1: file(absolutePath: { regex: "/logo_alt.png/" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      icon2: file(absolutePath: { regex: "/icon_2.png/" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      icon3: file(absolutePath: { regex: "/icon_3.png/" }) {
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
      <SectionHeader color="#fff">
        What you <BlackText>get</BlackText>.
      </SectionHeader>
      <ContentContainer>
        <Item>
          <ImageContainer>
            <Image fixed={query.icon1.childImageSharp.fixed} />
          </ImageContainer>
          <WhiteText>
            A combination of <strong>conceptual</strong> and <strong>practical</strong> training from our team of
            seasoned Ruby/React Engineers.
          </WhiteText>
        </Item>
        <Item>
          <ImageContainer>
            <Image fixed={query.icon2.childImageSharp.fixed} />
          </ImageContainer>
          <WhiteText>
            Any <strong>winning</strong> idea we find worthy can get Php 300k cash + 700k worth of services.
          </WhiteText>
        </Item>
        <Item>
          <ImageContainer>
            <Image fixed={query.icon3.childImageSharp.fixed} />
          </ImageContainer>
          <WhiteText>An oportunity to work with FullSuite.</WhiteText>
        </Item>
      </ContentContainer>
      <AbsoluteContainer>{'{'}</AbsoluteContainer>
    </Container>
  );
};
