import styled from 'styled-components';

export const PlayerCard = styled.section`
  display: flex;
  align-items: center;
  min-height: 3em;
`;

export const PlayerInfo = styled.div``;

export const PlayerName = styled.div`
  color: darkgreen;
  font-weight: bold;
  flex: 1;
`;

export const PlayerStats = styled.div`
  color: #333;
  margin-top: 0.25em;
`;

export const DraftButton = styled.button`
  padding: 0.25em;
  color: goldenrod;
  border: 1px solid goldenrod;
  background: white;
  border-radius: 0.25em;
  margin-left: auto;
`;
