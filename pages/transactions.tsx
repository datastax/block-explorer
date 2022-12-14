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
  const [blockHashArray, setblockHashArray] = useState<string[]>([''])
  const [blockDetails, setBlockDetails] = useState<TransactionBlockDetail>()
  const [paginatedTransactions, setpaginatedTransactions] =
    useState<GetPaginatedEThTransactionsQuery>()

  const blockHash = router.query['block'] as string

  const [getLatestBlock, { error: latestBlockError }] =
    useGetLatestEthBlockLazyQuery()

  const [
    getTransactions,
    {
      data: latestTransactions,
      error: transactionError,
      loading: loadingTransactions,
    },
  ] = useGetPaginatedEThTransactionsLazyQuery()

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

  const [getNewTransactions] = useGetPaginatedEThTransactionsLazyQuery()

  const [getNextBlockTranscation] = useGetNextBlockForTransactionLazyQuery()
  const [getPreviousBlockTranscation] =
    useGetPreviousBlockForTransactionLazyQuery()

  const [
    getTransactionsByBlock,
    {
      data: transactionsByBlock,
      error: transactionErrorByBlock,
      loading: loadingTransactionsByBlock,
    },
  ] = useGetPaginatedEThTransactionsLazyQuery()

  const handleBlockTransactionPagination = (
    paginationEvent: PAGINATION_EVENT
  ) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT)
      getTransactionsByBlock({
        variables: {
          filter: {
            block_hash: {
              eq: blockHash,
            },
          },
          options: {
            pageState: pageStateArray[pageStateArray.length - 1],
            pageSize: pageSize,
          },
        },
        onError: () => {
          setPageStateArray([''])
        },
      })

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      getTransactionsByBlock({
        variables: {
          filter: {
            block_hash: {
              eq: blockHash,
            },
          },
          options: {
            pageState: pageStateArray[pageStateArray.length - 3] || null,
            pageSize: pageSize,
          },
        },
        onError: () => {
          setPageStateArray([''])
        },
      })
      setPageStateArray((prev) => prev.slice(0, -2))
    }
  }

  const handleTransactionPagination = (paginationEvent: PAGINATION_EVENT) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT) {
      const DATA_LENGTH = latestTransactions?.transactions?.values?.length || 0
      const TRANSACTIONS_LIST = latestTransactions?.transactions?.values || []
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: blockHashArray[blockHashArray?.length - 1],
            },
            transaction_index: {
              gt: TRANSACTIONS_LIST?.[DATA_LENGTH - 1]?.transaction_index,
            },
          },
          options: {
            limit: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined)
          setPageStateArray([''])
          setblockHashArray([''])
        },
        onCompleted: (responsePreviousBlocks) => {
          const lengthOfLatestTransactions =
            responsePreviousBlocks?.transactions?.values?.length || pageSize

          if (lengthOfLatestTransactions < pageSize && latestTransactions) {
            getNextBlockTranscation({
              variables: {
                blockGroup: Number(
                  blockGroupData?.dashboard_analytics?.values?.[0]
                    ?.latest_blocks_group
                ),
                blockNumber: Number(
                  responsePreviousBlocks?.transactions?.values?.[
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
                      limit: pageSize - lengthOfLatestTransactions,
                    },
                  },
                  onCompleted: (responseNewBlocks) => {
                    const newArray: GetPaginatedEThTransactionsQuery = {
                      transactions: {
                        pageState: responseNewBlocks?.transactions?.pageState,
                        values: [
                          ...(responsePreviousBlocks?.transactions?.values ||
                            []),
                          ...(responseNewBlocks?.transactions?.values || []),
                        ],
                      },
                    }
                    setpaginatedTransactions(newArray)
                    setblockHashArray((prevState) => [
                      ...prevState,
                      String(
                        responseNewBlocks?.transactions?.values?.[
                          responseNewBlocks?.transactions?.values?.length - 1
                        ]?.block_hash
                      ),
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
    }

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq:
                blockHashArray[blockHashArray?.length - 3] ||
                blockDetails?.blockHash,
            },
            transaction_index: {
              lt: paginatedTransactions?.transactions?.values?.[0]
                ?.transaction_index,
            },
          },
          options: {
            limit: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined)
          setPageStateArray([''])
          setblockHashArray([''])
        },
        onCompleted: (responsePreviousBlocks) => {
          const lengthOfLatestTransactions =
            responsePreviousBlocks?.transactions?.values?.length || pageSize

          if (lengthOfLatestTransactions < pageSize && latestTransactions) {
            getPreviousBlockTranscation({
              variables: {
                blockGroup: Number(
                  blockGroupData?.dashboard_analytics?.values?.[0]
                    ?.latest_blocks_group
                ),
                blockNumber: Number(
                  responsePreviousBlocks?.transactions?.values?.[
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
                      limit: pageSize - lengthOfLatestTransactions,
                    },
                  },
                  onCompleted: (responseNewBlocks) => {
                    const newArray: GetPaginatedEThTransactionsQuery = {
                      transactions: {
                        pageState: responseNewBlocks?.transactions?.pageState,
                        values: [
                          ...(responseNewBlocks?.transactions?.values || []),
                          ...(responsePreviousBlocks?.transactions?.values ||
                            []),
                        ],
                      },
                    }
                    setpaginatedTransactions(newArray)
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
      setblockHashArray((prev) => prev.slice(0, -2))
    }
  }

  useEffect(() => {
    setPageStateArray([''])
    setblockHashArray([''])
  }, [pageSize])

  useEffect(() => {
    if (blockHash) {
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
    }
  }, [blockHash, getTransactionsByBlock, pageSize])

  useEffect(() => {
    if (latestTransactions) {
      setpaginatedTransactions(latestTransactions)
      setblockHashArray((prevState) => [
        ...prevState,
        String(latestTransactions?.transactions?.values?.[0]?.block_hash),
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

  useEffect(() => {
    if (blockDetails?.blockHash && pageSize)
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: blockDetails?.blockHash,
            },
          },
          options: {
            limit: pageSize,
          },
        },
      })
  }, [blockDetails?.blockHash, getTransactions, pageSize])

  if (
    transactionError ||
    transactionErrorByBlock ||
    latestBlockGroupError ||
    latestBlockError
  ) {
    console.error(
      transactionError ||
        transactionErrorByBlock ||
        latestBlockGroupError ||
        latestBlockError
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
        handlePagination={
          blockHash
            ? handleBlockTransactionPagination
            : handleTransactionPagination
        }
        loading={loadingTransactions || loadingTransactionsByBlock}
      />
    </>
  )
}

export default Transactions
