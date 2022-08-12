import Hero from '@components/shared/Hero'
import TransactionsTable from '@components/Transactions/Table'
import { transactionTitles } from '@constants/stubs'

import {
  TransactionsOutput,
  useGetPaginatedTransactionsLazyQuery,
  useGetTransactionsByBlockLazyQuery,
} from 'lib/graphql/generated'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { TransactionBlockDetail } from 'types'

const Transactions: NextPage = () => {
  const router = useRouter()

  const [pageSize, setPageSize] = useState(10)
  const [next, setNext] = useState<number>()
  const [previous, setPrevious] = useState<number>()
  const [blockDetails, setBlockDetails] = useState<TransactionBlockDetail>()
  const [paginatedTransactions, setpaginatedTransactions] =
    useState<TransactionsOutput[]>()

  const blockNumber = router.query['blockNumber'] as string
  const blockHash = router.query['blockHash'] as string

  const [
    getTransactions,
    {
      data: latestTransactions,
      error: transactionError,
      loading: loadingTransactions,
    },
  ] = useGetPaginatedTransactionsLazyQuery()

  const [
    getTransactionsByBlock,
    {
      data: transactionsByBlock,
      error: transactionErrorByBlock,
      loading: loadingTransactionsByBlock,
    },
  ] = useGetTransactionsByBlockLazyQuery()

  useEffect(() => {
    // TO LOAD THE LATEST TRANSACTIONS 
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
          data: {
            blockHash: blockHash,
            blockNumber: Number(blockNumber),
            pagesInput: {
              pageSize: pageSize,
              next: next,
              previous: previous,
            },
          },
        },
        onError: () => {
          setNext(undefined)
          setPrevious(undefined)
          setBlockDetails(undefined)
        },
      })
    } else {
      getTransactions({
        variables: {
          transactionsdata: {
            blockHash: blockDetails?.blockHash,
            blockNumber: blockDetails?.blockNumber,
            pagesInput: {
              pageSize: pageSize,
              next: next,
              previous: previous,
            },
          },
        },
        onError: () => {
          setNext(undefined)
          setPrevious(undefined)
          setBlockDetails(undefined)
        },
      })
    }
  }, [
    getTransactionsByBlock,
    pageSize,
    next,
    previous,
    getTransactions,
    blockDetails?.blockHash,
    blockDetails?.blockNumber,
    blockNumber,
    blockHash,
  ])

  useEffect(() => {
    if (latestTransactions) {
      setpaginatedTransactions(
        latestTransactions?.transactions as TransactionsOutput[]
      )
    } else {
      setpaginatedTransactions(
        transactionsByBlock?.getTransactionsByBlock as TransactionsOutput[]
      )
    }
  }, [latestTransactions, transactionsByBlock])

  if (transactionError || transactionErrorByBlock) {
    console.error(transactionError + ' ' + transactionErrorByBlock)
  }
  return (
    <>
      <Hero title="Transactions" />
      <TransactionsTable
        titles={transactionTitles}
        transactions={paginatedTransactions}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setNext={setNext}
        setPrevious={setPrevious}
        setBlockDetails={setBlockDetails}
        loading={loadingTransactions || loadingTransactionsByBlock}
      />
    </>
  )
}

export default Transactions
