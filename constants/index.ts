const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'https://krypton-etl.herokuapp.com/graphql';

const API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

enum PAGINATION_EVENT {
  PREV = 'previous',
  NEXT = 'next',
}

export { GRAPHQL_ENDPOINT, API_ACCESS_TOKEN, PAGINATION_EVENT };
export * from './routes';
export * from './stubs';
