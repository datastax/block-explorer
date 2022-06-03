import {
  Records,
  FontStyling,
} from '@components/shared/Pagination/BottomPagination/styles'
import { Stack } from '@mui/material'
import React from 'react'
import PaginationButton from '../../PaginationButton'
import SplitButton from '../../SplitButton'

const BottomPagination = () => {
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
          <SplitButton />
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
          <PaginationButton rtl="true" />
          <FontStyling>
            <span>Page 1 of 593996</span>
          </FontStyling>
          <PaginationButton />
        </Stack>
      </Stack>
    </Records>
  )
}

export default BottomPagination
