import { gql } from '@apollo/client';
import client from 'lib/graphql/apolloClient';
import { Query } from 'lib/graphql/generated/generate';
import { GET_DASHBOARD_ANALYTICS } from 'lib/graphql/queries';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await client.query<Query>({
    query: gql`
      ${GET_DASHBOARD_ANALYTICS}
    `,
  });

  res.json({ data, error });
}
