/** @jsx jsx */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';

import { rhythm } from '../utils/typography';

const Text = styled.p`
  line-height: 1rem;
`;

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata;

      return (
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}
        >
          <Image fixed={data.avatar.childImageSharp.fixed} alt={author} css={{ marginRight: rhythm(0.2) }} />
          <Text>
            <strong>{author}</strong>
            <br />
            <small>
              <strong>Chief Technical Officer</strong>
              <br />
              FullSuite
            </small>
          </Text>
        </div>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/fullstack_icon.png/" }) {
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
