import {
  Ether,
  TransactionLogo,
  MarketCap,
  Difficuilty,
} from '@components/shared/Icons'

import { SummaryBlocksDataPrice, SummaryBlocksDataTransactions } from 'types'

const summaryBlocksDataPrice: SummaryBlocksDataPrice[] = [
  {
    icon: () => <Ether />,
    title: 'Ether Price',
    value: '$1,883.89',
    stat: '@0.06795 BTC',
    supportingStat: '-3.50%',
    fontSizeOfValue: '28px',
  },
  {
    icon: () => <MarketCap />,
    title: 'Market Cap',
    value: '$224,483,537,186.00',
    fontSizeOfValue: '24px',
  },
]

const summaryBlocksDataTransactions: SummaryBlocksDataTransactions[] = [
  {
    icon: () => <TransactionLogo />,
    title: 'Transactions',
    value: '1,586.58 M',
    stat: '13.5 TPS',
    secondaryTitle: 'Median Gas Price',
    secondaryValue: '47 Gwei',
    fontSizeOfValue: '24px',
    secondaryStat: '$1.84',
  },
  {
    icon: () => <Difficuilty />,
    title: 'Difficuilty',
    value: '14,254.26 TH',
    secondaryTitle: 'Hash Rate',
    secondaryValue: '1,052,318.84 GH/s',
    fontSizeOfValue: '20px',
  },
]

const BlocksTitle = [
  'Block',
  'Age',
  'Txn',
  'Uncles',
  'Miner',
  'Gas Used',
  'Gas Limit',
  'Base Fee',
  'Reward',
  'Burnt Fees (ETH)',
]

const transactionTitles = [
  'Txn Hash',
  'Method',
  'Block',
  'Age',
  'From',
  '',
  'To',
  'Value',
  'Txn Fee',
]

const colorColumnNames = [
  'number',
  'hash',
  'block_number',
  'transaction_count',
  'miner',
  'TxnHash',
  'from_address',
  'to_address',
]

const searchPlaceHolders = [
  'Search by Txn Hash or Block Number',
  'Search by Transaction Hash',
  'Search by Block Number',
  'Search by Contract Hash',
  'Search by Token Address',
  'Search by ENS Domain',
]

const mediumBlogUrl =
  'https://medium.com/building-the-open-data-stack/tracking-nft-transfers-using-astra-db-and-web3-js-9232402c4417'
const colorColumnHeaderNames = ['Age', 'Txn Fee']

export {
  transactionTitles,
  colorColumnNames,
  colorColumnHeaderNames,
  summaryBlocksDataTransactions,
  summaryBlocksDataPrice,
  BlocksTitle,
  mediumBlogUrl,
  searchPlaceHolders,
}
