import {
  Records,
  FontStyling,
} from '@components/shared/Pagination/BottomPagination/styles'
import { Stack } from '@mui/material'
import { GetPaginatedBlocksQuery } from 'lib/graphql/generated'
import React, { Dispatch, SetStateAction } from 'react'
import PaginationButton from '../../PaginationButton'
import SplitButton from '../../SplitButton'

interface BottomPaginationProps {
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  blocksData?: GetPaginatedBlocksQuery | undefined
  setNext: Dispatch<SetStateAction<number | undefined>>
  setPrevious: Dispatch<SetStateAction<number | undefined>>
}

const BottomPagination = ({
  pageSize,
  setPageSize,
  currentPage,
  setCurrentPage,
  blocksData,
  setNext,
  setPrevious,
}: BottomPaginationProps) => {
  const totalPages = blocksData?.getBlocks.totalPages
  const lengthOfEachPage = blocksData?.getBlocks?.block?.length
  const startingBlock = blocksData?.getBlocks.block[0].number
  const endingBlock = lengthOfEachPage
    ? blocksData?.getBlocks.block[lengthOfEachPage - 1].number
    : null

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
    <Records>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" alignItems={'center'} spacing={2}>
          <FontStyling>
            <span>SHOW</span>
          </FontStyling>
          <SplitButton pageSize={pageSize} setPageSize={setPageSize} />
          <FontStyling>
            <span>RECORDS</span>
          </FontStyling>
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
    </Records>
  )
}

export default BottomPagination
