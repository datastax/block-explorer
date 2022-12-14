import Hero from '@components/shared/Hero'
import TransactionsTable from '@components/Transactions/Table'
import { PAGINATION_EVENT, transactionTitles } from '@constants'
import {
  GetPaginatedEThTransactionsQuery,
  useGetLatestBlockGroupQuery,
  useGetLatestEthBlockLazyQuery,
  useGetNextBlockForTransactionLazyQuery,
  useGetPaginatedEThTransactionsLazyQuery,
  useGetPreviousBlockForTransactionLazyQuery,
} from 'lib/graphql/generated/generate'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { TransactionBlockDetail } from 'types'

const Transactions: NextPage = () => {
  const router = useRouter()

  const [pageSize, setPageSize] = useState(10)
  const [pageStateArray, setPageStateArray] = useState<string[]>([''])
  const [blockDetails, setBlockDetails] = useState<TransactionBlockDetail>()
  const [paginatedTransactions, setpaginatedTransactions] =
    useState<GetPaginatedEThTransactionsQuery>()

  const blockNumber = router.query['blockNumber'] as string
  const blockHash = router.query['blockHash'] as string

  const [
    getNextBlockTranscation,
    { error: nextBlockTransactionError, loading: nextBlockTranscationLoading },
  ] = useGetNextBlockForTransactionLazyQuery()

  const [
    getPreviousBlockTranscation,
    {
      error: previousBlockTransactionError,
      loading: previousBlockTranscationLoading,
    },
  ] = useGetPreviousBlockForTransactionLazyQuery()
  const [getLatestBlock, { error: latestBlockError }] =
    useGetLatestEthBlockLazyQuery()

  const { data: blockGroupData, error: latestBlockGroupError } =
    useGetLatestBlockGroupQuery({
      onCompleted: (res) => {
        getLatestBlock({
          variables: {
            filter: {
              blocks_group: {
                eq: res?.dashboard_analytics?.values?.[0]?.latest_blocks_group,
              },
            },
            options: {
              pageState: null,
              pageSize: 1,
            },
          },
          onCompleted: (res) => {
            setBlockDetails({
              blockHash: String(res?.eth_blocks?.values?.[0]?.hash),
              blockNumber: res?.eth_blocks?.values?.[0]?.number,
            })
          },
        })
      },
    })

  const [
    getTransactions,
    {
      data: latestTransactions,
      error: transactionError,
      loading: loadingTransactions,
    },
  ] = useGetPaginatedEThTransactionsLazyQuery()

  const [getNewTransactions] = useGetPaginatedEThTransactionsLazyQuery()

  const [
    getTransactionsByBlock,
    {
      data: transactionsByBlock,
      error: transactionErrorByBlock,
      loading: loadingTransactionsByBlock,
    },
  ] = useGetPaginatedEThTransactionsLazyQuery()

  const handlePagination = (paginationEvent: PAGINATION_EVENT) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT)
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: blockDetails?.blockHash,
            },
          },
          options: {
            pageState: pageStateArray[pageStateArray.length - 1],
            pageSize: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined)
          setPageStateArray([''])
        },
        onCompleted: (respnsePreviousBlocks) => {
          const lengthOfLatestTransactions =
            respnsePreviousBlocks?.transactions?.values?.length || pageSize

          if (lengthOfLatestTransactions < pageSize && latestTransactions) {
            getNextBlockTranscation({
              variables: {
                blockGroup: Number(
                  blockGroupData?.dashboard_analytics?.values?.[0]
                    ?.latest_blocks_group
                ),
                blockNumber: Number(
                  respnsePreviousBlocks?.transactions?.values?.[
                    lengthOfLatestTransactions - 1
                  ]?.block_number
                ),
              },
              onError: (error) => {
                console.error('Error  :  ', error)
              },
              onCompleted: (res) => {
                getNewTransactions({
                  variables: {
                    filter: {
                      block_hash: {
                        eq: res?.eth_blocks?.values?.[0]?.hash,
                      },
                    },
                    options: {
                      pageState: null,
                      pageSize: pageSize - lengthOfLatestTransactions,
                    },
                  },
                  onCompleted: (responseNewBlocks) => {
                    const newArray: GetPaginatedEThTransactionsQuery = {
                      transactions: {
                        pageState: responseNewBlocks?.transactions?.pageState,
                        values: [
                          ...(respnsePreviousBlocks?.transactions?.values ||
                            []),
                          ...(responseNewBlocks?.transactions?.values || []),
                        ],
                      },
                    }
                    setpaginatedTransactions(newArray)
                    setPageStateArray((prevState) => [
                      ...prevState,
                      String(responseNewBlocks?.transactions?.pageState),
                    ])
                  },
                  onError: () => {
                    setBlockDetails(undefined)
                  },
                })
              },
            })
          }
        },
      })

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: blockDetails?.blockHash,
            },
          },
          options: {
            pageState: pageStateArray[pageStateArray.length - 3] || null,
            pageSize: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined)
          setPageStateArray([''])
        },
      })
      setPageStateArray((prev) => prev.slice(0, -2))
    }
  }

  useEffect(() => {
    setPageStateArray([''])
  }, [pageSize])

  useEffect(() => {
    if (!blockHash && !blockNumber && transactionsByBlock) {
      window.location.reload()
    }
  }, [blockNumber, blockHash, transactionsByBlock])

  useEffect(() => {
    if (blockNumber && blockHash) {
      setBlockDetails({
        blockHash: blockHash,
        blockNumber: Number(blockNumber),
      })
      getTransactionsByBlock({
        variables: {
          filter: {
            block_hash: {
              eq: blockHash,
            },
          },
          options: {
            pageState: null,
            pageSize: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined)
        },
      })
    } else {
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: blockDetails?.blockHash,
            },
          },
          options: {
            pageState: null,
            pageSize: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined)
        },
      })
    }
  }, [
    getTransactionsByBlock,
    pageSize,
    getTransactions,
    blockNumber,
    blockHash,
    blockDetails?.blockHash,
  ])

  useEffect(() => {
    if (latestTransactions) {
      setpaginatedTransactions(latestTransactions)
      setPageStateArray((prevState) => [
        ...prevState,
        String(latestTransactions?.transactions?.pageState),
      ])
    }
  }, [latestTransactions])

  useEffect(() => {
    if (transactionsByBlock) {
      setpaginatedTransactions(transactionsByBlock)
      setPageStateArray((prevState) => [
        ...prevState,
        String(transactionsByBlock?.transactions?.pageState),
      ])
    }
  }, [transactionsByBlock])

  if (
    transactionError ||
    transactionErrorByBlock ||
    latestBlockGroupError ||
    latestBlockError ||
    nextBlockTransactionError ||
    previousBlockTransactionError
  ) {
    console.error(
      transactionError ||
        transactionErrorByBlock ||
        latestBlockGroupError ||
        latestBlockError ||
        nextBlockTransactionError ||
        previousBlockTransactionError
    )
  }
  return (
    <>
      <Hero title="Transactions" />
      <TransactionsTable
        titles={transactionTitles}
        transactions={paginatedTransactions}
        pageSize={pageSize}
        setPageSize={setPageSize}
        handlePagination={handlePagination}
        setBlockDetails={setBlockDetails}
        loading={
          loadingTransactions ||
          loadingTransactionsByBlock ||
          nextBlockTranscationLoading ||
          previousBlockTranscationLoading
        }
      />
    </>
  )
}

export default Transactions
