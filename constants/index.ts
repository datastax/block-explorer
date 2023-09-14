const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'https://krypton-etl.herokuapp.com/graphql';

const JWT_KEY = process.env.NEXT_PUBLIC_JWT_KEY || '';
const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;
const REST_END_POINTPOINT = process.env.NEXT_PUBLIC_REST_ENDPOINT;

const SITE_URL = 'https://eth-explorer.datastax.com';

const SITEMAP_SIZE = 30000;

enum PAGINATION_EVENT {
  PREV = 'previous',
  NEXT = 'next',
}

export {
  GRAPHQL_ENDPOINT,
  SITE_URL,
  API_ACCESS_TOKEN,
  REST_END_POINTPOINT,
  SITEMAP_SIZE,
  JWT_KEY,
  PAGINATION_EVENT,
};
export * from './routes';
export * from './stubs';
