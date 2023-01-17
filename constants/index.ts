const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'https://krypton-etl.herokuapp.com/graphql';

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

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
  SITEMAP_SIZE,
  PAGINATION_EVENT,
};
export * from './routes';
export * from './stubs';
