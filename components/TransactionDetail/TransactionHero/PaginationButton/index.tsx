import React from 'react'
import { CustomPagingButton, ArrowBackStyle, ArrowForwardStyle } from './styles'
import { ButtonGroup } from '@mui/material'
const PaginationButton = () => {
  return (
    <React.Fragment>
      <ButtonGroup>
        <CustomPagingButton size="small">
          <ArrowBackStyle />
        </CustomPagingButton>
        <CustomPagingButton size="small">
          <ArrowForwardStyle />
        </CustomPagingButton>
      </ButtonGroup>
    </React.Fragment>
  )
}

export default PaginationButton
