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
  Wrapper,
  SideBox,
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
          <Wrapper>
            <ListItemText primary={data[objectKey]} />
          </Wrapper>
        ) : null
      case 'Timestamp':
        return (
          <Wrapper>
            <CustomListIcon>
              <Watch />
            </CustomListIcon>
            <ListItemText>
              {data[objectKey].time}
              <TimeColor>{data[objectKey].Date}</TimeColor>
            </ListItemText>
          </Wrapper>
        )
      case 'Transactions':
        return (
          <Wrapper>
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
                    `/transactions?blockNumber=${data['BlockHeight']}`
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
            <Tooltip
              title="View Internal Transactions of this block"
              placement="top"
            >
              <div
                onClick={() => {
                  router.push(
                    {
                      pathname: '/internal-transactions',
                      query: {
                        blockNumber: data['BlockHeight'],
                        totalInternalTransactions: data['internalTransaction'],
                      },
                    },
                    `/internal-transactions?blockNumber=${data['BlockHeight']}`
                  )
                }}
              >
                <Chip
                  label={`${data['internalTransaction']} contract internal transactions`}
                  bgcolor={colors.nordic}
                  border={`1px solid ${colors.actionPrimary}`}
                  titlecolor={colors.neutral100}
                  cursor="pointer"
                />
              </div>
            </Tooltip>
            <TransactionStyle>
              <ListItemText primary={'in this block'} />
            </TransactionStyle>
          </Wrapper>
        )
      case 'MinedBy':
        return (
          <Wrapper>
            <AddressColor> {data[objectKey].address} </AddressColor>
            &nbsp;
            {data[objectKey].miner}
            <TimeColor>{data[objectKey].time}</TimeColor>
          </Wrapper>
        )
      case 'GasUsed':
        return (
          <Wrapper>
            <GasLimitStyle>
              {`${data[objectKey]} (${data['GasUsedPercetge'].toFixed(2)}%)`}
              <BorderLinearProgress
                variant="determinate"
                value={data['GasUsedPercetge']}
                positive={data['GasTargetPercentage'] > 0}
              />
              <ProgressDetail positive={data['GasTargetPercentage'] > 0}>
                {`${Math.round(data['GasTargetPercentage'])}% Gas Target`}
              </ProgressDetail>
            </GasLimitStyle>
          </Wrapper>
        )
    }
  }
  return (
    <>
      {getValueUI() && (
        <>
          <CustomListItem>
            <SideBox>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary={getKeyName()} />
            </SideBox>
            {getValueUI()}
          </CustomListItem>
          <CustomDivider />
        </>
      )}
    </>
  )
}

export default BlockDetailRow
