import {
  Ether,
  TransactionLogo,
  MarketCap,
  Difficuilty,
} from '@components/shared/Icons'
import { TransactionDataType } from 'types'

const blocksData = {
  title: 'Latest Blocks',
  data: [
    {
      Block: '14849876',
      Age: '23s ago',
      Txn: '112 txns in 18s',
      reward: '2.03538 ETH',
      Miner: 'Hiveon Pool',
    },
    {
      Block: '14849876',
      Age: '23s ago',
      Txn: '112 txns in 18s',
      reward: '2.03538 ETH',
      Miner: 'Hiveon Pool',
    },
    {
      Block: '14849876',
      Age: '23s ago',
      Txn: '112 txns in 18s',
      reward: '2.03538 ETH',
      Miner: 'Hiveon Pool',
    },
    {
      Block: '14849876',
      Age: '23s ago',
      Txn: '112 txns in 18s',
      reward: '2.03538 ETH',
      Miner: 'Hiveon Pool',
    },
    {
      Block: '14849876',
      Age: '23s ago',
      Txn: '112 txns in 18s',
      reward: '2.03538 ETH',
      Miner: 'Hiveon Pool',
    },
    {
      Block: '14849876',
      Age: '23s ago',
      Txn: '112 txns in 18s',
      reward: '2.03538 ETH',
      Miner: 'Hiveon Pool',
    },
  ],
}

const transactionsData = {
  title: 'Latest Transactions',
  data: [
    {
      Block: '0xb03c0b4468...',
      Age: '23s ago',
      Txn: '0x3a675fcd82198fc4cfda...',
      reward: '2.03538 ETH',
      Miner: '0x3a675fcd82198fc4cfda...',
    },
    {
      Block: '0xb03c0b4468...',
      Age: '23s ago',
      Txn: '0x3a675fcd82198fc4cfda...',
      reward: '2.03538 ETH',
      Miner: '0x3a675fcd82198fc4cfda...',
    },
    {
      Block: '0xb03c0b4468...',
      Age: '23s ago',
      Txn: '0x3a675fcd82198fc4cfda...',
      reward: '2.03538 ETH',
      Miner: '0x3a675fcd82198fc4cfda...',
    },
    {
      Block: '0xb03c0b4468...',
      Age: '23s ago',
      Txn: '0x3a675fcd82198fc4cfda...',
      reward: '2.03538 ETH',
      Miner: '0x3a675fcd82198fc4cfda...',
    },
    {
      Block: '0xb03c0b4468...',
      Age: '23s ago',
      Txn: '0x3a675fcd82198fc4cfda...',
      reward: '2.03538 ETH',
      Miner: '0x3a675fcd82198fc4cfda...',
    },
    {
      Block: '0xb03c0b4468...',
      Age: '23s ago',
      Txn: '0x3a675fcd82198fc4cfda...',
      reward: '2.03538 ETH',
      Miner: '0x3a675fcd82198fc4cfda...',
    },
  ],
}

const graphData = [
  {
    label: 'May 1',
    value: 1100,
  },
  {
    label: 'May 8',
    value: 1400,
  },
  {
    label: 'May 15',
    value: 1500,
  },
]

const summaryBlocksDataPrice = [
  {
    icon: () => <Ether />,
    title: 'Ether Price',
    value: '$1,883.89',
    stat: '@0.06795 BTC',
    supportingStat: '-3.50%',
    fontSizeOfValue: '28px',
    width: '320px',
  },
  {
    icon: () => <MarketCap />,
    title: 'Market Cap',
    value: '$224,483,537,186.00',
    fontSizeOfValue: '24px',
    width: '320px',
  },
]

const summaryBlocksDataTransactions = [
  {
    icon: () => <TransactionLogo />,
    title: 'Transactions',
    value: '1,586.58 M',
    stat: '13.5 TPS',
    secondaryTitle: 'Median Gas Price',
    secondaryValue: '47 Gwei',
    fontSizeOfValue: '24px',
    secondaryStat: '$1.84',
    width: '434px',
  },
  {
    icon: () => <Difficuilty />,
    title: 'Difficuilty',
    value: '14,254.26 TH',
    secondaryTitle: 'Hash Rate',
    secondaryValue: '1,052,318.84 GH/s',
    fontSizeOfValue: '20px',
    width: '434px',
  },
]

const transactionData: TransactionDataType[] = [
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash: '0x3cbe9aa0fce8457a5fe...',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
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
  'transaction_count',
  'miner',
  'TxnHash',
  'TO',
  'From',
]

const colorColumnHeaderNames = ['Age', 'Txn Fee']

export {
  transactionData,
  transactionTitles,
  colorColumnNames,
  colorColumnHeaderNames,
  blocksData,
  graphData,
  summaryBlocksDataTransactions,
  summaryBlocksDataPrice,
  transactionsData,
}
