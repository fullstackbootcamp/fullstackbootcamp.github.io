import styled from '@emotion/styled';
import { rhythm, scale } from '../utils/typography';

export const Hero = styled.h1`
  color: ${props => props.color || '#000'};
  font-size: ${props => rhythm(props.fontSize || 2.5)};
  letter-spacing: 3px;
  margin: 0;
`;

export const Lead = styled.p`
  color: ${props => props.color || '#000'};
  font-size: ${props => rhythm(props.fontSize || 1.5)};
  font-weight: 300;
  margin: 0;
`;
