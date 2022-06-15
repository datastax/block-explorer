import { Question } from '@components/shared/Icons'
import { Collapse, ListItemText, ListItemButton } from '@mui/material'
import React from 'react'
import { TransactionDetails } from 'types'
import {
  DetailsTableContainer,
  CustomTableContainer,
  CustomList,
  CustomListItem,
  CustomListIcon,
  CustomListItemText,
  CustomLink,
  LoggedIn,
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
              <CustomListItemText primary="Private Note" />
              <ListItemText>
                To access the Private Note feature, you must be{' '}
                <LoggedIn> Logged In </LoggedIn>
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
