import BlocksList from '@components/Home/BlocksList'
import TransactionsList from '@components/Home/TransactionsList'
import { Stack } from '@mui/material'
import {
  useGetBlocksQuery,
  useGetTransactionsQuery,
} from '@lib/graphql/generated'
import { useEffect, useState } from 'react'

const LatestData = () => {
  const [blockHash, setBlockHash] = useState('')

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

  useEffect(() => {
    if (latestBlocks) setBlockHash(latestBlocks.getBlocks.block[0].hash)
  }, [latestBlocks])

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
