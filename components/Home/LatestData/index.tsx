import BlocksList from '@components/Home/BlocksList'
import TransactionsList from '@components/Home/TransactionsList'
import { Stack } from '@mui/material'
import {
  useGetBlocksQuery,
  useGetTransactionsQuery,
} from '@lib/graphql/generated'

const LatestData = () => {
  const blockHash =
    '0xfc156ad14fd527532255a33008792957e0c6ebdc05db17b8ff8149fd663284d5' // TODO: SHOULD BE DYNAMIC

  const { data: latestBlocks, error: blocksError } = useGetBlocksQuery({
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
          blockHash,
          pagesInput: {
            pageSize: 6,
          },
        },
      },
    })

  if (blocksError) {
    console.error(blocksError)
  }

  if (transactionError) {
    console.error(transactionError)
  }

  return (
    <Stack spacing={'24px'} direction={'row'}>
      <BlocksList title={'Latest Blocks'} blocks={latestBlocks} />
      <TransactionsList
        title={'Latest Transactions'}
        transactions={latestTransactions}
      />
    </Stack>
  )
}

export default LatestData
