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
import { ListItemText, Collapse, ListItemButton } from '@mui/material'
import React from 'react'
import { Question } from '@components/shared/Icons/index'
import BlockDetailRow from './BlockDetailRow'
import { BlockDetails } from '@types'

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
              <CustomListItemText primary="ExtraData:" />
              <ListItemText primary={BlocksDetailsData.ExtraData} />
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="ExtraData:" />
              <ListItemText primary={BlocksDetailsData.ExtraData} />
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
