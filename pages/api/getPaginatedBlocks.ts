import { gql } from '@apollo/client'
import client from 'lib/graphql/apolloClient'
import { Query } from 'lib/graphql/generated/generate'
import { Get_PAGINATED_BLOCKS_QUERY } from 'lib/graphql/queries'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { blockGroup, pageState, pageSize } = req?.body
  const { data, error } = await client.query<Query>({
    query: gql`
      ${Get_PAGINATED_BLOCKS_QUERY}
    `,
    variables: {
      filter: {
        blocks_group: {
          eq: blockGroup,
        },
      },
      options: {
        pageState: pageState,
        pageSize: pageSize,
      },
    },
  })

  res.json({ data, error })
}
