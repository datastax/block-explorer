import React from 'react'

type Route = {
  name: string
  link: string
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
export type { Route, CustomTableProps, BlockProps, ChipProps }
