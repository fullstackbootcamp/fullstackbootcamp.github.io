import React from 'react';
import styled from '@emotion/styled';

import { rhythm, scale } from '../utils/typography';

const Footer = styled.footer`
  width: 100%;
  background-color: black;
  height: 75px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
`;

const Link = styled.a`
  color: #fff;
`;

export default () => (
  <Footer>
    {'©'} FullStack Bootcamp, {new Date().getFullYear()}
    <br />
    <div>
      Proudly built with{' '}
      <Link href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </Link>
      .
    </div>
  </Footer>
);
