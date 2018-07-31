import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {
  AvailablePlayersPanel,
  Title,
  UndraftedPlayer
} from './styled/AvailablePlayersPanel';
import { List } from './styled/List';

const PLAYERS_QUERY = gql`
  query players($freeAgents: Boolean) {
    players(freeAgents: $freeAgents) {
      id
      name
      position
      nflTeam
      rank
    }
  }
`;

class AvailablePlayers extends Component {
  handleSelectedPlayer = playerId => {
    this.props.playerSelect(playerId);
  };

  render() {
    if (this.props.playersQuery.loading) {
      return <div>Loading</div>;
    }

    if (this.props.playersQuery.error) {
      return <div>Error {this.props.playersQuery.error.message}</div>;
    }

    return (
      <AvailablePlayersPanel>
        <Title>Undrafted Players</Title>

        <List>
          {this.props.playersQuery.players.map(p => (
            <UndraftedPlayer
              key={p.id}
              onClick={() => this.handleSelectedPlayer(p.id)}
            >
              <strong>{p.rank}</strong> {p.position} {p.name} ({p.nflTeam})
            </UndraftedPlayer>
          ))}
        </List>
      </AvailablePlayersPanel>
    );
  }
}

export default graphql(PLAYERS_QUERY, {
  name: 'playersQuery',
  options: () => ({ variables: { freeAgents: true } })
})(AvailablePlayers);
