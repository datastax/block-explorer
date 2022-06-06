import Hero from '@components/Blocks/Hero'
import BlocksTable from '@components/Blocks/Table'
import { transactionTitles, transactionData } from '@constants/seeds'
const transactions = () => {
  return (
    <>
      <Hero title="Transactions" />
      <BlocksTable
        titles={transactionTitles}
        TransactionDataToMap={transactionData}

      />
    </>
  )
}

export default transactions
