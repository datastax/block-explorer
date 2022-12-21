const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'https://krypton-etl.herokuapp.com/graphql'

const JWT_KEY = process.env.NEXT_PUBLIC_JWT_KEY || ''

export { GRAPHQL_ENDPOINT, JWT_KEY }
export * from './routes'
export * from './stubs'
