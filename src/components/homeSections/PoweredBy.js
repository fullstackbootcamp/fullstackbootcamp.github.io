import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import { SectionHeader } from '../typo';
import { rhythm, scale } from '../../utils/typography';
import { Container } from '../components';

const ImageContainer = styled.div`
  margin-bottom: ${rhythm(1)};
`;

export default () => {
  const query = useStaticQuery(graphql`
    query {
      fs: file(absolutePath: { regex: "/fullsuite_logo.png/" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container>
      <h2>Powered by</h2>
      <ImageContainer>
        <Image fixed={query.fs.childImageSharp.fixed} />
      </ImageContainer>
    </Container>
  );
};
