import BlocksList from '@components/Home/BlocksList'
import TransactionsList from '@components/Home/TransactionsList'
import { Box, Stack } from '@mui/material'
import {
  useGetBlocksQuery,
  useGetTransactionsLazyQuery,
} from '@lib/graphql/generated'
import { useEffect, useState } from 'react'
import CustomSkeleton from '@components/shared/CustomSkeleton'

const LatestData = () => {
  const [blockHash, setBlockHash] = useState('')

  const {
    data: latestBlocks,
    error: blocksError,
    loading: loadingBlocks,
  } = useGetBlocksQuery({
    variables: {
      data: {
        pageSize: 6,
      },
    },
  })

  const [
    getTransactions,
    {
      data: latestTransactions,
      error: transactionError,
      loading: loadingTransactions,
    },
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
      {!loadingBlocks ? (
        <BlocksList title={'Latest Blocks'} blocks={latestBlocks} />
      ) : (
        <Box sx={{ width: '50%' }}>
          <CustomSkeleton rows={6} />
        </Box>
      )}
      {!loadingTransactions ? (
        <TransactionsList
          title={'Latest Transactions'}
          transactions={latestTransactions}
        />
      ) : (
        <Box sx={{ width: '50%' }}>
          <CustomSkeleton rows={6} />
        </Box>
      )}
    </Stack>
  )
}

export default LatestData
