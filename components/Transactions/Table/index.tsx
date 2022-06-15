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
} from './styles'
import BottomPagination from '@components/shared/Pagination/BottomPagination'
import UpperPagination from '@components/shared/Pagination/UpperPagination'
import { TransactionDataType } from 'types'
import { Exchange, Eye } from '@components/shared/Icons'
import Chip from '@components/shared/Chip'
import { formatAddress } from 'utils'

interface TransactionsTableProps {
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  titles: string[]
  Data: TransactionDataType[]
  setNext: Dispatch<SetStateAction<number | undefined>>
  setPrevious: Dispatch<SetStateAction<number | undefined>>
}

const TransactionsTable = ({
  pageSize,
  setPageSize,
  titles,
  Data,
  setNext,
  setPrevious,
}: TransactionsTableProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <BlockTableContainer>
      <CustomTableContainer>
        <UpperPagination
          transaction={true}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setNext={setNext}
          setPrevious={setPrevious}
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
            {Data?.map((block, index) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                key={index}
              >
                {[...Array(Object.keys(block).length)].map((_, index) => (
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
                        {Data && index == 0 && (
                          <div
                            style={{
                              paddingRight: '20px',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <Eye />
                          </div>
                        )}
                        {Object.keys(block)[index] !== 'Method' ? (
                          formatAddress(Object.values(block)[index]?.toString())
                        ) : (
                          <Chip
                            label={Object.values(block)[index]}
                            bgcolor={colors.nordic}
                            border={`1px solid ${colors.actionPrimary}`}
                            titlecolor={colors.neutral100}
                          />
                        )}
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
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setNext={setNext}
          setPrevious={setPrevious}
        />
      </CustomTableContainer>
    </BlockTableContainer>
  )
}

export default TransactionsTable
