import React, { Component } from "react";
import "./App.css";
import ApolloProvider from "react-apollo/ApolloProvider";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Owners from "./components/Owners";
import OwnerDetails from "./components/OwnerDetails";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

class App extends Component {
  state = {
    selectedOwner: -1
  };

  handleOwnerClick = id => {
    this.setState({
      selectedOwner: id
    });
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <h1>Fantasy Football League</h1>
          <div className="wrapper">
            <Owners ownerClick={this.handleOwnerClick} />
            <OwnerDetails ownerId={this.state.selectedOwner} />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
