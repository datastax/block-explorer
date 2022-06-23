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
  const lengthOfEachPage = blocksData?.getBlocks.length
  const startingBlock = blocksData?.getBlocks[0].number
  const endingBlock = lengthOfEachPage
    ? blocksData?.getBlocks[lengthOfEachPage - 1].number
    : null

  const setNextState = () => {
    setNext(endingBlock || undefined)
    setPrevious(undefined)
  }

  const setPreviousState = () => {
    setPrevious(startingBlock || undefined)
    setNext(undefined)
  }

  const setValuesToDefault = () => {
    setNext(undefined)
    setPrevious(undefined)
    setCurrentPage(1)
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
          <SplitButton
            pageSize={pageSize}
            setPageSize={setPageSize}
            setValueToDefault={setValuesToDefault}
          />
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
    </Records>
  )
}

export default BottomPagination
