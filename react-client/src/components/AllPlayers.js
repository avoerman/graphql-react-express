import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class AllPlayers extends Component {
  render() {
    if (this.props.playersQuery && this.props.playersQuery.loading) {
      return <div>Loading</div>;
    }

    if (this.props.playersQuery && this.props.playersQuery.error) {
      return <div>Error</div>;
    }

    return (
      <div>
        <h1>Fantasy Football</h1>
        <div>
          <h2>All Players</h2>
          <ul>
            {this.props.playersQuery.players.map(p => (
              <li key={p.id}>
                {p.firstName} {p.lastName} -{" "}
                {p.owner ? (
                  <strong>{p.owner.teamName}</strong>
                ) : (
                  <em>Free Agent</em>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const PLAYERS_QUERY = gql`
  query {
    players {
      firstName
      lastName
      owner {
        teamName
      }
    }
  }
`;

export default graphql(PLAYERS_QUERY, { name: "playersQuery" })(AllPlayers);
