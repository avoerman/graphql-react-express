import React, { Component } from 'react';
import gql from 'graphql-tag';
import './AvailablePlayers.css';
import { Query } from 'react-apollo';

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
    return (
      <div className="panel availablePlayers">
        <h3>Undrafted Players</h3>
        <Query query={PLAYERS_QUERY} variables={{ freeAgents: true }}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;
            return (
              <ul>
                {data.players.map(p => (
                  <li key={p.id} onClick={() => this.handleSelectedPlayer(p.id)}>
                    <strong>{p.rank}</strong> {p.position} {p.name} ({p.nflTeam})
                  </li>
                ))}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default AvailablePlayers;
