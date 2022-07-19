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

import Chip from '@components/shared/Chip'
import { GetPaginatedBlocksQuery } from 'lib/graphql/generated'
import { etherToGwei, formatAddress } from 'utils'
import router from 'next/router'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import { Box } from '@mui/material'

interface BlocksTableProps {
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  titles: string[]
  Data: GetPaginatedBlocksQuery | undefined
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
  const [currentPage, setCurrentPage] = useState<number>(1)

  const lengthOfEachPage = Data?.getBlocks?.length || 0
  const startingBlock = Data?.getBlocks[0]?.number || 0
  const endingBlock =
    lengthOfEachPage && Data ? Data?.getBlocks[lengthOfEachPage - 1]?.number : 0
  const setNextState = () => {
    setNext(endingBlock || undefined)
    setPrevious(undefined)
  }

  const setPreviousState = () => {
    setPrevious(startingBlock || undefined)
    setNext(undefined)
  }

  const getValue = (index: number, Object: (string | number | null)[]) => {
    if (index > 9) return
    if (index < 7) return formatAddress(Object[index]?.toString() || '')
    else if (index > 7) {
      const value = `${parseFloat(Object[index]?.toString() || '').toFixed(4)}`
      return value
    } else {
      return `${etherToGwei(parseFloat(Object[index] as string)).toFixed(
        2
      )} Gwei`
    }
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
                      istransaction={istransaction}
                    >
                      <HeaderBox>{title}</HeaderBox>
                    </CustomTableCellHeder>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Data?.getBlocks.map((block, index) => (
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
                                  display: 'flex',
                                }}
                              >
                                {getValue(index, Object.values(block))}
                                <PercentageValue>
                                  {index === 9
                                    ? `(${(
                                        (parseFloat(
                                          Object.values(block)[
                                            index
                                          ]?.toString() || ''
                                        ) /
                                          parseFloat(
                                            Object.values(
                                              block
                                            )[10]?.toString() || ''
                                          )) *
                                        100
                                      ).toFixed(2)}%)`
                                    : ''}
                                </PercentageValue>
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

            <BottomPagination
              pageSize={pageSize}
              setPageSize={setPageSize}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setNext={setNext}
              setPrevious={setPrevious}
              lengthOfEachPage={lengthOfEachPage}
              setNextState={setNextState}
              setPreviousState={setPreviousState}
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
