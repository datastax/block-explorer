import { ApolloClient, InMemoryCache } from '@apollo/client'
const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'https://krypton-etl.herokuapp.com/graphql'

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache({
    addTypename: false,
  }),
})

export default client
