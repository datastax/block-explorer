import * as React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import colors from '@styles/ThemeProvider/colors'
import { CustomArrowButton } from '../SplitButton/styles'
import { FontStyling } from '../../Blocks/Table/styles'
export interface paginationProps {
  rtl?: string
}

export default function PaginationButton({ rtl }: paginationProps) {
  const anchorRef = React.useRef<HTMLDivElement>(null)

  return (
    <React.Fragment>
      {rtl ? (
        <ButtonGroup
          variant="outlined"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button sx={{ color: 'white' }}>
            <FontStyling> FIRST </FontStyling>{' '}
          </Button>
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
          >
            <ArrowBackIosNewIcon sx={{ color: colors.neutral100 }} />
          </CustomArrowButton>
        </ButtonGroup>
      ) : (
        <ButtonGroup
          variant="outlined"
          ref={anchorRef}
          aria-label="split button"
        >
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
          >
            <ArrowForwardIosIcon sx={{ color: colors.neutral100 }} />
          </CustomArrowButton>
          <Button sx={{ color: colors.neutral100 }}>
            {' '}
            <FontStyling> LAST </FontStyling>{' '}
          </Button>
        </ButtonGroup>
      )}
    </React.Fragment>
  )
}
