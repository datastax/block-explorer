import { Stack } from '@mui/material'
import React from 'react'
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
}

const UpperPagination = ({
  transaction,
  blocksData,
  currentPage,
  setCurrentPage,
}: UpperPaginationProps) => {
  const lengthOfEachPage = blocksData?.getBlocks?.block?.length
  const totalPages = blocksData?.getBlocks.totalPages
  const startingBlock = blocksData?.getBlocks.block[0].number
  const endingBlock = lengthOfEachPage
    ? blocksData?.getBlocks.block[lengthOfEachPage - 1].number
    : null
  const totalBlocks =
    totalPages && lengthOfEachPage ? totalPages * lengthOfEachPage : null

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
    </FontStyling>
  )
}

export default UpperPagination
