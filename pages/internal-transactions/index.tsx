import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import InternalTransactionTable from '@components/InternalTransactions'
import { InternalTransactionTitle } from 'constants/stubs'
import { InternalTransactionData } from 'types'
import { useGetInternalTransactionByEthBlockNumberQuery } from 'lib/graphql/generated/generate'
import { mapRawDataToIntTransactions } from 'utils'

const InternalTransaction: NextPage = () => {
  const router = useRouter()
  const blockNumber = router.query['blockNumber'] as string
  const totalInternalTrnsactions = router.query[
    'totalInternalTransactions'
  ] as string
  const [pageSize, setPageSize] = useState(10)
  const [pageNumber, setPageNumber] = useState(1)
  const [internalTransactionsData, setInternalTransactionsData] = useState<
    InternalTransactionData[]
  >([])

  const {
    data: internalTransactions,
    error: internalTransactionsError,
    loading: loadingTransctions,
  } = useGetInternalTransactionByEthBlockNumberQuery({
    variables: {
      filter: {
        block_number: { eq: blockNumber as string },
      },
      options: {
        pageState: null,
        pageSize: pageSize,
      },
    },
    onError: () => {
      setPageNumber(1)
    },
  })

  if (internalTransactionsError) {
    console.error(internalTransactionsError)
  }

  useEffect(() => {
    if (internalTransactions)
      setInternalTransactionsData(
        mapRawDataToIntTransactions(internalTransactions)
      )
  }, [internalTransactions])

  return (
    <>
      <Hero title="Internal transactions" />
      <InternalTransactionTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        Data={internalTransactionsData}
        titles={InternalTransactionTitle}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        loading={loadingTransctions}
        blockNumber={Number(blockNumber)}
        totalInternalTransactions={Number(totalInternalTrnsactions || '100')}
      />
    </>
  )
}

export default InternalTransaction
