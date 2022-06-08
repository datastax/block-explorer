import * as React from 'react'
import Button from '@mui/material/Button'
import colors from '@styles/ThemeProvider/colors'
import { CustomArrowButton } from '../SplitButton/styles'
import { FontStyling } from '../../Blocks/Table/styles'
import {
  CustomButtonGroup,
  ArrowForwardStyle,
  ArrowBackStyle,
  CustomButton,
} from './styles'
export interface paginationProps {
  rtl?: string
}

export default function PaginationButton({ rtl }: paginationProps) {
  const anchorRef = React.useRef<HTMLDivElement>(null)

  return (
    <>
      {rtl ? (
        <CustomButtonGroup disabled variant="outlined" ref={anchorRef}>
          <CustomButton>
            <FontStyling> FIRST </FontStyling>{' '}
          </CustomButton>
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            disabled
          >
            <ArrowBackStyle />
          </CustomArrowButton>
        </CustomButtonGroup>
      ) : (
        <CustomButtonGroup variant="outlined" ref={anchorRef}>
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
          >
            <ArrowForwardStyle />
          </CustomArrowButton>
          <Button sx={{ color: colors.neutral100 }}>
            {' '}
            <FontStyling> LAST </FontStyling>{' '}
          </Button>
        </CustomButtonGroup>
      )}
    </>
  )
}
