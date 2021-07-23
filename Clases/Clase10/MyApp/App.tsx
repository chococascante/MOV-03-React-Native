import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import GrahqlEjemplo from './src/components/Graphql/Grahql';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GrahqlEjemplo />
    </ApolloProvider>
  );
};

export default App;
