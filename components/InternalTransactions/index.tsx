import CustomSkeleton from '@components/shared/CustomSkeleton'
import BottomPagination from '@components/shared/Pagination/BottomPagination'
import UpperPagination from '@components/shared/Pagination/UpperPagination'
import { Table, TableHead, TableRow, TableBody, Box } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import React, { useEffect } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { InternalTransactionData } from 'types'
import router from 'next/router'
import {
  BlockTableContainer,
  CustomTableContainer,
  CustomTableCellHeder,
  HeaderBox,
  CustomTableCell,
  CustomTableCellBox,
} from './styles'
import { formatAddress } from 'utils'
import { PAGINATION_EVENT } from '@constants'

interface InternalTransactionProps {
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  titles: string[]
  Data: InternalTransactionData[]
  loading: boolean
  blockNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
  pageNumber: number
  totalInternalTransactions: number
}

const InternalTransactionTable = ({
  pageSize,
  setPageSize,
  titles,
  Data,
  loading,
  blockNumber,
  setPageNumber,
  pageNumber,
  totalInternalTransactions,
}: InternalTransactionProps) => {
  const startingBlock = 1
  const endingBlock = 1

  const handlePagination = (paginationEvent: PAGINATION_EVENT) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT) {
      setPageNumber(pageNumber + 1)
    }
    if (paginationEvent === PAGINATION_EVENT.PREV) {
      setPageNumber(pageNumber - 1)
    }
  }

  useEffect(() => {
    if (Data.length === 0) setPageNumber(1)
  }, [Data.length, setPageNumber])

  return (
    <BlockTableContainer>
      <CustomTableContainer>
        {!loading ? (
          <>
            <UpperPagination
              pageSize={pageSize}
              transaction={false}
              currentPage={pageNumber}
              setCurrentPage={setPageNumber}
              intTxnPageSize={pageSize * pageNumber}
              lengthOfEachPage={totalInternalTransactions - 1}
              startingBlock={startingBlock}
              endingBlock={endingBlock}
              block={blockNumber}
              handlePagination={handlePagination}
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
                    >
                      <HeaderBox>{title}</HeaderBox>
                    </CustomTableCellHeder>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Data.map((block, index) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={index}
                  >
                    {[...Array(Object.keys(block).length)].map((_, index) => (
                      <React.Fragment key={index}>
                        <CustomTableCell
                          key={index}
                          align="center"
                          color={Object.keys(block)[index]}
                          border={`1px solid ${colors.neutral500}`}
                          fontWeight="400"
                          lineheight="143%"
                        >
                          <CustomTableCellBox
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <div
                              style={{
                                cursor: index == 0 ? 'pointer' : 'default',
                                display: 'flex',
                                color:
                                  index === 0 ? colors.actionSecondary : '',
                              }}
                              onClick={() => {
                                if (index == 0)
                                  router.push(
                                    `/transaction/${
                                      Object.values(block)[index]
                                    }`
                                  )
                              }}
                            >
                              {formatAddress(Object.values(block)[index])}
                            </div>
                          </CustomTableCellBox>
                        </CustomTableCell>
                      </React.Fragment>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <BottomPagination
              pageSize={pageSize}
              setPageSize={setPageSize}
              currentPage={pageNumber}
              setCurrentPage={setPageNumber}
              handlePagination={handlePagination}
              intTxnPageSize={pageSize * pageNumber}
              lengthOfEachPage={totalInternalTransactions - 1}
            />
          </>
        ) : (
          <Box sx={{ width: '100%' }}>
            <CustomSkeleton rows={10} />
          </Box>
        )}
      </CustomTableContainer>
    </BlockTableContainer>
  )
}

export default InternalTransactionTable
