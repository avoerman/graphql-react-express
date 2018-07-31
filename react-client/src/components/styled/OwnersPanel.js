import { Panel } from './Panel';
import styled from 'styled-components';

export const OwnersPanel = Panel.extend`
  border-color: goldenrod;
  flex: 1 1;
  max-width: 14em;
  min-height: 20em;
`;

export const SelectOwner = styled.select`
  width: 100%;
  padding: 0.2em;
`;
