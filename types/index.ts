import React from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

type Route = {
  name: string
  link: string
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
}

interface ChipProps {
  bgcolor?: string
  border: string
  titlecolor: string
  label: string | React.ReactNode
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
  lineheight?: string
  display?: string
  isTransaction?: boolean
}

type BlocksDataHome = {
  Block: string
  Age: string
  Txn: string
  reward: string
  Miner: string
}

interface TransactionDataType {
  TxnHash: string
  Method: string
  Block: string
  Age: string
  From: string
  TO: string
  Value: string
  TxnFee: string
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
  TransactionDetailRowProps,
  TransactionDataType,
  BlocksDataHome,
  SummaryBlocksProps,
}
