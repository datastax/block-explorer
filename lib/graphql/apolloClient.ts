import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GRAPHQL_ENDPOINT } from '@constants'
import { createJWt, timeLapseInSeconds, verifyJWT } from 'utils'
import {
  readFromSessionStorage,
  writeToSessionStorage,
} from 'utils/sessionStorage'

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
})

const EXPIRY_TIME = 3600
const PAYLOAD = { tokenExpiry: timeLapseInSeconds(60) }

const retrieveToken = (key: string) => {
  let token = readFromSessionStorage(key)
  if (!token) {
    const generatedToken = createJWt(PAYLOAD, EXPIRY_TIME)
    writeToSessionStorage(key, generatedToken)
    token = generatedToken
  }
  if (token) {
    try {
      verifyJWT(token)
    } catch (error) {
      const generatedToken = createJWt(PAYLOAD, EXPIRY_TIME)
      writeToSessionStorage(key, generatedToken)
      token = generatedToken
    }
  }
  return token
}

const authLink = setContext((_, { headers }) => {
  const RawToken = retrieveToken('Token')

  const BearerToken = RawToken ? `Bearer ${RawToken}` : ''
  return {
    headers: {
      ...headers,
      authorization: BearerToken,
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
