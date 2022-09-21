import { useEffect, useCallback, useState } from 'react'
import type { NextPage, NextPageContext } from 'next'
import Router from 'next/router'
import { Typography, Box } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import Hero from '@components/shared/Hero'
import TransactionDetail from '@components/TransactionDetail'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import Tabs from '@components/shared/Tabs/CustomTabs'
import TabPanel from '@components/shared/Tabs/CustomTabsPanel'
import TransactionLogs from '@components/TransactionDetail/TransactionLogs'
import {
  useGetBlocksLazyQuery,
  useGetConsecutiveTransactionsLazyQuery,
  useGetTransactionByHashQuery,
} from 'lib/graphql/generated'
import { TransactionDetails } from 'types'
import { mapRawDataToTransactionDetails } from 'utils'
import { mockLogsData, tabsList } from '@constants/stubs'

interface TransactionProps {
  transactionHash: string
}

const Transaction: NextPage<TransactionProps> = (props: TransactionProps) => {
  const { transactionHash } = props

  const [tabIndex, setTabIndex] = React.useState(0)
  const [blockConfirmation, setBlockConfirmation] = useState<number>()
  const [transactionDetailData, setTransactionDetailData] =
    useState<TransactionDetails>()

  const { data: transactionDetails, error: transactionError } =
    useGetTransactionByHashQuery({
      variables: {
        data: transactionHash as string,
      },
    })

  const [
    getLatestBlocks,
    { data: latestBlock, error: blockError, loading: blockLoading },
  ] = useGetBlocksLazyQuery()

  const [
    getConsecutiveTransaction,
    { data: consecutiveTransaction, error: consecutiveTransactionError },
  ] = useGetConsecutiveTransactionsLazyQuery()

  if (blockError || transactionError || consecutiveTransactionError) {
    console.error(
      blockError + ' ' + transactionError + ' ' + consecutiveTransactionError
    )
  }

  const [nextConsecutive, setNextConsecutive] = useState<number | null>()
  const [previousConsecutive, setPreviousConsecutive] = useState<
    number | null
  >()
  const [blockHash, setBlockHash] = useState<string>()
  const [blockNumber, setBlockNumber] = useState<number>()

  const setNextConsecutiveState = () => {
    setPreviousConsecutive(undefined)
    setNextConsecutive(transactionDetailData?.TransactionIndex)
    setBlockHash(transactionDetails?.getTransactionByHash?.block_hash)
    setBlockNumber(transactionDetails?.getTransactionByHash?.block_number)
  }

  const setPreviousConsecutiveState = () => {
    setPreviousConsecutive(transactionDetailData?.TransactionIndex)
    setNextConsecutive(undefined)
    setBlockHash(transactionDetails?.getTransactionByHash?.block_hash)
    setBlockNumber(transactionDetails?.getTransactionByHash?.block_number)
  }

  const resetStates = useCallback((hash: string) => {
    setPreviousConsecutive(undefined)
    setNextConsecutive(undefined)
    setBlockHash(undefined)
    setBlockNumber(undefined)
    Router.push(hash)
  }, [])

  useEffect(() => {
    if (nextConsecutive || previousConsecutive === 0) {
      getConsecutiveTransaction({
        variables: {
          transactionsdata: {
            blockHash: blockHash,
            blockNumber: blockNumber,
            pagesInput: {
              pageSize: 1,
              next: nextConsecutive,
              previous: undefined,
            },
          },
        },
      })
    }
    if (previousConsecutive || previousConsecutive === 0) {
      getConsecutiveTransaction({
        variables: {
          transactionsdata: {
            blockHash: blockHash,
            blockNumber: blockNumber,
            pagesInput: {
              pageSize: 1,
              next: undefined,
              previous: previousConsecutive,
            },
          },
        },
      })
    }
  }, [
    blockHash,
    blockNumber,
    getConsecutiveTransaction,
    nextConsecutive,
    previousConsecutive,
  ])

  useEffect(() => {
    if (consecutiveTransaction?.transactions[0]?.hash) {
      resetStates(consecutiveTransaction?.transactions[0]?.hash)
    }
  }, [consecutiveTransaction?.transactions, resetStates])

  if (transactionError || blockError) {
    console.error(transactionError + ' ' + blockError)
  }

  useEffect(() => {
    if (latestBlock)
      setBlockConfirmation(latestBlock?.getBlocks?.blocks[0]?.number)
  }, [latestBlock])

  useEffect(() => {
    if (transactionDetails) {
      getLatestBlocks({
        variables: {
          data: {
            pageSize: 1,
          },
        },
      })
      if (blockConfirmation && !blockLoading)
        setTransactionDetailData(
          mapRawDataToTransactionDetails(transactionDetails, blockConfirmation)
        )
    }
  }, [
    blockConfirmation,
    blockLoading,
    getLatestBlocks,
    latestBlock,
    transactionDetails,
  ])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <>
      <Hero
        title="Transaction Details"
        showChips={false}
        showPagination={true}
        showDropdown={false} // FOR NOW WE ARE HIDING DROPDOWN, SETTING THIS PROP TO'false'
        setNextConsecutiveState={setNextConsecutiveState}
        setPreviousConsecutiveState={setPreviousConsecutiveState}
      />

      <Tabs tabIndex={tabIndex} tabsList={tabsList} onChange={handleChange} />

      {transactionDetailData ? (
        <>
          <TabPanel value={tabIndex} index={0}>
            <TransactionDetail TransactionData={transactionDetailData} />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Typography
              fontWeight={500}
              fontSize="22px"
              color={colors.neutral100}
            >
              Transaction Receipt Event Logs
            </Typography>
            <TransactionLogs logsData={mockLogsData} />
          </TabPanel>
        </>
      ) : (
        <Box sx={{ width: '100%' }}>
          <CustomSkeleton rows={10} />
        </Box>
      )}
    </>
  )
}

export default Transaction

export async function getServerSideProps(context: NextPageContext) {
  const { transactionhash } = context.query
  return { props: { transactionHash: transactionhash as string } }
}
