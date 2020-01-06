import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { rhythm, scale } from '../utils/typography';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

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
  right: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background: black;
  padding: 0 ${rhythm(1)};
  z-index: 998;
`;

const carretSpace = rhythm(1 / 5);

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: -1.5px;
  padding-right: ${carretSpace};
  margin-right: ${carretSpace};
  border-right: 1px solid #fff;
  font-weight: 500;
  ${scale(1 / 3)}
`;

const TitleExpanded = styled.span`
  font-size: 12px;
  font-weight: 300;
  line-height: 10px;
`;

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
            instagram
            github
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
          <Title>MD</Title>
          <TitleExpanded>
            marc
            <br />
            dagatan
          </TitleExpanded>
        </Link>
        <FlexContainer>
          <SocialLink url={`https://twitter.com/${social.twitter}`} icon={<FaTwitter />} />
          <SocialLink url={`https://instagram.com/${social.instagram}`} icon={<FaInstagram />} />
          <SocialLink url={`https://github.com/${social.github}`} icon={<FaGithub />} />
        </FlexContainer>
      </FixedContainer>
    </Container>
  );
};
