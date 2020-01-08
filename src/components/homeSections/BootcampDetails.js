import React from 'react';
import styled from '@emotion/styled';

import { rhythm } from '../../utils/typography';
import { FluidContainer } from '../Components';
import { SectionHeader, BlackText } from '../typo';

const CenteredText = styled.div`
  text-align: center;
`;

const Table = styled.table``;
const Row = styled.tr`
  td {
    border-bottom: solid 2px rgba(0, 0, 0, 0.1);
  }
`;
const Title = styled.td`
  text-align: right;
  font-weight: 700;
  width: 30%;
`;
const Value = styled.td`
  width: 70%;
`;

const Schedules = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  width: 100%;
  margin: auto;
`;

const Schedule = styled.div`
  width: 50%;
  padding: ${rhythm(1)};
`;

const SchedTitle = styled.p`
  font-weight: 700;
`;

const Desc = styled.small`
  color: #000;
  font-weight: 300;
`;

export default () => (
  <FluidContainer backgroundColor="#cc0000" color="white">
    <SectionHeader color="white">
      Bootcamp Details<BlackText>.</BlackText>
    </SectionHeader>
    <CenteredText>
      <Table>
        <Row>
          <Title>Duration</Title>
          <Value>2 Months</Value>
        </Row>
        <Row>
          <Title>Location</Title>
          <Value>04 Escoda St., Quezon Hill Rd. 1, Cor. Naguilian Rd., Baguio City</Value>
        </Row>
        <Row>
          <Title>Start Date</Title>
          <Value>February 1, 2020</Value>
        </Row>
      </Table>
    </CenteredText>
    <Schedules>
      <Schedule>
        <SchedTitle>
          Camp Proper Schedules
          <br />
          <Desc>9am - 6pm on following dates.</Desc>
        </SchedTitle>
        <ul>
          <li>Feb 01, 2020</li>
          <li>Feb 08, 2020</li>
          <li>Feb 15, 2020</li>
          <li>Feb 22, 2020</li>
          <li>Feb 29, 2020</li>
          <li>Mar 07, 2020</li>
          <li>Mar 14, 2020</li>
          <li>Mar 21, 2020</li>
          <li>Mar 28, 2020</li>
        </ul>
      </Schedule>
      <Schedule>
        <SchedTitle>
          Refresher Sessions Schedules
          <br />
          <Desc>7pm - 9pm on following dates.</Desc>
          <br />
          <Desc>Attendance is not required.</Desc>
        </SchedTitle>
        <ul>
          <li>Feb 05, 2020</li>
          <li>Feb 12, 2020</li>
          <li>Feb 19, 2020</li>
          <li>Feb 26, 2020</li>
          <li>Mar 04, 2020</li>
          <li>Mar 11, 2020</li>
          <li>Mar 18, 2020</li>
        </ul>
      </Schedule>
    </Schedules>
  </FluidContainer>
);
