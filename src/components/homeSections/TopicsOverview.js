import React from 'react';
import styled from '@emotion/styled';

import { FluidContainer } from '../Components';
import { SectionHeader, RedText } from '../typo';
import { rhythm } from '../../utils/typography';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const SubjectHeader = styled.h3``;
const MinorSubject = styled.h5``;
const Description = styled.p``;
const SubjectContainer = styled.div`
  width: calc(50%);
  padding: ${rhythm(0.25)} ${rhythm(1)};

  &:nth-child(odd) {
    text-align: right;
  }
`;

const Subject = ({ children }) => (
  <SubjectHeader>
    <RedText>{'{'}</RedText> {children} <RedText>}</RedText>
  </SubjectHeader>
);

export default () => (
  <FluidContainer backgroundColor="#000" color="#fff">
    <SectionHeader color="white">
      Topics Overview<RedText>.</RedText>
    </SectionHeader>
    <Container>
      <SubjectContainer>
        <Subject>Ruby Programming Language</Subject>
      </SubjectContainer>
      <SubjectContainer>
        <Subject>Version Control with Git</Subject>
      </SubjectContainer>
      <SubjectContainer>
        <Subject>Test Driven Development</Subject>
      </SubjectContainer>
      <SubjectContainer>
        <Subject>Best Coding Practices</Subject>
      </SubjectContainer>
      <SubjectContainer>
        <Subject>Ruby on Rails</Subject>
        <MinorSubject>Scaffolding: The Quick and Dirty Way</MinorSubject>
        <MinorSubject>Controllers, Views, and Routes</MinorSubject>
        <MinorSubject>Models</MinorSubject>
        <MinorSubject>Forms</MinorSubject>
        <MinorSubject>Front-end Behaviors and styling with Sass</MinorSubject>
      </SubjectContainer>
      <SubjectContainer>
        <Subject>React JS</Subject>
        <MinorSubject>JSX</MinorSubject>
        <MinorSubject>Function Components</MinorSubject>
        <MinorSubject>PropTypes</MinorSubject>
        <MinorSubject>Class Components</MinorSubject>
        <MinorSubject>Class Components - Life-cycle Methods</MinorSubject>
        <MinorSubject>Ajax with Axios</MinorSubject>
      </SubjectContainer>
    </Container>
  </FluidContainer>
);
