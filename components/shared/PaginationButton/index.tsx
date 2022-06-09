import * as React from 'react'
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
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number
}

export default function PaginationButton({
  rtl,
  setCurrentPage,
  currentPage,
}: paginationProps) {
  return (
    <>
      {rtl ? (
        <CustomButtonGroup variant="outlined">
          <CustomButton disabled={currentPage === 1}>
            <FontStyling> FIRST </FontStyling>{' '}
          </CustomButton>
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ArrowBackStyle disabled={currentPage === 1} />
          </CustomArrowButton>
        </CustomButtonGroup>
      ) : (
        <CustomButtonGroup variant="outlined" disabled={currentPage === 7}>
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ArrowForwardStyle />
          </CustomArrowButton>
          <CustomButton>
            <FontStyling> LAST </FontStyling>{' '}
          </CustomButton>
        </CustomButtonGroup>
      )}
    </>
  )
}
