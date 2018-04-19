import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import "./Owners.css";

class Owners extends Component {
  handleOwnerClick = id => {
    this.props.ownerClick(id);
  };

  render() {
    if (this.props.ownersQuery && this.props.ownersQuery.loading) {
      return <div>Loading</div>;
    }

    if (this.props.ownersQuery && this.props.ownersQuery.error) {
      return <div>Error</div>;
    }

    return (
      <div className="owners">
        <h2>Owners</h2>
        <ul>
          {this.props.ownersQuery.owners.map(o => (
            <li key={o.id}>
              <a href="#" onClick={() => this.handleOwnerClick(o.id)}>
                {o.teamName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const OWNERS_QUERY = gql`
  query {
    owners {
      id
      teamName
    }
  }
`;

export default graphql(OWNERS_QUERY, { name: "ownersQuery" })(Owners);
