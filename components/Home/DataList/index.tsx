import colors from 'styles/ThemeProvider/colors'
import { Table, TableBody, TableRow, Typography } from '@mui/material'
import Chip from '@components/shared/Chip'
import {
  ColumnBox,
  CustomTableCell,
  StyledCard,
  StyledButton,
  ChipWrapper,
} from './styles'
import { BlocksDataHome } from 'types'
import { useRouter } from 'next/router'

interface transactionBlockProps {
  title: string
  blocksData: BlocksDataHome[]
  miner?: boolean
}

const DataList = (props: transactionBlockProps) => {
  const router = useRouter()
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | undefined>,
    route: string
  ) => {
    e.preventDefault()
    router.push(route)
  }
  return (
    <StyledCard>
      <Typography
        fontWeight={500}
        fontSize={'24px'}
        lineHeight={'28px'}
        color={colors.neutral100}
      >
        {props.title}
      </Typography>

      <Table sx={{ width: '100%' }}>
        <TableBody>
          {props.blocksData.map((BlocksData, index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={index}
            >
              <CustomTableCell
                color={colors.actionSecondary}
                border={`1px solid ${colors.neutral500}`}
                fontWeight="400"
                lineheight="24px"
              >
                <ColumnBox flexValue="flex-start">
                  {BlocksData.Block}
                  <text>{BlocksData.Age}</text>
                </ColumnBox>
              </CustomTableCell>
              <CustomTableCell
                color={colors.actionSecondary}
                border={`1px solid ${colors.neutral500}`}
                fontWeight="400"
                lineheight="24px"
              >
                <ColumnBox flexValue="flex-start">
                  <div>
                    <span>{props.miner ? 'Miner' : 'From'} </span>
                    {BlocksData.Miner}
                  </div>
                  <div>
                    <span>{!props.miner ? 'To ' : ''}</span>
                    {!props.miner ? (
                      BlocksData.Txn
                    ) : (
                      <text>{BlocksData.Txn}</text>
                    )}
                  </div>
                </ColumnBox>
              </CustomTableCell>
              <CustomTableCell
                color={''}
                border={`1px solid ${colors.neutral500}`}
              >
                <ChipWrapper>
                  <Chip
                    bgcolor={colors.nordic}
                    border={`1px solid ${colors.actionPrimary}`}
                    titlecolor={colors.neutral100}
                    label={BlocksData.reward}
                  />
                </ChipWrapper>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <StyledButton
        onClick={(e) =>
          handleClick(e, props.miner ? '/blocks' : '/transactions')
        }
      >
        VIEW All {props.miner ? 'BLOCKS' : 'TRANSACTIONS'}
      </StyledButton>
    </StyledCard>
  )
}

export default DataList
