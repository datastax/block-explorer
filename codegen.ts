import { CodegenConfig } from '@graphql-codegen/cli';

const NEXT_PUBLIC_GRAPHQL_ENDPOINT: string =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '';
const API_ACCESS_TOKEN: string = process.env.API_ACCESS_TOKEN || '';
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [NEXT_PUBLIC_GRAPHQL_ENDPOINT]: {
        headers: {
          'x-cassandra-token': API_ACCESS_TOKEN,
        },
      },
    },
  ],
  documents: './lib/graphql/*.graphql',
  generates: {
    'lib/graphql/generated/generate.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        hooksImportFrom: '@apollo/react-hooks',
      },
    },
  },
};
export default config;
