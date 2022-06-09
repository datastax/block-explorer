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
import { formatAddress, getDifference } from '@utils'

interface transactionBlockProps {
  title: string
  transactions: GetTransactionsQuery | undefined
}

const TransactionsList = ({ title, transactions }: transactionBlockProps) => {
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
          {transactions?.transactions.transactions?.map(
            (transaction, index) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                key={index}
              >
                <CustomTableCell
                  color={colors.actionSecondary}
                  border={`1px solid ${colors.neutral300}`}
                  fontWeight="400"
                  lineheight="24px"
                >
                  <ColumnBox flexValue="flex-start">
                    {formatAddress(transaction.hash)}
                    <strong>
                      {getDifference(parseInt(transaction.block_timestamp))} ago
                    </strong>
                  </ColumnBox>
                </CustomTableCell>
                <CustomTableCell
                  color={colors.actionSecondary}
                  border={`1px solid ${colors.neutral300}`}
                  fontWeight="400"
                  lineheight="24px"
                >
                  <ColumnBox flexValue="flex-start">
                    <div>
                      <span>From </span>
                      {formatAddress(transaction.from_address)}
                    </div>
                    <div>
                      <span>To </span>
                      {formatAddress(transaction.to_address)}
                    </div>
                  </ColumnBox>
                </CustomTableCell>
                <CustomTableCell
                  color={''}
                  border={`1px solid ${colors.neutral300}`}
                >
                  <ChipWrapper>
                    <Chip
                      bgcolor={colors.nordic}
                      border={`1px solid ${colors.actionPrimary}`}
                      titlecolor={colors.neutral100}
                      label={'2.1807 Ether'}
                    />
                  </ChipWrapper>
                </CustomTableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <StyledButton onClick={() => router.push('/transactions')}>
        VIEW All TRANSACTIONS
      </StyledButton>
    </StyledCard>
  )
}

export default TransactionsList
