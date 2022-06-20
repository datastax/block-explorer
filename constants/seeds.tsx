import {
  Ether,
  TransactionLogo,
  MarketCap,
  Difficuilty,
} from '@components/shared/Icons'
import { TransactionData } from 'types'

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

const transactionData: TransactionData[] = [
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
    Method: 'Transfer',
    Block: '14850220',
    Age: '1m ago',
    From: '0xc6a0991fa973409e3a...',
    TO: '0xc6a0991fa973409e3a...',
    Value: '0.0006 Ether',
    TxnFee: '0.00094236',
  },
  {
    TxnHash:
      '0x83e6d3b67c97495c6546acb4e41b5d37c622130f31a5f3accdc5b692f819d72e',
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
  graphData,
  summaryBlocksDataTransactions,
  summaryBlocksDataPrice,
}
