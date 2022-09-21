import {
  Ether,
  TransactionLogo,
  MarketCap,
  Difficuilty,
} from '@components/shared/Icons'

import {
  SummaryBlocksDataPrice,
  SummaryBlocksDataTransactions,
  TabProps,
} from 'types'

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

const tabsList: TabProps[] = [
  {
    label: 'Transaction Overview',
    ariaControls: 'simple-tabpanel-0',
    id: 'simple-tab-0',
  },
  {
    label: `Logs (${0})`,
    ariaControls: 'simple-tabpanel-1',
    id: 'simple-tab-2',
  },
]

const mockLogsData = [
  {
    address: '826478623765234675273652367481231',
    name: '84783274871326874612378467823647823678dhgdsch asb cgsadvcgwh',
    topics: [
      '364238574285246598165792372819q',
      '432675467125847123784782364721634712',
      '736278547328687162395',
    ],
    data: '73486478231487612384612378648712364r781235854231',
    decodedData: JSON.stringify({
      hello: 'jhqwid7812748173',
      hello2: '838468127357624',
      hello3: 'ye7wtr2tbr23748x652',
    }),
    logIndex: 12,
  },
  {
    address: '826478623765234675273652367481231',
    name: '84783274871326874612378467823647823678dhgdsch asb cgsadvcgwh',
    topics: [
      '364238574285246598165792372819q',
      '432675467125847123784782364721634712',
      '736278547328687162395',
    ],
    data: '73486478231487612384612378648712364r781235854231',
    decodedData: JSON.stringify({
      hello: 'jhqwid7812748173',
      hello2: '838468127357624',
      hello3: 'ye7wtr2tbr23748x652',
    }),
    logIndex: 12,
  },
  {
    address: '826478623765234675273652367481231',
    name: '84783274871326874612378467823647823678dhgdsch asb cgsadvcgwh',
    topics: [
      '364238574285246598165792372819q',
      '432675467125847123784782364721634712',
      '736278547328687162395',
    ],
    data: '73486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r78123585423173486478231487612384612378648712364r781235854231',
    decodedData: JSON.stringify({
      hello: 'jhqwid7812748173',
      hello2: '838468127357624',
      hello3: 'ye7wtr2tbr23748x652',
    }),
    logIndex: 12,
  },
]

export {
  transactionTitles,
  colorColumnNames,
  colorColumnHeaderNames,
  summaryBlocksDataTransactions,
  summaryBlocksDataPrice,
  BlocksTitle,
  mediumBlogUrl,
  searchPlaceHolders,
  tabsList,
  mockLogsData,
}
