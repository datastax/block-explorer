import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://krypton-etl-staging.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export default client
