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
  PercentageValue,
} from './styles'
import BottomPagination from '@components/shared/Pagination/BottomPagination'
import UpperPagination from '@components/shared/Pagination/UpperPagination'
import { GetPaginatedEthBlocksQuery } from 'lib/graphql/generated'
import {
  etherToGwei,
  formatAddress,
  getDifference,
  numberWithCommas,
} from 'utils'
import router from 'next/router'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import { Box } from '@mui/material'
import { PAGINATION_EVENT } from 'constants/index'

interface BlocksTableProps {
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  titles: string[]
  Data: GetPaginatedEthBlocksQuery | undefined
  istransaction?: boolean
  loading: boolean
  handlePagination: (event: PAGINATION_EVENT) => void
}

const BlocksTable = ({
  pageSize,
  setPageSize,
  titles,
  Data,
  istransaction,
  loading,
  handlePagination,
}: BlocksTableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const lengthOfEachPage = Data?.eth_blocks?.values?.length || 0
  const startingBlock = Data?.eth_blocks?.values?.[0]?.number || 0
  const endingBlock = Data?.eth_blocks?.values?.[pageSize - 1]?.number || 0

  const getValue = (index: number, Object: (string | number | null)[]) => {
    if (index === 1)
      return `${getDifference(parseInt(Object[index]?.toString() || ''))} ago`
    if (index === 5 || index === 6) return numberWithCommas(Object[index] || '')
    if (index > 9) return
    if (index < 7) return formatAddress(Object[index]?.toString() || '')
    else if (index > 7) {
      let value = `${parseFloat(Object[index]?.toString() || '').toFixed(4)}`
      if (index == 8) value += ' Ether'
      return value
    } else {
      return `${etherToGwei(Object[index])} Gwei`
    }
  }

  const getPercentageValue = (
    index: number,
    Object: (string | number | null)[]
  ) => {
    if (index === 9) {
      if (Object[10]?.toString() == '0') return '(0%)'
      return `(${(
        (parseFloat(Object[index]?.toString() || '') /
          parseFloat(Object[10]?.toString() || '')) *
        100
      ).toFixed(2)}%)`
    }
    return ''
  }
  return (
    <BlockTableContainer>
      <CustomTableContainer>
        {!loading ? (
          <>
            <UpperPagination
              pageSize={pageSize}
              transaction={false}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lengthOfEachPage={lengthOfEachPage}
              startingBlock={startingBlock}
              endingBlock={endingBlock}
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
                      istransaction={istransaction}
                    >
                      <HeaderBox>{title}</HeaderBox>
                    </CustomTableCellHeder>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Data?.eth_blocks?.values?.map((block, index) => (
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
                          padding={index > 9 ? 'none' : 'normal'}
                        >
                          <CustomTableCellBox
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <div
                              onClick={() => {
                                if (index == 0)
                                  router.push(
                                    `/block/${Object.values(block)[index]}`
                                  )
                              }}
                              style={{
                                cursor: index == 0 ? 'pointer' : 'default',
                                display: 'flex',
                              }}
                            >
                              {getValue(index, Object.values(block))}
                              <PercentageValue>
                                {getPercentageValue(
                                  index,
                                  Object.values(block)
                                )}
                              </PercentageValue>
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
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lengthOfEachPage={lengthOfEachPage}
              handlePagination={handlePagination}
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

export default BlocksTable
