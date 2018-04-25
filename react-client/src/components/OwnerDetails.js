import React, { Component } from "react";
import "./OwnerDetails.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DETAILS = gql`
  query owner($id: Int) {
    owner(id: $id) {
      teamName
      players {
        firstName
        lastName
      }
    }
  }
`;

class OwnerDetails extends Component {
  render() {
    return !this.props.ownerId || this.props.ownerId === -1
      ? ""
      : this.showDetails(this.props.ownerId);
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
                <h2>{data.owner.teamName}</h2>
                <ul>
                  {data.owner.players.map(player => (
                    <li>
                      {player.firstName} {player.lastName}
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
