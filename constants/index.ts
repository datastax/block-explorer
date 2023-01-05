const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'https://krypton-etl.herokuapp.com/graphql';

const API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

const SITE_URL = 'https://eth-explorer.datastax.com';

enum PAGINATION_EVENT {
  PREV = 'previous',
  NEXT = 'next',
}

export { GRAPHQL_ENDPOINT, SITE_URL, API_ACCESS_TOKEN, PAGINATION_EVENT };
export * from './routes';
export * from './stubs';
