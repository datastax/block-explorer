import BlocksList from '@components/Home/BlocksList'
import TransactionsList from '@components/Home/TransactionsList'
import { Stack, useMediaQuery } from '@mui/material'
import {
  useGetEthBlocksLazyQuery,
  useGetTransactionsOfLatestBlockLazyQuery,
} from '@lib/graphql/generated'
import { useEffect } from 'react'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import { Container } from './styles'

interface LatestDataInterface {
  latestBlocksGroup: number | undefined
}
const LatestData = ({ latestBlocksGroup }: LatestDataInterface) => {
  const [getBlocks, { data: latestBlocks, error: blocksError }] =
    useGetEthBlocksLazyQuery()

  const [
    getTransactions,
    { data: latestTransactions, error: transactionError },
  ] = useGetTransactionsOfLatestBlockLazyQuery()
  if (transactionError) {
    console.error(transactionError)
  }

  if (blocksError) {
    console.error(blocksError)
  }

  useEffect(() => {
    if (latestBlocks && latestBlocks?.eth_blocks?.values?.[0]?.hash) {
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: latestBlocks?.eth_blocks?.values?.[0]?.hash,
            },
          },
          options: {
            pageSize: 6,
          },
        },
      })
    }
  }, [getTransactions, latestBlocks])

  useEffect(() => {
    if (latestBlocksGroup)
      getBlocks({
        variables: {
          filter: {
            blocks_group: {
              eq: latestBlocksGroup,
            },
          },
          options: {
            pageSize: 6,
          },
        },
      })
  }, [getBlocks, latestBlocksGroup])

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
          transactionsList={latestTransactions}
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
