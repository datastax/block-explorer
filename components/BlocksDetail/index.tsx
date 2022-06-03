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
import { DetailsData } from '@constants/blocksDetailData'
import { ListItemText, Collapse, ListItemButton } from '@mui/material'
import React from 'react'
import { Question } from '@components/shared/Icons/index'
import BlockDetailRow from './BlockDetailRow'
const BlocksDetail = () => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <DetailsTableContainer>
        <CustomTableContainer>
          <CustomList>
            {Object.keys(DetailsData).map((key) => (
              <BlockDetailRow key={key} objectKey={key} data={DetailsData} />
            ))}
          </CustomList>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="ExtraData:" />
              <ListItemText primary={DetailsData.ExtraData} />
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <CustomListIcon>
                <Question />
              </CustomListIcon>
              <CustomListItemText primary="ExtraData:" />
              <ListItemText primary={DetailsData.ExtraData} />
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
