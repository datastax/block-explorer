import BlocksList from '@components/Home/BlocksList'
import TransactionsList from '@components/Home/TransactionsList'
import { Stack, useMediaQuery } from '@mui/material'
import {
  useGetBlocksLazyQuery,
  useGetTransactionsLazyQuery,
} from '@lib/graphql/generated'
import { useEffect } from 'react'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import { Container } from './styles'

const LatestData = () => {
  const [getBlocks, { data: latestBlocks, error: blocksError }] =
    useGetBlocksLazyQuery()

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
    getTransactions({
      variables: {
        transactionsdata: {
          pagesInput: {
            pageSize: 6,
          },
        },
      },
    })
  }, [getTransactions])

  useEffect(() => {
    getBlocks({
      variables: {
        data: {
          pageSize: 6,
        },
      },
    })
  }, [getBlocks])

  const tabScreen = useMediaQuery('(max-width:1000px)')
  return (
    <Stack spacing={'24px'} direction={tabScreen ? 'column' : 'row'}>
      {latestBlocks ? (
        <BlocksList title={'Latest Blocks'} blocks={latestBlocks} />
      ) : (
        <Container>
          <CustomSkeleton rows={6} />
        </Container>
      )}
      {latestTransactions ? (
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
