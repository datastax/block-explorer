import React from 'react'

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
  bgColor: string
  border: string
  titleColor: string
  label: string | React.ReactNode
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

type BlocksDataHome = {
  Block: string
  Age: string
  Txn: string
  reward: string
  Miner: string
}
export type {
  Route,
  ChipProps,
  BlockProps,
  BlocksDataHome,
  SummaryBlocksProps,
  CustomTableProps,
}
