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
  useGetLogByTransactionLazyQuery,
  useGetTransactionByHashQuery,
} from 'lib/graphql/generated'
import { TransactionDetails, TabProps, InternalTxnsTabData } from 'types'
import {
  mapRawDataToInternalTransactions,
  mapRawDataToTransactionDetails,
} from 'utils'
import InternalTxns from '@components/InternalTxnsTab'

interface TransactionProps {
  transactionHash: string
}

const Transaction: NextPage<TransactionProps> = (props: TransactionProps) => {
  const { transactionHash } = props

  const [tabIndex, setTabIndex] = useState(0)
  const [blockConfirmation, setBlockConfirmation] = useState<number>()
  const [transactionDetailData, setTransactionDetailData] =
    useState<TransactionDetails>()
  const [internalTransactions, setInternalTransactions] = useState<
    InternalTxnsTabData[]
  >([])

  const { data: transactionDetails, error: transactionError } =
    useGetTransactionByHashQuery({
      variables: {
        data: transactionHash as string,
      },
    })

  const [getLogs, { data: transactionLogs, error: transactionLogsError }] =
    useGetLogByTransactionLazyQuery()

  if (transactionLogsError)
    console.error('Error While Fetching Transaction Logs', transactionLogsError)

  useEffect(() => {
    if (transactionDetails?.getTransactionByHash?.block_number)
      getLogs({
        variables: {
          data: {
            transactionHash: transactionHash as string,
            blockNumber: transactionDetails?.getTransactionByHash?.block_number,
          },
        },
      })
  }, [
    getLogs,
    transactionDetails?.getTransactionByHash?.block_number,
    transactionHash,
  ])

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
      if (blockConfirmation && !blockLoading) {
        setTransactionDetailData(
          mapRawDataToTransactionDetails(transactionDetails, blockConfirmation)
        )
        setInternalTransactions(
          mapRawDataToInternalTransactions(transactionDetails)
        )
      }
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

  const tabsList: TabProps[] = [
    {
      label: 'Transaction Overview',
      ariaControls: 'simple-tabpanel-0',
      id: 'simple-tab-0',
    },
    {
      label: `Logs (${transactionLogs?.getLogByTransaction?.length || 0})`,
      ariaControls: 'simple-tabpanel-1',
      id: 'simple-tab-2',
    },
    {
      label: `Internal Txns`,
      ariaControls: 'simple-tabpanel-2',
      id: 'simple-tab-3',
    },
  ]

  useEffect(() => {
    const locationHash = window.location.hash
    if (locationHash === '#eventlog') setTabIndex(1)
    if (locationHash === '#internal') setTabIndex(2)
  }, [])

  return (
    <>
      <Hero
        title="Transaction Details"
        showChips={false}
        showPagination={true}
        showDropdown={false}
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
            {transactionLogs &&
              transactionLogs?.getLogByTransaction?.length > 0 && (
                <TransactionLogs
                  logsData={transactionLogs.getLogByTransaction}
                />
              )}
          </TabPanel>
          {internalTransactions.length !== 0 && (
            <TabPanel value={tabIndex} index={2}>
              <InternalTxns data={internalTransactions} />
            </TabPanel>
          )}
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
