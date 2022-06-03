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
  display?:string
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

export type {
  Route,
  CustomTableProps,
  BlockProps,
  ChipProps,
  TransactionDataType,
}
