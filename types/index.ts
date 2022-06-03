type Route = {
  name: string
  link: string
}

interface ChipProps {
  bgColor: string
  borderColor: string
  titleColor: string
  label: string
}

interface BlockProps {
  Block: string
  Age: string
  Txn: string
  Uncles: string
  Miner: string
  GasUsed: string
  GasLimit: string
  BaseFee: string
  Reward: string
  BurntFees: string
}

interface CustomTableProps {
  color: string
  border?: string
  fontWeight?: string
  lineHeight?: string
}

interface HeroProps {
  title: string
  showChips?: boolean
  blockNumber: string
}

export type { Route, CustomTableProps, BlockProps, ChipProps, HeroProps }
