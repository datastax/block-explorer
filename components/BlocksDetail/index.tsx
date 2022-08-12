import {
  DetailsTableContainer,
  CustomTableContainer,
  CustomListItem,
  CustomDivider,
  CustomListItemText,
  CustomListIcon,
  CustomLink,
  CustomList,
} from '@components/BlocksDetail/styles'
import colors from '@styles/ThemeProvider/colors'
import { ListItemText, Collapse, ListItemButton } from '@mui/material'
import React from 'react'
import { Question } from '@components/shared/Icons/index'
import BlockDetailRow from './BlockDetailRow'
import { BlockDetails } from '@types'
import router from 'next/router'

interface BlocksDetailProps {
  BlocksDetailsData: BlockDetails
}

const BlocksDetail = ({ BlocksDetailsData }: BlocksDetailProps) => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <DetailsTableContainer>
        <CustomTableContainer>
          <CustomList>
            {Object.keys(BlocksDetailsData).map((key) => (
              <BlockDetailRow
                key={key}
                objectKey={key}
                data={BlocksDetailsData}
              />
            ))}
          </CustomList>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="Hash:" />
              <ListItemText primary={BlocksDetailsData?.Hash} />
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="Parent Hash:" />
              <ListItemText
                primary={BlocksDetailsData?.ParentHash}
                sx={{ color: colors.actionSecondary, cursor: 'pointer' }}
                onClick={() => {
                  router.push(`/block/${BlocksDetailsData?.ParentHash}`)
                }}
              />
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="Nonce:" />
              <ListItemText primary={BlocksDetailsData?.Nonce} />
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="ExtraData:" />
              <ListItemText primary={BlocksDetailsData?.ExtraData} />
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="StateRoot:" />
              <ListItemText primary={BlocksDetailsData?.StateRoot} />
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="Sha3Uncles:" />
              <ListItemText primary={BlocksDetailsData?.Sha3Uncles} />
            </CustomListItem>
            <CustomDivider />
          </Collapse>
          <ListItemButton onClick={handleClick}>
            {!open ? (
              <CustomLink>Click to see more</CustomLink>
            ) : (
              <CustomLink>Click to see less</CustomLink>
            )}
          </ListItemButton>
        </CustomTableContainer>
      </DetailsTableContainer>
    </>
  )
}

export default BlocksDetail
