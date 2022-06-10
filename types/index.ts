import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

type Route = {
  name: string
  link: string
}

interface ChipProps {
  bgColor?: string
  borderColor: string
  titleColor: string
  label: string
  icon?: ReactJSXElement
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
  blockNumber?: string
  showPagination?: boolean
  showDropdown?:boolean
}
interface DropButtonProps {
  title: string
}
interface PagingProps {
  rtl?: boolean
}
interface TransactionDetailRowProps {
  objectKey: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}
export type {
  Route,
  CustomTableProps,
  BlockProps,
  ChipProps,
  HeroProps,
  DropButtonProps,
  PagingProps,
  TransactionDetailRowProps
}
