import { Stack, Typography } from '@mui/material'
import React from 'react'
import {
  BlockStyle,
  FontStyling,
} from '@components/shared/Pagination/UpperPagination/styles'
import PaginationButton from '../../PaginationButton'
import colors from '@styles/ThemeProvider/colors'

interface UpperPaginationProps {
  transaction: boolean
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
  lengthOfEachPage: number
  startingBlock: number
  endingBlock: number
  setNextState: () => void
  setPreviousState: () => void
  block?: number
  intTxnPageSize?: number
}

const UpperPagination = ({
  pageSize,
  transaction,
  currentPage,
  setCurrentPage,
  lengthOfEachPage,
  startingBlock,
  endingBlock,
  setNextState,
  setPreviousState,
  block,
  intTxnPageSize,
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
            lengthOfEachPage={lengthOfEachPage || 0}
            pageSize={intTxnPageSize ? intTxnPageSize : pageSize}
            rtl="true"
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setNext={setNextState}
            setPrevious={setPreviousState}
          />
          <span>{`Page ${currentPage}`}</span>
          <PaginationButton
            lengthOfEachPage={lengthOfEachPage || 0}
            pageSize={intTxnPageSize ? intTxnPageSize : pageSize}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setNext={setNextState}
            setPrevious={setPreviousState}
          />
        </Stack>
      </Stack>
    </FontStyling>
  )
}

export default UpperPagination
