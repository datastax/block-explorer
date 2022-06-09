import BlocksList from '@components/Home/BlocksList'
import TransactionsList from '@components/Home/TransactionsList'
import { Stack } from '@mui/material'
import {
  useGetBlocksQuery,
  useGetTransactionsLazyQuery,
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

  const [
    getTransactions,
    { data: latestTransactions, error: transactionError },
  ] = useGetTransactionsLazyQuery()
  if (transactionError) {
    console.error(transactionError)
  }

  if (blocksError) {
    console.error(blocksError)
  }

  useEffect(() => {
    if (latestBlocks) setBlockHash(latestBlocks.getBlocks.block[0].hash)
  }, [latestBlocks])

  useEffect(() => {
    if (blockHash)
      getTransactions({
        variables: {
          transactionsdata: {
            blockHash,
            pagesInput: {
              pageSize: 6,
            },
          },
        },
      })
  }, [blockHash, getTransactions])

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
