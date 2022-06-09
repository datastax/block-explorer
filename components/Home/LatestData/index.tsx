import BlocksList from '@components/Home/BlocksList'
// import TransactionsList from '@components/Home/TransactionsList'

import { Stack } from '@mui/material'
import {
  useGetBlocksQuery,
  useGetTransactionsQuery,
} from '@lib/graphql/generated'

const LatestData = () => {
  const { data: latestBlocks, error } = useGetBlocksQuery({
    variables: {
      data: {
        pageSize: 6,
      },
    },
  })
  const { data: latestTransactions, error: transactionError } =
    useGetTransactionsQuery({
      variables: {
        transactionsdata: {
          blockHash:
            '0xfc156ad14fd527532255a33008792957e0c6ebdc05db17b8ff8149fd663284d5',
          pagesInput: {
            pageSize: 6,
          },
        },
      },
    })

  if (error) {
    console.error(error)
  }

  if (transactionError) {
    console.error(transactionError)
  }
  
  console.log('latestTransactions', latestTransactions)

  return (
    <Stack spacing={'24px'} direction={'row'}>
      <BlocksList title={'Latest Blocks'} blocks={latestBlocks} />
      {/* <TransactionsList
        title={'Latest Transactions'}
        data={latestTransactions}
      /> */}
    </Stack>
  )
}

export default LatestData
