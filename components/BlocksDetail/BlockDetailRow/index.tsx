import Chip from '@components/shared/Chip'
import { Question, Watch } from '@components/shared/Icons'
import { ListItemText } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import React from 'react'
import {
  CustomListItem,
  CustomListIcon,
  CustomListItemText,
  CustomDivider,
  TimeColor,
  TransactionStyle,
  AddressColor,
  BorderLinearProgress,
  GasLimitStyle,
  ProgressDetail,
} from '../styles'

interface BlockDetailRowProps {
  objectKey: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}
const BlockDetailRow = ({ objectKey, data }: BlockDetailRowProps) => {
  const getKeyName = () => {
    switch (objectKey) {
      case 'BlockHeight':
        return 'Block Height:'
      case 'Timestamp':
        return 'Timestamp:'
      case 'Transactions':
        return 'Transactions:'
      case 'MinedBy':
        return 'Mined By:'
      case 'BlockReward':
        return 'Block Reward:'
      case 'UnclesReward':
        return 'Uncles Reward:'
      case 'Difficulty':
        return 'Difficulty:'
      case 'TotalDifficulty':
        return 'Total Difficulty:'
      case 'Size':
        return 'Size:'
      case 'GasUsed':
        return 'Gas Used:'
      case 'GasLimit':
        return 'Gas Limit:'
      case 'BaseFeePerGas':
        return 'Base Fee Per Gas:'
      case 'BurntFees':
        return 'Burnt Fees:'
      case 'ExtraData':
        return 'Extra Data:'
    }
  }

  const getValueUI = () => {
    switch (objectKey) {
      case 'BlockHeight':
      case 'BlockReward':
      case 'UnclesReward':
      case 'Difficulty':
      case 'TotalDifficulty':
      case 'Size':
      case 'GasLimit':
      case 'BurntFees':
      case 'BaseFeePerGas':
      case 'ExtraData':
        return <ListItemText primary={data[objectKey]} />
      case 'Timestamp':
        return (
          <>
            <CustomListIcon>
              <Watch />
            </CustomListIcon>
            <ListItemText>
              {data[objectKey].time}
              <TimeColor>{data[objectKey].Date}</TimeColor>
            </ListItemText>
          </>
        )
      case 'Transactions':
        return (
          <>
            {' '}
            <Chip
              label={`${data[objectKey]} transactions`}
              bgcolor={colors.nordic}
              border={`1px solid ${colors.actionPrimary}`}
              titlecolor={colors.neutral100}
            />
            <TransactionStyle>
              {' '}
              <span>and</span>{' '}
            </TransactionStyle>
            <Chip
              label="33 contract internal transactions"
              bgcolor={colors.nordic}
              border={`1px solid ${colors.actionPrimary}`}
              titlecolor={colors.neutral100}
            />
            <TransactionStyle>
              <ListItemText primary={'in this block'} />
            </TransactionStyle>
          </>
        )
      case 'MinedBy':
        return (
          <ListItemText>
            <AddressColor> {data[objectKey].address} </AddressColor>
            {data[objectKey].miner}
            <TimeColor>{data[objectKey].time}</TimeColor>
          </ListItemText>
        )
      case 'GasUsed':
        return (
          <ListItemText>
            <GasLimitStyle>
              {data[objectKey]}
              <BorderLinearProgress variant="determinate" value={30} />
              <ProgressDetail>-71% Gas Target </ProgressDetail>
            </GasLimitStyle>
          </ListItemText>
        )
    }
  }
  return (
    <>
      <CustomListItem>
        <CustomListIcon>
          <Question />
        </CustomListIcon>
        <CustomListItemText primary={getKeyName()} />
        {getValueUI()}
      </CustomListItem>
      <CustomDivider />
    </>
  )
}

export default BlockDetailRow
