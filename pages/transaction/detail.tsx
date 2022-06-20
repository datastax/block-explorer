import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import TransactionDetail from '@components/TransactionDetail'
const Transaction: NextPage = () => {
  return (
    <>
      <Hero
        title="Transaction Details"
        showChips={false}
        showPagination={true}
        showDropdown={true}
      />
      <TransactionDetail />
    </>
  )
}

export default Transaction
