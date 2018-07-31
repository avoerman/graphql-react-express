import styled from 'styled-components';
import { Panel } from './Panel';

export const AppContent = Panel.extend`
  display: flex;
  min-height: 20em;
  box-shadow: 0px 0px 8px 2px lightgrey;
  background: #f8f8f8;
`;

export const AppWrapper = styled.section`
  margin: 0 auto;
  width: 90%;
  max-width: 1600px;
`;
