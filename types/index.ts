import React from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { AxiosResponse } from 'axios'
import { ApolloError } from '@apollo/client'

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

interface InternalTransactionData {
  parentTxnHash: string | null | undefined
  type: string | null | undefined
  from: string | null | undefined
  to: string | null | undefined
  value: string | null | undefined
}

interface InternalTxnsTabData {
  typeTraceAddress: string | null | undefined
  from: string | null | undefined
  to: string | null | undefined
  value: string | null | undefined
  gasLimit: string | null | undefined
}

interface ChipProps {
  bgcolor?: string
  border: string
  titlecolor: string
  label: string | React.ReactNode
  icon?: ReactJSXElement
  cursor?: 'pointer' | 'default'
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
  $istransaction?: boolean
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
  networkUtilization?: number | undefined
  burntFeeSum?: string | undefined | null
  setNextConsecutiveState?: () => void
  setPreviousConsecutiveState?: () => void
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
  Nonce: string | undefined | null
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
  Sha3Uncles: string | null | undefined
  StateRoot: string | null | undefined
}

interface TransactionDetails {
  TransactionHash: string
  Status: number | null | undefined
  Block: string | number
  BlockConfirmation: number | undefined
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
  BaseFee: string | null | undefined
  MaxFee: string | null | undefined
  MaxPriorityFee: string | null | undefined
  TxnBurntFee: string | null | undefined
  TxnSavingFee: string | null | undefined
  input: string | null | undefined
  Nonce: number | null | undefined
  TransactionIndex: number | null | undefined
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
interface GasProgressProps {
  positive: boolean
}

type TabProps = {
  label: string
  id: string
  ariaControls: string
}

type LogsData = {
  address: string
  name: string
  topics: string[]
  data: string
  decodedData: string
  logIndex: number
}

type LogEvent = {
  indexed: boolean
  name: string
  type: string
}

type TokenGenerationPayload = {
  tokenExpiry: number
}

interface AxiosApiResponse extends AxiosResponse {
  error: ApolloError | undefined
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
  GasProgressProps,
  TabProps,
  LogsData,
  LogEvent,
  TokenGenerationPayload,
  InternalTransactionData,
  InternalTxnsTabData,
  AxiosApiResponse,
}
