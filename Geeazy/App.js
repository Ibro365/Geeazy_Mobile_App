import React from 'react';
import {createAppContainer} from 'react-navigation';
import Providers from './navigation';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
});

const MyRootComponent = createAppContainer(Providers);

const App = () => {
  return(
  <ApolloProvider client={client}>
    <Providers />
  </ApolloProvider>
  )
}

//AppRegistry.registerComponent('MyApp', () => App);

export default App;
