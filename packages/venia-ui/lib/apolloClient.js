import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://pwa-docker.localhost:8080/graphiql',
  cache: new InMemoryCache()
});

export default client;
