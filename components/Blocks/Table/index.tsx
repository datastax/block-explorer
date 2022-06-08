import React from 'react'
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
import { BlockProps, TransactionDataType } from 'types'
import { Exchange, Eye } from '@components/shared/Icons'
import Chip from '@components/shared/Chip'

interface BlocksTableProps {
  titles: string[]
  TransactionDataToMap?: TransactionDataType[]
  BlocksDataToMap?: BlockProps[]
  isTransaction?: boolean
}

const BlocksTable = ({
  titles,
  TransactionDataToMap,
  BlocksDataToMap,
  isTransaction,
}: BlocksTableProps) => {
  const dataToMap = BlocksDataToMap || TransactionDataToMap
  return (
    <BlockTableContainer>
      <CustomTableContainer>
        <UpperPagination transaction={TransactionDataToMap ? true : false} />
        <Table>
          <TableHead>
            <TableRow>
              {titles.map((title, index) => (
                <CustomTableCellHeder
                  key={index}
                  align="center"
                  color={title}
                  border={`1px solid ${colors.neutral300}`}
                  fontWeight="500"
                  lineHeight="157%"
                  isTransaction={isTransaction}
                >
                  <HeaderBox
                    sx={{
                      marginLeft:
                        TransactionDataToMap && index === 0 ? '21%' : '0px',
                    }}
                  >
                    {title}
                  </HeaderBox>
                </CustomTableCellHeder>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToMap?.map((Data, index) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                key={index}
              >
                {[...Array(Object.keys(Data).length)].map((_, index) => (
                  <>
                    <>
                      {TransactionDataToMap && index == 5 && (
                        <CustomTableCell
                          color={''}
                          border={`1px solid ${colors.neutral300}`}
                        >
                          <Exchange />
                        </CustomTableCell>
                      )}
                    </>
                    <CustomTableCell
                      key={index}
                      align="center"
                      color={Object.keys(Data)[index]}
                      border={`1px solid ${colors.neutral300}`}
                      fontWeight="400"
                      lineHeight="143%"
                    >
                      <CustomTableCellBox
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          paddingRight: '20px',
                        }}
                      >
                        {TransactionDataToMap && index == 0 && (
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
                        {Object.keys(Data)[index] !== 'Method' ? (
                          Object.values(Data)[index]
                        ) : (
                          <Chip
                            label={Object.values(Data)[index]}
                            bgColor={colors.nordic}
                            border={`1px solid ${colors.actionPrimary}`}
                            titleColor={colors.neutral100}
                          />
                        )}
                      </CustomTableCellBox>
                    </CustomTableCell>
                  </>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <BottomPagination />
      </CustomTableContainer>
    </BlockTableContainer>
  )
}

export default BlocksTable
