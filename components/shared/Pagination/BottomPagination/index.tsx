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
}

const BottomPagination = ({
  pageSize,
  setPageSize,
  currentPage,
  setCurrentPage,
  blocksData,
}: BottomPaginationProps) => {
  const totalPages = blocksData?.getBlocks.totalPages
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
          />
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <PaginationButton
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Stack>
      </Stack>
    </Records>
  )
}

export default BottomPagination
