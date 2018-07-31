import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

const ApolloApp = App => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));

registerServiceWorker();
