import { Stack } from '@mui/material'
import React from 'react'
import { FontStyling } from '@components/shared/Pagination/UpperPagination/styles'
import PaginationButton from '../../PaginationButton'

const UpperPagination = () => {
  return (
    <FontStyling>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          Block #14849876 to #14849876 (Total of 14,849,877 blocks)
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <PaginationButton rtl="true" />
          <span>Page 1 of 593996</span>
          <PaginationButton />
        </Stack>
      </Stack>
    </FontStyling>
  )
}

export default UpperPagination
