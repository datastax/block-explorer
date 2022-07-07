import Hero from '@components/shared/Hero'
import TransactionsTable from '@components/Transactions/Table'
import { transactionTitles } from '@constants/seeds'
import { useGetPaginatedTransactionsQuery } from 'lib/graphql/generated'
import { NextPage } from 'next'
import { useState } from 'react'
import { TransactionBlockDetail } from 'types'


const Transactions: NextPage = () => {
  const [pageSize, setPageSize] = useState(10)
  const [next, setNext] = useState<number>()
  const [previous, setPrevious] = useState<number>()
  const [blockDetails, setBlockDetails] = useState<TransactionBlockDetail>()
  const {
    data: latestTransactions,
    error: transactionError,
    loading: loadingTransactions,
  } = useGetPaginatedTransactionsQuery({
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

  if (transactionError) {
    console.error(transactionError)
  }
  return (
    <>
      <Hero title="Transactions" />
      <TransactionsTable
        titles={transactionTitles}
        Data={latestTransactions}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setNext={setNext}
        setPrevious={setPrevious}
        setBlockDetails={setBlockDetails}
        loading={loadingTransactions}
      />
    </>
  )
}

export default Transactions
