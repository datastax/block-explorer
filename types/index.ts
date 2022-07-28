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
  istransaction?: boolean
}

type BlocksDataHome = {
  Block: string
  Age: string
  Txn: string
  reward: string
  Miner: string
}

interface TransactionData {
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
  showDropdown?: boolean
}
interface DropButtonProps {
  title: string
}
interface PagingProps {
  rtl?: boolean
}
interface TransactionDetailRowProps {
  objectKey: string
  data: TransactionDetails
}

interface BlockDetails {
  BlockHeight: string
  Timestamp: {
    time: string
    Date: string
  }
  Transactions: string
  MinedBy: {
    address: string
    miner: string
    time: string
  }
  Hash: string
  ParentHash: string
  BlockReward: string
  Nonce: number | undefined | null
  UnclesReward: string
  Difficulty: string
  TotalDifficulty: string
  Size: string
  GasUsed: string
  GasUsedPercetge: number
  GasTargetPercentage: number
  GasLimit: string
  BaseFeePerGas: string | null
  BurntFees: string | null
  ExtraData: string
  internalTransaction: number
}

interface TransactionDetails {
  TransactionHash: string
  Status: number | null | undefined
  Block: string | number
  Timestamp: {
    time: string
    Date: string
  }
  TransactionAction: {
    approved: string
    kuno: string
    trade: string
    router: string
    checkIn: string
    token: string
  }
  Gas_limit: number
  Usage_Txn: number | null | undefined
  From: string
  To: string
  Value: string
  Value_usd: string
  TransactionFee: string
  GasPrice: string
}
type SummaryBlocksDataPrice = {
  icon: () => JSX.Element
  title: string
  value: string
  stat?: string
  supportingStat?: string
  fontSizeOfValue: string
}

type SummaryBlocksDataTransactions = {
  icon: () => JSX.Element
  title: string
  value: string
  stat?: string
  secondaryTitle: string
  secondaryValue: string
  fontSizeOfValue: string
  secondaryStat?: string
}

type GraphData = {
  label: string
  value: number
}

type TransactionBlockDetail = {
  blockHash: string
  blockNumber: number
}

interface CopyClipboardProps {
  data: string
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
  TransactionData,
  BlocksDataHome,
  SummaryBlocksProps,
  BlockDetails,
  TransactionDetails,
  SummaryBlocksDataPrice,
  SummaryBlocksDataTransactions,
  GraphData,
  TransactionBlockDetail,
  CopyClipboardProps,
}
