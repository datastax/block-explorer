const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'https://krypton-etl.herokuapp.com/graphql'

const API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

enum PAGINATION_EVENT {
  PREV = 'previous',
  NEXT = 'next',
}

export { GRAPHQL_ENDPOINT, API_ACCESS_TOKEN, PAGINATION_EVENT, BASE_URL }
export * from './routes'
export * from './stubs'
