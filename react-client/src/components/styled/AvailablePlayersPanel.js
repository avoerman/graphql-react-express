import { Panel } from './Panel';
import styled from 'styled-components';
import { ListItem } from './List';

export const AvailablePlayersPanel = Panel.extend`
  margin-top: 1em;
  max-height: 30em;
  overflow-y: auto;
`;

export const Title = styled.h3`
  padding: 0;
  margin: 0.5em 0 1em 0;
  color: #333;
`;

export const UndraftedList = styled.ul``;

export const UndraftedPlayer = ListItem.extend`
  cursor: default;

  &:hover {
    color: goldenrod;
  }
`;
