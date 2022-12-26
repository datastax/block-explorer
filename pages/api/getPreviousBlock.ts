import { gql } from '@apollo/client';
import client from 'lib/graphql/apolloClient';
import { Query } from 'lib/graphql/generated/generate';
import { GET_PREVIOUS_BLOCK } from 'lib/graphql/queries';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { blockGroup, blockNumber } = req?.body;
  const { data, error } = await client.query<Query>({
    query: gql`
      ${GET_PREVIOUS_BLOCK}
    `,
    variables: {
      blockGroup,
      blockNumber,
    },
  });

  res.json({ data, error });
}
