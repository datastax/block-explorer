import Chip from '@components/shared/Chip'
import { Question, Watch } from '@components/shared/Icons'
import { ListItemText, Tooltip } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import router from 'next/router'
import React from 'react'
import { BlockDetails } from 'types'
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
  data: BlockDetails
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
    }
  }

  const getValueUI = () => {
    switch (objectKey) {
      case 'BurntFees':
      case 'BaseFeePerGas':
      case 'BlockHeight':
      case 'BlockReward':
      case 'UnclesReward':
      case 'Difficulty':
      case 'TotalDifficulty':
      case 'Size':
      case 'GasLimit':
        return data[objectKey] != null ? (
          <ListItemText primary={data[objectKey]} />
        ) : null
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
            <Tooltip
              title="View All Transactions of this block"
              placement="top"
            >
              <div
                onClick={() => {
                  router.push(
                    {
                      pathname: '/transactions',
                      query: {
                        blockNumber: data['BlockHeight'],
                        blockHash: data['Hash'],
                      },
                    },
                    `transactions?blockNumber=${data['BlockHeight']}`
                  )
                }}
              >
                <Chip
                  label={`${data[objectKey]} transactions`}
                  bgcolor={colors.nordic}
                  border={`1px solid ${colors.actionPrimary}`}
                  titlecolor={colors.neutral100}
                  cursor="pointer"
                />
              </div>
            </Tooltip>
            <TransactionStyle>
              {' '}
              <span>and</span>{' '}
            </TransactionStyle>
            <Chip
              label={`${data['internalTransaction']} contract internal transactions`}
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
              {`${data[objectKey]} (${data['GasUsedPercetge'].toFixed(2)}%)`}
              <BorderLinearProgress
                variant="determinate"
                value={data['GasUsedPercetge']}
              />
              <ProgressDetail>
                {`${data['GasTargetPercentage'].toFixed(2)}% Gas Target`}
              </ProgressDetail>
            </GasLimitStyle>
          </ListItemText>
        )
    }
  }
  return (
    <>
      {getValueUI() && (
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
      )}
    </>
  )
}

export default BlockDetailRow
