import { gql } from '@apollo/client';
import client from 'lib/graphql/apolloClient';
import { Query } from 'lib/graphql/generated/generate';
import { GET_PAGINATED_ETH_TRANSACTIONS } from 'lib/graphql/queries';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { blockHash, pageState, pageSize } = req?.body;
  const { data, error } = await client.query<Query>({
    query: gql`
      ${GET_PAGINATED_ETH_TRANSACTIONS}
    `,
    variables: {
      filter: {
        block_hash: {
          eq: blockHash,
        },
      },
      options: {
        pageState: pageState,
        pageSize: pageSize,
      },
    },
  });

  res.json({ data, error });
}
