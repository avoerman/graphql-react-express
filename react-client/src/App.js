import React, { Component } from 'react';
import './App.css';
import ApolloProvider from 'react-apollo/ApolloProvider';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Owners from './components/Owners';
import AvailablePlayers from './components/AvailablePlayers';
import SelectedPlayer from './components/SelectedPlayer';

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  state = {
    selectedPlayerId: -1
  };

  handleSelectedPlayer = playerId => {
    console.log('selected player', playerId);
    this.setState({ selectedPlayerId: playerId });
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <h1>Fantasy Football Draft App</h1>
          <div className="wrapper">
            <div className="playerPane">
              <SelectedPlayer selectedPlayerId={this.state.selectedPlayerId} />
              <AvailablePlayers playerSelect={this.handleSelectedPlayer} />
            </div>
            <Owners />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
