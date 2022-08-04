import { Question } from '@components/shared/Icons'
import { Collapse, ListItemText, ListItemButton } from '@mui/material'
import React from 'react'
import { TransactionDetails } from 'types'
import { getGasFeesPercentage, numberWithCommas } from 'utils'
import {
  DetailsTableContainer,
  CustomTableContainer,
  CustomList,
  CustomListItem,
  CustomListIcon,
  CustomListItemText,
  CustomLink,
  LoggedIn,
  InputBox,
} from './styles'
import TransactionDetailRow from './TransactionDetailRow'

interface TransactionDetailProps {
  TransactionData: TransactionDetails
}

const TransactionDetail = ({ TransactionData }: TransactionDetailProps) => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <DetailsTableContainer>
        <CustomTableContainer>
          <CustomList>
            {Object.keys(TransactionData).map((key) => (
              <TransactionDetailRow
                key={key}
                objectKey={key}
                data={TransactionData}
              />
            ))}
          </CustomList>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="Gas Limit & Usage by Txn:" />
              <ListItemText>{`${numberWithCommas(
                TransactionData.Gas_limit
              )}   |   ${numberWithCommas(
                TransactionData.Usage_Txn
              )}  (${getGasFeesPercentage(
                TransactionData.Usage_Txn,
                TransactionData.Gas_limit
              )}%) `}</ListItemText>
            </CustomListItem>
            {TransactionData.MaxPriorityFee && TransactionData.MaxFee && (
              <CustomListItem>
                <CustomListIcon>
                  <Question />
                </CustomListIcon>
                <CustomListItemText primary="Gas Fees:" />
                <ListItemText>
                  Base: {TransactionData.BaseFee} Gwei | Max:{' '}
                  {TransactionData.MaxFee} Gwei | Max Priority:{' '}
                  {TransactionData.MaxPriorityFee} Gwei
                </ListItemText>
              </CustomListItem>
            )}
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="Burnt & Txn Savings Fees:" />
              <ListItemText>
                🔥 Burnt: {TransactionData?.TxnBurntFee} Ether | 💸 Txn Savings:{' '}
                {TransactionData?.TxnSavingFee} Ether
              </ListItemText>
            </CustomListItem>
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="Input:" />
              <ListItemText>
                <InputBox>{TransactionData?.input}</InputBox>
              </ListItemText>
            </CustomListItem>
          </Collapse>
          <ListItemButton onClick={handleClick}>
            {!open ? (
              <CustomLink>Click to see more</CustomLink>
            ) : (
              <CustomLink>Click to see less</CustomLink>
            )}
          </ListItemButton>
          <CustomListItem>
            <CustomListIcon>
              <Question />
            </CustomListIcon>
            <CustomListItemText primary="Private Note" />
            <ListItemText>
              To access the Private Note feature, you must be{' '}
              <LoggedIn> Logged In </LoggedIn>
            </ListItemText>
          </CustomListItem>
        </CustomTableContainer>
      </DetailsTableContainer>
    </>
  )
}

export default TransactionDetail
