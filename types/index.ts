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

interface SummaryBlocksProps {
  icon: () => React.ReactNode
  title: string
  value: string
  stat?: string
  supportingStat?: string
  secondaryTitle?: string
  secondaryValue?: string
  fontSizeOfValue?: string
  secondayStat?: string
  width: string
}

interface CustomTableProps {
  color: string
  border?: string
  fontWeight?: string
  lineHeight?: string
}

type BlocksDataHome = {
  Block: string
  Age: string
  Txn: string
  reward: string
  Miner: string
}
export type { Route, ChipProps, BlocksDataHome, SummaryBlocksProps, CustomTableProps }
