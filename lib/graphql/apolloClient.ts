import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { API_ACCESS_TOKEN, GRAPHQL_ENDPOINT } from '@constants'


const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
})


const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-cassandra-token': API_ACCESS_TOKEN,
    },
  }
})

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})

export default client
