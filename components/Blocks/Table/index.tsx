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

import Chip from '@components/shared/Chip'
import { GetPaginatedBlocksQuery } from 'lib/graphql/generated'
import { formatAddress } from 'utils'
import router from 'next/router'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import { Box } from '@mui/material'

interface BlocksTableProps {
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  titles: string[]
  Data?: GetPaginatedBlocksQuery | undefined
  istransaction?: boolean
  setNext: Dispatch<SetStateAction<number | undefined>>
  setPrevious: Dispatch<SetStateAction<number | undefined>>
  loading: boolean
}

const BlocksTable = ({
  pageSize,
  setPageSize,
  titles,
  Data,
  istransaction,
  setNext,
  setPrevious,
  loading,
}: BlocksTableProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <BlockTableContainer>
      <CustomTableContainer>
        <UpperPagination
          blocksData={Data}
          transaction={false}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setNext={setNext}
          setPrevious={setPrevious}
        />
        {!loading ? (
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
              {Data?.getBlocks.block.map((block, index) => (
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
                          {Object.keys(block)[index] !== 'Method' ? (
                            <div
                              onClick={() => {
                                if (index == 0)
                                  router.push(
                                    `/block/${Object.values(block)[index]}`
                                  )
                              }}
                              style={{
                                cursor: index == 0 ? 'pointer' : 'default',
                              }}
                            >
                              {formatAddress(
                                Object.values(block)[index]?.toString()
                              )}
                            </div>
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
        ) : (
          <Box sx={{ width: '100%' }}>
            <CustomSkeleton rows={10} />
          </Box>
        )}
        <BottomPagination
          pageSize={pageSize}
          setPageSize={setPageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          blocksData={Data}
          setNext={setNext}
          setPrevious={setPrevious}
        />
      </CustomTableContainer>
    </BlockTableContainer>
  )
}

export default BlocksTable
