import React, { Component } from 'react';
import './SelectedPlayer.css';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

const DRAF_PLAYER = gql`
  mutation DraftMutation($ownerId: Int!, $playerId: Int!) {
    draft(ownerId: $ownerId, playerId: $playerId)
  }
`;

const GET_PLAYER = gql`
  query player($id: Int) {
    player(id: $id) {
      id
      name
      nflTeam
      rank
      bye
    }
  }
`;

class SelectedPlayer extends Component {
  handleDraftCompleted = data => {
    if (data.draft) {
      this.props.playerDrafted();
    }
  };

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
                <Mutation
                  mutation={DRAF_PLAYER}
                  variables={{ playerId: data.player.id, ownerId: this.props.ownerId }}
                  onCompleted={data => this.handleDraftCompleted(data)}
                  refetchQueries={['ownersQuery', 'players', 'owner']}
                >
                  {draftMutation => (
                    <button className="draftButton" onClick={draftMutation}>
                      Draft
                    </button>
                  )}
                </Mutation>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default SelectedPlayer;
