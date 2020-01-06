import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

export default () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/logo_horizontal.png/" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Image fixed={query.logo.childImageSharp.fixed} alt="FullStack Bootcamp Logo" />;
};
