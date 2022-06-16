import Hero from '@components/shared/Hero'
import TransactionsTable from '@components/Transactions/Table'
import { transactionTitles, transactionData } from '@constants/seeds'
import { NextPage } from 'next'
import { useState } from 'react'
const Transactions: NextPage = () => {
  const [pageSize, setPageSize] = useState(10)
  const [next, setNext] = useState<number>()
  const [previous, setPrevious] = useState<number>()
  console.log(next, previous)
  return (
    <>
      <Hero title="Transactions" />
      <TransactionsTable
        titles={transactionTitles}
        Data={transactionData}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setNext={setNext}
        setPrevious={setPrevious}
      />
    </>
  )
}

export default Transactions
