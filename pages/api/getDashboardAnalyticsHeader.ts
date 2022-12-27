import { gql } from '@apollo/client';
import client from 'lib/graphql/apolloClient';
import { Query } from 'lib/graphql/generated/generate';
import { GET_DASHBOARD_ANALYTICS_HEADER } from 'lib/graphql/queries';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req?.headers['referer']) {
    res.status(403).send({ message: 'UNAUTHORIZED' });
  }
  const { data, error } = await client.query<Query>({
    query: gql`
      ${GET_DASHBOARD_ANALYTICS_HEADER}
    `,
  });

  res.json({ data, error });
}
