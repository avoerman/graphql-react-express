import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './Owners.css';
import OwnerDetails from './OwnerDetails';

class Owners extends Component {
  state = {
    selectedOwner: 2
  };

  handleOwnerChange = event => {
    console.log('selected owner', event.target.value);
    this.setState({
      selectedOwner: event.target.value
    });
  };

  render() {
    if (this.props.ownersQuery && this.props.ownersQuery.loading) {
      return <div>Loading</div>;
    }

    if (this.props.ownersQuery && this.props.ownersQuery.error) {
      return <div>Error</div>;
    }

    return (
      <div className="owners panel">
        <select value={this.state.selectedOwner} onChange={this.handleOwnerChange}>
          <option value="" defaultValue>
            Select Team...
          </option>
          {this.props.ownersQuery.owners.map(o => (
            <option key={o.id} value={o.id}>
              {o.teamName}
            </option>
          ))}
        </select>
        <OwnerDetails ownerId={this.state.selectedOwner} />
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

export default graphql(OWNERS_QUERY, { name: 'ownersQuery' })(Owners);
