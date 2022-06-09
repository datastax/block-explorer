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
import { GetTransactionsQuery } from 'lib/graphql/generated'
import { formatAddress } from '@utils'

interface transactionBlockProps {
  title: string
  data: GetTransactionsQuery | undefined
  isBlocks?: boolean
}

const DataList = ({ title, data, isBlocks }: transactionBlockProps) => {
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
        {title}
      </Typography>

      <Table sx={{ width: '100%' }}>
        <TableBody>
          {data?.transactions.transactions?.map((transaction, index) => (
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
                  {transaction.hash}
                  <text>{transaction.block_timestamp}</text>
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
                    <span>{isBlocks ? 'Miner' : 'From'} </span>
                    {formatAddress(transaction.from_address)}
                  </div>
                  <div>
                    <span>{isBlocks ? 'To ' : ''}</span>
                    {!isBlocks ? (
                      formatAddress(transaction.to_address)
                    ) : (
                      <text>{transaction.block_timestamp}</text>
                    )}
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
      <StyledButton
        onClick={(e) => handleClick(e, isBlocks ? '/blocks' : '/transactions')}
      >
        VIEW All {isBlocks ? 'BLOCKS' : 'TRANSACTIONS'}
      </StyledButton>
    </StyledCard>
  )
}

export default DataList
