import {
  Ether,
  TransactionLogo,
  MarketCap,
  Difficuilty,
} from '@components/shared/Icons'

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

export {
  blocksData,
  transactionsData,
  graphData,
  summaryBlocksDataTransactions,
  summaryBlocksDataPrice,
}
