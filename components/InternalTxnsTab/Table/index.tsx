import CustomSkeleton from '@components/shared/CustomSkeleton'
import { Table, TableHead, TableRow, TableBody, Box } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import React from 'react'
import { InternalTxnsTabData } from 'types'
import {
  BlockTableContainer,
  CustomTableCell,
  CustomTableCellBox,
  CustomTableCellHeder,
  CustomTableContainer,
  HeaderBox,
} from './styles'

interface TableProps {
  titles: string[]
  Data: InternalTxnsTabData[]
  loading: boolean
}

const TxnsTable = ({ titles, Data, loading }: TableProps) => {
  return (
    <BlockTableContainer>
      <CustomTableContainer>
        {!loading ? (
          <>
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
                          padding={index > 9 ? 'none' : 'normal'}
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
                              }}
                            >
                              {Object.values(block)[index]}
                            </div>
                          </CustomTableCellBox>
                        </CustomTableCell>
                      </React.Fragment>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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

export default TxnsTable
