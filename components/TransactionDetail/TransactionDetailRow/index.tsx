import Chip from '@components/shared/Chip'
import {
  Diamond,
  Paper,
  Question,
  Tick,
  User,
  Watch,
  StopWatch,
  Bulb,
  TickInButton,
} from '@components/shared/Icons'
import { ListItemText } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import router from 'next/router'
import React from 'react'
import { TransactionDetailRowProps } from 'types'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import {
  CustomListItem,
  CustomListIcon,
  CustomListItemText,
  CustomDivider,
  TextStyle,
  Wrapper,
  RightSpacing,
  RightLogoSpacing,
  TransactionMainBox,
  TransactionInnerBox,
} from '../styles'
import CopyClipboard from '../../shared/CopyClipboard/CopyClipboard'
import { BlockEffect } from './styles'

const TransactionDetailRow = ({
  objectKey,
  data,
}: TransactionDetailRowProps) => {
  const getKeyName = () => {
    switch (objectKey) {
      case 'TransactionHash':
        return 'Transaction Hash:'
      case 'Status':
        return 'Status:'
      case 'Block':
        return 'Block:'
      case 'Timestamp':
        return 'Timestamp:'
      case 'TransactionAction':
        return 'Transaction Action:'
      case 'From':
        return 'From:'
      case 'To':
        return 'To:'
      case 'Value':
        return 'Value:'
      case 'TransactionFee':
        return 'Transaction Fee:'
      case 'GasPrice':
        return 'Gas Price:'
    }
  }

  const getValueUI = () => {
    switch (objectKey) {
      case 'TransactionFee':
      case 'GasPrice':
        return <ListItemText primary={data[objectKey]} />
      case 'TransactionHash':
        return (
          <Wrapper>
            <RightSpacing>
              <ListItemText>{data[objectKey]}</ListItemText>
            </RightSpacing>
            <CopyClipboard data={data[objectKey]} />
          </Wrapper>
        )
      case 'Timestamp':
        return (
          <Wrapper>
            <CustomListIcon>
              <Watch />
            </CustomListIcon>
            <RightSpacing>
              <ListItemText>{data[objectKey].time}</ListItemText>
            </RightSpacing>
            <CustomListIcon>
              <StopWatch />
            </CustomListIcon>
            <ListItemText>{data[objectKey].Date}</ListItemText>
          </Wrapper>
        )
      case 'Status':
        return (
          <>
            {data[objectKey] ? (
              <Chip
                label="Success"
                border={`1px solid ${colors.actionPrimary}`}
                titlecolor={colors.actionPrimary}
                icon={<TickInButton />}
              />
            ) : (
              <Chip
                label="Failure"
                border={`1px solid ${colors.semanticRed}`}
                titlecolor={colors.semanticRed}
                icon={
                  <CancelRoundedIcon
                    style={{
                      color: colors.semanticRed,
                      width: '25px',
                      paddingRight: '5px',
                    }}
                  />
                }
              />
            )}
          </>
        )
      case 'Block':
        return (
          <Wrapper>
            <RightSpacing>
              <ListItemText
                onClick={() => {
                  router.push(`/block/${data[objectKey]}`)
                }}
              >
                <BlockEffect>{data[objectKey]}</BlockEffect>
              </ListItemText>
            </RightSpacing>
            <Chip
              label={`${data['BlockConfirmation']} Block Confirmations`}
              bgcolor={colors.neutral700}
              border={`1px solid ${colors.neutral300}`}
              titlecolor={colors.neutral100}
            />
          </Wrapper>
        )
      case 'From':
        return (
          <Wrapper>
            <RightSpacing>
              <ListItemText>
                <TextStyle>{data[objectKey]}</TextStyle>
              </ListItemText>
            </RightSpacing>
            <CopyClipboard data={data[objectKey]} />
          </Wrapper>
        )
      case 'To':
        return (
          <Wrapper>
            <RightSpacing>
              <ListItemText primary="Contract" />
            </RightSpacing>
            <RightSpacing>
              <ListItemText>
                <TextStyle>{data[objectKey]}</TextStyle>
              </ListItemText>
            </RightSpacing>

            <CustomListIcon>
              <Tick />
            </CustomListIcon>
            <CopyClipboard data={data[objectKey]} />
          </Wrapper>
        )
      case 'Value':
        return (
          <Wrapper>
            <RightSpacing>
              <Chip
                label={data[objectKey]}
                bgcolor={colors.neutral700}
                border={`1px solid ${colors.neutral300}`}
                titlecolor={colors.neutral100}
              />
            </RightSpacing>
            <ListItemText>{data['Value_usd']}</ListItemText>
          </Wrapper>
        )
      case 'TransactionAction':
        return (
          <>
            <TransactionMainBox>
              <TransactionInnerBox>
                <RightSpacing>
                  <ListItemText primary={data[objectKey].approved} />
                </RightSpacing>
                <RightLogoSpacing>
                  <Diamond />
                </RightLogoSpacing>
                <ListItemText sx={{ color: colors.actionSecondary }}>
                  {data[objectKey].kuno}
                </ListItemText>
                <RightSpacing>
                  <ListItemText primary={data[objectKey].trade} />
                </RightSpacing>
                <RightLogoSpacing>
                  {' '}
                  <Paper />{' '}
                </RightLogoSpacing>
                <RightSpacing>
                  <ListItemText sx={{ color: colors.actionSecondary }}>
                    {data[objectKey].router}
                  </ListItemText>
                </RightSpacing>
              </TransactionInnerBox>
              <TransactionInnerBox>
                <RightSpacing>
                  <ListItemText primary={data[objectKey].checkIn} />
                </RightSpacing>
                <RightLogoSpacing>
                  <User />{' '}
                </RightLogoSpacing>
                <ListItemText sx={{ color: colors.actionSecondary }}>
                  {data[objectKey].token}
                </ListItemText>
              </TransactionInnerBox>
            </TransactionMainBox>
          </>
        )
    }
  }
  return (
    <>
      {getValueUI() && (
        <>
          <CustomListItem>
            <CustomListIcon>
              {objectKey === 'TransactionAction' ? <Bulb /> : <Question />}
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

export default TransactionDetailRow
