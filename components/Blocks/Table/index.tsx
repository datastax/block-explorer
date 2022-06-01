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
} from './styles'
import { BlocksData, BlocksTitle } from '@constants/blocksData'
import BottomPagination from '@components/shared/Pagination/BottomPagination'
import UpperPagination from '@components/shared/Pagination/UpperPagination'

const BlocksTable = () => {
  return (
    <BlockTableContainer>
      <CustomTableContainer>
        <UpperPagination />
        <Table>
          <TableHead>
            <TableRow>
              {BlocksTitle.map((title, index) => (
                <CustomTableCell
                  key={index}
                  align="center"
                  color={colors.neutral300}
                  border={`1px solid ${colors.neutral300}`}
                  fontWeight="500"
                  lineHeight="157%"
                >
                  {title}
                </CustomTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {BlocksData.map((Data, index) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                key={index}
              >
                {[...Array(Object.keys(Data).length)].map((_, index) => (
                  <CustomTableCell
                    key={index}
                    align="center"
                    color={Object.keys(Data)[index]}
                    border={`1px solid ${colors.neutral300}`}
                    fontWeight="400"
                    lineHeight="143%"
                  >
                    {Object.values(Data)[index]}
                  </CustomTableCell>
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
