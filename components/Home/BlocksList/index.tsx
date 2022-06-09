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
import { useRouter } from 'next/router'
import { GetBlocksQuery } from 'lib/graphql/generated'
import { formatAddress } from '@utils'

interface BlockListProps {
  title: string
  blocks: GetBlocksQuery | undefined
}

const BlocksList = ({ title, blocks }: BlockListProps) => {
  const router = useRouter()
  return (
    <StyledCard>
      <Typography
        fontWeight={500}
        fontSize={'24px'}
        lineHeight={'28px'}
        color={colors.neutral100}
      >
        {title}
      </Typography>

      <Table sx={{ width: '100%' }}>
        <TableBody>
          {blocks?.getBlocks.block?.map((Block, index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={index}
            >
              <CustomTableCell
                color={colors.actionSecondary}
                border={`1px solid ${colors.neutral300}`}
                fontWeight="400"
                lineHeight="24px"
              >
                <ColumnBox flexValue="flex-start">
                  {Block.number}
                  <text>{Block.timestamp}</text>
                </ColumnBox>
              </CustomTableCell>
              <CustomTableCell
                color={colors.actionSecondary}
                border={`1px solid ${colors.neutral300}`}
                fontWeight="400"
                lineHeight="24px"
              >
                <ColumnBox flexValue="flex-start">
                  <div>
                    Miner{" "}
                    {formatAddress(Block.miner)}
                  </div>
                  <div>
                    <span>
                      {Block.transaction_count} in {Block.timestamp}
                    </span>
                  </div>
                </ColumnBox>
              </CustomTableCell>
              <CustomTableCell
                color={''}
                border={`1px solid ${colors.neutral300}`}
              >
                <ChipWrapper>
                  <Chip
                    bgColor={colors.nordic}
                    border={`1px solid ${colors.actionPrimary}`}
                    titleColor={colors.neutral100}
                    label={'2.1807 Ether'}
                  />
                </ChipWrapper>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <StyledButton onClick={() => router.push('/blocks')}>
        VIEW All BLOCKS
      </StyledButton>
    </StyledCard>
  )
}

export default BlocksList