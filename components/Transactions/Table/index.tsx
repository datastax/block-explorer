import React, { Dispatch, SetStateAction, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import colors from '@styles/ThemeProvider/colors'
import {
  BlockTableContainer,
  CustomTableCell,
  CustomTableContainer,
  CustomTableCellHeder,
  HeaderBox,
  CustomTableCellBox,
  IconWrapper,
} from './styles'
import BottomPagination from '@components/shared/Pagination/BottomPagination'
import UpperPagination from '@components/shared/Pagination/UpperPagination'

import { GetPaginatedTransactionsQuery } from 'lib/graphql/generated'
import { Exchange, Eye } from '@components/shared/Icons'
import Chip from '@components/shared/Chip'
import { formatAddress, getDifference, weiToEther } from 'utils'
import router from 'next/router'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import { Box } from '@mui/material'
import { TransactionBlockDetail } from 'types'

interface TransactionsTableProps {
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  titles: string[]
  Data: GetPaginatedTransactionsQuery | undefined
  setNext: Dispatch<SetStateAction<number | undefined>>
  setPrevious: Dispatch<SetStateAction<number | undefined>>
  loading: boolean
  setBlockDetails: Dispatch<SetStateAction<TransactionBlockDetail | undefined>>
}

const TransactionsTable = ({
  pageSize,
  setPageSize,
  titles,
  Data,
  setNext,
  setPrevious,
  loading,
  setBlockDetails,
}: TransactionsTableProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const lengthOfEachPage = Data?.transactions?.length
  const startingTransaction = Data?.transactions[0]
  const endingTransaction = lengthOfEachPage
    ? Data?.transactions[lengthOfEachPage - 1]
    : undefined
  const setNextState = () => {
    setNext(endingTransaction?.transaction_index || undefined)
    setPrevious(undefined)
    setBlockDetails({
      blockHash: endingTransaction?.block_hash || '',
      blockNumber: endingTransaction?.block_number || 0,
    })
  }

  const setPreviousState = () => {
    setPrevious(startingTransaction?.transaction_index || undefined)
    setNext(undefined)
    setBlockDetails({
      blockHash: startingTransaction?.block_hash || '',
      blockNumber: startingTransaction?.block_number || 0,
    })
  }

  const getUIValue = (
    keys: string[],
    values: (string | number | null)[],
    index: number
  ) => {
    if (index > 7) return

    if (keys[index] === 'transaction_fees')
      return parseFloat(values[index]?.toString() || '').toFixed(8)
    else if (keys[index] === 'block_timestamp')
      return `${getDifference(parseFloat(values[index]?.toString() || ''))} ago`
    else if (keys[index] !== 'value')
      return formatAddress(values[index]?.toString())
    else
      return `${weiToEther(parseFloat(values[index]?.toString() || '')).toFixed(
        4
      )} Ether`
  }

  return (
    <BlockTableContainer>
      <CustomTableContainer>
        {!loading ? (
          <>
            <UpperPagination
              transaction={true}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={pageSize}
              lengthOfEachPage={lengthOfEachPage || 0}
              startingBlock={0}
              endingBlock={0}
              setNextState={setNextState}
              setPreviousState={setPreviousState}
            />
            <Table>
              <TableHead>
                <TableRow>
                  {titles.map((title, index) => (
                    <CustomTableCellHeder
                      key={index}
                      align="center"
                      color={title}
                      border={`1px solid ${colors.neutral500}`}
                      fontWeight="500"
                      lineheight="157%"
                      istransaction={true}
                    >
                      <HeaderBox
                        sx={{
                          marginLeft: Data && index === 0 ? '21%' : '0px',
                        }}
                      >
                        {title}
                      </HeaderBox>
                    </CustomTableCellHeder>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Data?.transactions.map((transaction, index) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={index}
                  >
                    <>
                      {[...Array(Object.keys(transaction).length)].map((_, index) => (
                        <React.Fragment key={index}>
                          <>
                            {Data && index == 5 && (
                              <CustomTableCell
                                color={''}
                                border={`1px solid ${colors.neutral500}`}
                              >
                                <Exchange />
                              </CustomTableCell>
                            )}
                          </>
                          <CustomTableCell
                            key={index}
                            align="center"
                            color={Object.keys(transaction)[index]}
                            border={`1px solid ${colors.neutral500}`}
                            fontWeight="400"
                            lineheight="143%"
                            padding={index > 7 ? 'none' : 'normal'}
                          >
                            <CustomTableCellBox
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {Data && index == 0 && (
                                <IconWrapper>
                                  <Eye />
                                </IconWrapper>
                              )}
                              {Object.keys(transaction)[index] !== 'nonce' ? (
                                <div
                                  onClick={() => {
                                    if (index == 0)
                                      router.push(
                                        `/transaction/${
                                          Object.values(transaction)[index]
                                        }`
                                      )
                                  }}
                                  style={{
                                    cursor: index == 0 ? 'pointer' : 'default',
                                  }}
                                >
                                  {getUIValue(
                                    Object.keys(transaction),
                                    Object.values(transaction),
                                    index
                                  )}
                                </div>
                              ) : (
                                <Chip
                                  label="Transfer"
                                  bgcolor={colors.nordic}
                                  border={`1px solid ${colors.actionPrimary}`}
                                  titlecolor={colors.neutral100}
                                />
                              )}
                            </CustomTableCellBox>
                          </CustomTableCell>
                        </React.Fragment>
                      ))}
                    </>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <BottomPagination
              pageSize={pageSize}
              setPageSize={setPageSize}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setNext={setNext}
              setPrevious={setPrevious}
              lengthOfEachPage={lengthOfEachPage || 0}
              setNextState={setNextState}
              setPreviousState={setPreviousState}
            />
          </>
        ) : (
          <Box>
            <CustomSkeleton rows={10} />
          </Box>
        )}
      </CustomTableContainer>
    </BlockTableContainer>
  )
}

export default TransactionsTable
