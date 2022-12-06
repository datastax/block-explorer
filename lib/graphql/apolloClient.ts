import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GRAPHQL_ENDPOINT } from '@constants'
import { TokenExpiredError } from 'jsonwebtoken'
import { createJWt, timeLapseInSeconds, verifyJWT } from 'utils'
import {
  readFromSessionStorage,
  writeToSessionStorage,
} from 'utils/sessionStorage'

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
})

// const EXPIRY_TIME = 3600
// const PAYLOAD = { tokenExpiry: timeLapseInSeconds(60) }

const EXPIRY_TIME = 60
const PAYLOAD = { tokenExpiry: timeLapseInSeconds(1) }

const retrieveToken = (key: string) => {
  console.log('TokenExpiredError', TokenExpiredError.name)

  let token = readFromSessionStorage(key)
  console.log(`token on time ${new Date().toString()} ${token}`)
  if (!token) {
    console.log('!token', token)
    const generatedToken = createJWt(PAYLOAD, EXPIRY_TIME)
    writeToSessionStorage(key, generatedToken)
    token = generatedToken
  }
  if (token) {
    try {
      console.log('token try', token)
      verifyJWT(token)
    } catch (error) {
      console.log('error', error)
      const generatedToken = createJWt(PAYLOAD, EXPIRY_TIME)
      console.log('generatedToken', generatedToken)
      writeToSessionStorage(key, generatedToken)
      token = generatedToken
      console.log('Token', generatedToken)
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
