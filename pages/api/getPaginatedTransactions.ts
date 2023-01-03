import { gql } from '@apollo/client';
import client from 'lib/graphql/apolloClient';
import { Query } from 'lib/graphql/generated/generate';
import { GET_PAGINATED_ETH_TRANSACTIONS } from 'lib/graphql/queries';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req?.headers['referer']) {
    res.status(403).send({ message: 'UNAUTHORIZED' });
  }
  const { blockHash, pageState, pageSize, limit, transactionIndexExpression } =
    req?.body;
  const { data, error } = await client.query<Query>({
    query: gql`
      ${GET_PAGINATED_ETH_TRANSACTIONS}
    `,
    variables: {
      filter: {
        block_hash: {
          eq: blockHash,
        },
        ...(transactionIndexExpression && {
          transaction_index: transactionIndexExpression,
        }),
      },
      options: {
        ...(pageState && { pageState }),
        ...(pageSize && { pageSize }),
        ...(limit && { limit }),
      },
    },
  });

  res.json({ data, error });
}
