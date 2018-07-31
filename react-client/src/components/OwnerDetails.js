import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { List, ListItem } from './styled/List';

const DetailContainer = styled.div`
  margin-top: 1em;
`;

const GET_DETAILS = gql`
  query owner($id: Int) {
    owner(id: $id) {
      teamName
      players {
        name
        position
        nflTeam
      }
    }
  }
`;

class OwnerDetails extends Component {
  render() {
    return !this.props.ownerId || this.props.ownerId === -1
      ? ''
      : this.showDetails(this.props.ownerId);
  }

  showDetails(ownerId) {
    return (
      <DetailContainer>
        <Query query={GET_DETAILS} variables={{ id: ownerId }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;

            return (
              <List>
                {data.owner.players.map(player => (
                  <ListItem>
                    <strong>{player.position}</strong> {player.name} ({
                      player.nflTeam
                    })
                  </ListItem>
                ))}
              </List>
            );
          }}
        </Query>
      </DetailContainer>
    );
  }
}

export default OwnerDetails;
