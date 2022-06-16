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
  totalPages: number | undefined
  setNext: (endPage: boolean, toNull: boolean) => void
  setPrevious: (firstPage: boolean, toNull: boolean) => void
}

export default function PaginationButton({
  rtl,
  setCurrentPage,
  currentPage,
  totalPages,
  setNext,
  setPrevious,
}: paginationProps) {
  return (
    <>
      {rtl ? (
        <CustomButtonGroup variant="outlined" disabled={currentPage === 1}>
          <CustomButton
            onClick={() => {
              setCurrentPage(1)
              setPrevious(true, false)
            }}
          >
            <FontStyling> FIRST </FontStyling>{' '}
          </CustomButton>
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={() => {
              setCurrentPage(currentPage - 1)
              setPrevious(false, false)
              setNext(false, true)
            }}
          >
            <ArrowBackStyle disabled={currentPage === 1} />
          </CustomArrowButton>
        </CustomButtonGroup>
      ) : (
        <CustomButtonGroup
          variant="outlined"
          disabled={currentPage === totalPages}
        >
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={() => {
              setCurrentPage(currentPage + 1)
              setNext(false, false)
              setPrevious(false, true)
            }}
          >
            <ArrowForwardStyle disabled={currentPage === totalPages} />
          </CustomArrowButton>
          <CustomButton>
            <FontStyling> LAST </FontStyling>{' '}
          </CustomButton>
        </CustomButtonGroup>
      )}
    </>
  )
}
