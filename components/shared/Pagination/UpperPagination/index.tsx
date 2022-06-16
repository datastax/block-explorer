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
}

const UpperPagination = ({
  transaction,
  blocksData,
  currentPage,
  setCurrentPage,
  setNext,
  setPrevious,
}: UpperPaginationProps) => {
  const lengthOfEachPage = blocksData?.getBlocks?.block?.length
  const totalPages = blocksData?.getBlocks.totalPages
  const startingBlock = blocksData?.getBlocks.block[0].number
  const endingBlock = lengthOfEachPage
    ? blocksData?.getBlocks.block[lengthOfEachPage - 1].number
    : null
  const totalBlocks =
    totalPages && lengthOfEachPage ? totalPages * lengthOfEachPage : null

  const setNextState = (endPage = false, toNull = false) => {
    console.log('setNext State Clicked', endPage)
    if (!endPage) {
      if (toNull) setNext(undefined)
      else setNext(endingBlock || undefined)
    }
  }

  const setPreviousState = (firstPage = false, toNull = false) => {
    console.log('setPrevious State Clicked', firstPage)
    if (!firstPage) {
      if (toNull) setPrevious(undefined)
      else setPrevious(startingBlock || undefined)
    } else {
      setNext(undefined)
      setPrevious(undefined)
    }
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
              <BlockStyle> (Total of {totalBlocks} blocks) </BlockStyle>
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
            rtl="true"
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
            setNext={setNextState}
            setPrevious={setPreviousState}
          />
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <PaginationButton
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
            setNext={setNextState}
            setPrevious={setPreviousState}
          />
        </Stack>
      </Stack>
    </FontStyling>
  )
}

export default UpperPagination
