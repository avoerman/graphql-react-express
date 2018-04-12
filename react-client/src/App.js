import React, { Component } from "react";
import "./App.css";
import ApolloProvider from "react-apollo/ApolloProvider";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import AllPlayers from "./components/AllPlayers";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <AllPlayers />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
