import { Stack, Typography } from '@mui/material'
import React from 'react'
import {
  BlockStyle,
  FontStyling,
} from '@components/shared/Pagination/UpperPagination/styles'
import PaginationButton from '../../PaginationButton'
import colors from '@styles/ThemeProvider/colors'
import { PAGINATION_EVENT } from 'constants/index'

interface UpperPaginationProps {
  transaction: boolean
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
  lengthOfEachPage: number
  startingBlock: number
  endingBlock: number
  block?: number
  intTxnPageSize?: number
  handlePagination: (event: PAGINATION_EVENT) => void
}

const UpperPagination = ({
  pageSize,
  transaction,
  currentPage,
  setCurrentPage,
  lengthOfEachPage,
  startingBlock,
  endingBlock,
  block,
  intTxnPageSize,
  handlePagination,
}: UpperPaginationProps) => {
  return (
    <FontStyling>
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          {transaction ? (
            <>
              {/* Showing Transactions */}
              {/* More than {'>'} 1,586,808,272 transactions found{' '} */}
              <BlockStyle> Showing {pageSize} records </BlockStyle>
            </>
          ) : (
            <>
              {block ? (
                <Typography
                  fontWeight={500}
                  fontSize="22px"
                  color={colors.neutral100}
                >
                  Block{' '}
                  <span
                    style={{
                      color: colors.neutral300,
                    }}
                  >
                    #{block}
                  </span>
                </Typography>
              ) : (
                `Block #${startingBlock} to #${endingBlock}`
              )}
            </>
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <PaginationButton
            lengthOfEachPage={lengthOfEachPage}
            pageSize={intTxnPageSize ? intTxnPageSize : pageSize}
            rtl="true"
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
          <span>{`Page ${currentPage}`}</span>
          <PaginationButton
            lengthOfEachPage={lengthOfEachPage}
            pageSize={intTxnPageSize ? intTxnPageSize : pageSize}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
        </Stack>
      </Stack>
    </FontStyling>
  )
}

export default UpperPagination
