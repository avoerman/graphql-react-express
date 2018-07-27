import React, { Component } from 'react';
import './SelectedPlayer.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PLAYER = gql`
  query player($id: Int) {
    player(id: $id) {
      name
      nflTeam
      rank
      bye
    }
  }
`;

class SelectedPlayer extends Component {
  render() {
    return (
      <div className="selectedPlayer panel">
        {!this.props.selectedPlayerId || this.props.selectedPlayerId === -1
          ? this.selectPlayer()
          : this.showPlayerDetails(this.props.selectedPlayerId)}
      </div>
    );
  }

  selectPlayer() {
    return <p>Select a player...</p>;
  }

  showPlayerDetails(id) {
    return (
      <div>
        <Query query={GET_PLAYER} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;
            return (
              <div className="playerCard">
                <div className="playerInfo">
                  <div className="playerName">
                    {data.player.name} ({data.player.nflTeam})
                  </div>
                  <div className="playerStats">
                    <span>Rank: {data.player.rank}</span> <span>Bye: {data.player.bye}</span>
                  </div>
                </div>
                <button className="draftButton">Draft</button>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default SelectedPlayer;
