import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import OwnerDetails from './OwnerDetails';
import { OwnersPanel, SelectOwner } from './styled/OwnersPanel';

class Owners extends Component {
  state = {
    selectedOwner: 2
  };

  handleOwnerChange = event => {
    this.setState({
      selectedOwner: event.target.value
    });
  };

  render() {
    if (this.props.ownersQuery.loading) {
      return <div>Loading</div>;
    }

    if (this.props.ownersQuery.error) {
      return <div>Error</div>;
    }

    return (
      <OwnersPanel>
        <SelectOwner
          value={this.state.selectedOwner}
          onChange={this.handleOwnerChange}
        >
          <option value="" defaultValue>
            Select Team...
          </option>
          {this.props.ownersQuery.owners.map(o => (
            <option key={o.id} value={o.id}>
              {o.teamName}
            </option>
          ))}
        </SelectOwner>
        <OwnerDetails ownerId={this.state.selectedOwner} />
      </OwnersPanel>
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
