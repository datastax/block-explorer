import { Stack } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import {
  BlockStyle,
  FontStyling,
} from '@components/shared/Pagination/UpperPagination/styles'
import PaginationButton from '../../PaginationButton'
import { GetPaginatedBlocksQuery } from 'lib/graphql/generated'

interface UpperPaginationProps {
  transaction: boolean
  blocksData?: GetPaginatedBlocksQuery | undefined
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setNext: Dispatch<SetStateAction<number | undefined>>
  setPrevious: Dispatch<SetStateAction<number | undefined>>
  pageSize: number
}

const UpperPagination = ({
  pageSize,
  transaction,
  blocksData,
  currentPage,
  setCurrentPage,
  setNext,
  setPrevious,
}: UpperPaginationProps) => {
  const lengthOfEachPage = blocksData?.getBlocks?.length
  const startingBlock = blocksData?.getBlocks[0]?.number
  const endingBlock = lengthOfEachPage
    ? blocksData?.getBlocks[lengthOfEachPage - 1]?.number
    : null
  const setNextState = () => {
    setNext(endingBlock || undefined)
    setPrevious(undefined)
  }

  const setPreviousState = () => {
    setPrevious(startingBlock || undefined)
    setNext(undefined)
  }

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
