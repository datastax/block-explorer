import BlocksList from '@components/Home/BlocksList'
import TransactionsList from '@components/Home/TransactionsList'
import {  Stack, useMediaQuery } from '@mui/material'
import {
  useGetBlocksQuery,
  useGetTransactionsLazyQuery,
} from '@lib/graphql/generated'
import { useEffect, useState } from 'react'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import { Container } from './styles'

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
    if (latestBlocks) setBlockHash(latestBlocks.getBlocks[0].hash)
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
  const tabScreen = useMediaQuery('(max-width:1000px)')
  return (
    <Stack spacing={'24px'} direction={tabScreen ? 'column' : 'row'}>
      {!loadingBlocks ? (
        <BlocksList title={'Latest Blocks'} blocks={latestBlocks} />
      ) : (
        <Container>
          <CustomSkeleton rows={6} />
        </Container>
      )}
      {!loadingTransactions ? (
        <TransactionsList
          title={'Latest Transactions'}
          transactions={latestTransactions}
        />
      ) : (
        <Container>
          <CustomSkeleton rows={6} />
        </Container>
      )}
    </Stack>
  )
}

export default LatestData
