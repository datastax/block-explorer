import {
  DetailsTableContainer,
  CustomTableContainer,
  CustomListItem,
  CustomDivider,
  CustomListItemText,
  CustomListIcon,
  CustomLink,
  CustomList,
  Wrapper,
  SideBox,
} from '@components/BlocksDetail/styles'
import colors from '@styles/ThemeProvider/colors'
import { ListItemText, Collapse, ListItemButton, Tooltip } from '@mui/material'
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
              <SideBox>
                <CustomListIcon>
                  <Question />
                </CustomListIcon>
                <CustomListItemText primary="Hash:" />
              </SideBox>
              <Wrapper>
                <ListItemText primary={BlocksDetailsData?.Hash} />
              </Wrapper>
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <SideBox>
                <CustomListIcon>
                  <Question />
                </CustomListIcon>
                <CustomListItemText primary="Parent Hash:" />
              </SideBox>
              <Wrapper>
                <Tooltip placement="top-start" title="View Parent Block">
                  <ListItemText
                    primary={BlocksDetailsData?.ParentHash}
                    sx={{ color: colors.actionSecondary, cursor: 'pointer' }}
                    onClick={() => {
                      router.push(
                        `/block/${Number(BlocksDetailsData?.BlockHeight) - 1}`
                      )
                    }}
                  />
                </Tooltip>
              </Wrapper>
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <SideBox>
                <CustomListIcon>
                  <Question />
                </CustomListIcon>
                <CustomListItemText primary="Nonce:" />
              </SideBox>
              <Wrapper>
                <ListItemText primary={BlocksDetailsData?.Nonce} />
              </Wrapper>
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <SideBox>
                <CustomListIcon>
                  <Question />
                </CustomListIcon>
                <CustomListItemText primary="ExtraData:" />
              </SideBox>
              <Wrapper>
                <ListItemText primary={BlocksDetailsData?.ExtraData} />
              </Wrapper>
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <SideBox>
                <CustomListIcon>
                  <Question />
                </CustomListIcon>
                <CustomListItemText primary="StateRoot:" />
              </SideBox>
              <Wrapper>
                <ListItemText primary={BlocksDetailsData?.StateRoot} />
              </Wrapper>
            </CustomListItem>
            <CustomDivider />
            <CustomListItem>
              <SideBox>
                <CustomListIcon>
                  <Question />
                </CustomListIcon>
                <CustomListItemText primary="Sha3Uncles:" />
              </SideBox>
              <Wrapper>
                <ListItemText primary={BlocksDetailsData?.Sha3Uncles} />
              </Wrapper>
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
