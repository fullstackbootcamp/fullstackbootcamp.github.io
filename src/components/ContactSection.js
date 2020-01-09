import React from 'react';
import styled from '@emotion/styled';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

import { rhythm, scale } from '../utils/typography';
import { Container } from './Components';
import { SectionHeader, RedText, Lead } from './typo';

const ContactTable = styled.table`
  width: fit-content;
`;
const CRow = styled.tr``;
const CData = styled.td`
  color: #fff;
`;

const Link = styled.a`
  color: #fff;
`;

const curly = `
  position: absolute;
  font-size: 40rem;
  z-index: 0;
  top: 50%;
  transform: translateY(-56%);
  line-height: 40rem;
  -webkit-text-stroke: 2px white;
  color: #000;
`;

const CurlyLeft = styled.div`
  ${curly}
  left: 1rem;
`;

const CurlyRight = styled.div`
  ${curly}
  right: 1rem;
`;

const CLink = ({ href, name }) => (
  <Link target="_blank" href={href}>
    {name}
  </Link>
);

export default () => (
  <Container backgroundColor="#000" color="#fff">
    <SectionHeader color="#fff">
      Reach <RedText>Us</RedText>.
      <Lead color="#fff" fontSize="1">
        We love coffee, do you?
      </Lead>
    </SectionHeader>
    <ContactTable>
      <CRow>
        <CData>
          <FaFacebookF />
        </CData>
        <CData>Facebook</CData>
        <CData>
          <CLink href="https://fb.com/BootCampFullStack" name="fb.com/BootCampFullStack" />
        </CData>
      </CRow>
      <CRow>
        <CData>
          <FaLinkedinIn />
        </CData>
        <CData>LinkedIn</CData>
        <CData>
          <CLink href="https://linkedin.com/company/campfullstack" name="linkedin.com/company/campfullstack" />
        </CData>
      </CRow>
      <CRow>
        <CData>
          <FaEnvelope />
        </CData>
        <CData>Email</CData>
        <CData>
          <CLink href="mailto:fullstackbootcamp@gmail.com" name="fullstackbootcamp@gmail.com" />
        </CData>
      </CRow>
    </ContactTable>
    <CurlyLeft>{'{'}</CurlyLeft>
    <CurlyRight>}</CurlyRight>
  </Container>
);
