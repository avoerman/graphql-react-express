import React, { Component } from 'react';
import { graphql, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
  PlayerCard,
  PlayerInfo,
  PlayerName,
  PlayerStats,
  DraftButton
} from './styled/PlayerCard';
import { Panel } from './styled/Panel';

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

const DRAFT_PLAYER = gql`
  mutation DraftMutation($ownerId: Int!, $playerId: Int!) {
    draft(ownerId: $ownerId, playerId: $playerId)
  }
`;

class SelectedPlayer extends Component {
  handleDraftCompleted = res => {
    if (res.draft) {
      this.props.playerDrafted();
    }
  };

  render() {
    return (
      <Panel>
        {!this.props.selectedPlayerId || this.props.selectedPlayerId === -1
          ? this.selectPlayer()
          : this.showPlayerDetails(this.props.selectedPlayerId)}
      </Panel>
    );
  }

  selectPlayer() {
    return <p>Select a player...</p>;
  }

  showPlayerDetails(id) {
    if (this.props.getPlayer.loading) {
      return <div>Loading</div>;
    }

    if (this.props.getPlayer.error) {
      return <div>Error</div>;
    }

    const player = this.props.getPlayer.player;

    return (
      <PlayerCard>
        <PlayerInfo>
          <PlayerName>
            {player.name} ({player.nflTeam})
          </PlayerName>
          <PlayerStats>
            <span>Rank: {player.rank}</span> <span>Bye: {player.bye}</span>
          </PlayerStats>
        </PlayerInfo>
        <Mutation
          mutation={DRAFT_PLAYER}
          variables={{ playerId: player.id, ownerId: this.props.ownerId }}
          onCompleted={data => this.handleDraftCompleted(data)}
          refetchQueries={['players', 'owner']}
        >
          {draftMutation => (
            <DraftButton onClick={draftMutation}>Draft</DraftButton>
          )}
        </Mutation>
      </PlayerCard>
    );
  }
}

export default graphql(GET_PLAYER, {
  name: 'getPlayer',
  options: props => ({ variables: { id: props.selectedPlayerId } })
})(SelectedPlayer);
