import * as React from 'react'
import { CustomArrowButton } from '../SplitButton/styles'
import { CustomButtonGroup, ArrowForwardStyle, ArrowBackStyle } from './styles'
export interface paginationProps {
  rtl?: string
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number
  setNext: () => void
  setPrevious: () => void
  lengthOfEachPage: number
  pageSize: number
}

export default function PaginationButton({
  rtl,
  setCurrentPage,
  currentPage,
  setNext,
  setPrevious,
  lengthOfEachPage,
  pageSize,
}: paginationProps) {
  return (
    <>
      {rtl ? (
        <CustomButtonGroup variant="outlined" disabled={currentPage === 1}>
          {/* <CustomButton
            onClick={() => {
              setCurrentPage(1)
              setPrevious(true, false)
            }}
          >
            <FontStyling> FIRST </FontStyling>{' '}
          </CustomButton> */}
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={() => {
              setCurrentPage(currentPage - 1)
              setPrevious()
            }}
          >
            <ArrowBackStyle disabled={currentPage === 1} />
          </CustomArrowButton>
        </CustomButtonGroup>
      ) : (
        <CustomButtonGroup
          variant="outlined"
          disabled={pageSize > lengthOfEachPage}
        >
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={() => {
              setCurrentPage(currentPage + 1)
              setNext()
            }}
          >
            <ArrowForwardStyle disabled={pageSize > lengthOfEachPage} />
          </CustomArrowButton>
          {/* <CustomButton>
            <FontStyling> LAST </FontStyling>{' '}
          </CustomButton> */}
        </CustomButtonGroup>
      )}
    </>
  )
}
