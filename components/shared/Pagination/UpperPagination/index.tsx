import { Stack } from '@mui/material'
import React from 'react'
import {
  BlockStyle,
  FontStyling,
} from '@components/shared/Pagination/UpperPagination/styles'
import PaginationButton from '../../PaginationButton'

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
}: UpperPaginationProps) => {
  return (
    <FontStyling>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          {transaction ? (
            <>
              More than {'>'} 1,586,808,272 transactions found{' '}
              <BlockStyle> (Showing the last 500k records) </BlockStyle>
            </>
          ) : (
            <>
              Block #{startingBlock} to #{endingBlock}
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
            pageSize={pageSize}
            rtl="true"
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setNext={setNextState}
            setPrevious={setPreviousState}
          />
          <span>{`Page ${currentPage}`}</span>
          <PaginationButton
            lengthOfEachPage={lengthOfEachPage || 0}
            pageSize={pageSize}
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
