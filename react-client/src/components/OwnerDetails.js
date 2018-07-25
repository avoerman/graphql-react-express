import React, { Component } from 'react';
import './OwnerDetails.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
    return !this.props.ownerId || this.props.ownerId === -1 ? '' : this.showDetails(this.props.ownerId);
  }

  showDetails(id) {
    return (
      <div className="details">
        <Query query={GET_DETAILS} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;
            return (
              <div>
                <ul>
                  {data.owner.players.map(player => (
                    <li>
                      <strong>{player.position}</strong> {player.name} ({player.nflTeam})
                    </li>
                  ))}
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default OwnerDetails;
