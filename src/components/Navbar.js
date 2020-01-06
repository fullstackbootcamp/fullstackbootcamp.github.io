import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

import { rhythm, scale } from '../utils/typography';
import Logo from './Logo';

const Container = styled.div`
  height: 45px;
`;

const flexContainer = `
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const FixedContainer = styled.div`
  height: 45px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background: black;
  padding: 0 ${rhythm(1)};
  z-index: 998;
`;

const carretSpace = rhythm(1 / 5);

const Link = styled.a`
  ${flexContainer}
  text-decoration: none;
  color: #fff;
`;

const FlexContainer = styled.div`
  ${flexContainer}
`;

const SocialLink = ({ url, icon }) => (
  <Link href={url} target="_blank" style={{ marginLeft: rhythm(1 / 5) }}>
    {icon}
  </Link>
);

export default () => {
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            twitter
            facebook
          }
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { social },
    },
  } = query;

  return (
    <Container>
      <FixedContainer>
        <Link href="/">
          <Logo />
        </Link>
        <FlexContainer>
          <SocialLink url={`https://facebook.com/${social.facebook}`} icon={<FaFacebook />} />
          <SocialLink url={`https://twitter.com/${social.twitter}`} icon={<FaTwitter />} />
        </FlexContainer>
      </FixedContainer>
    </Container>
  );
};
