import { PAGINATION_EVENT } from '@constants';
import * as React from 'react';
import { CustomArrowButton } from '../SplitButton/styles';
import { CustomButtonGroup, ArrowForwardStyle, ArrowBackStyle } from './styles';
export interface paginationProps {
  rtl?: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  lengthOfEachPage: number;
  pageSize: number;
  handlePagination: (event: PAGINATION_EVENT) => void;
}

export default function PaginationButton({
  rtl,
  setCurrentPage,
  currentPage,
  lengthOfEachPage,
  pageSize,
  handlePagination,
}: paginationProps) {
  return (
    <>
      {rtl ? (
        <CustomButtonGroup variant="outlined" disabled={currentPage === 1}>
          <CustomArrowButton
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={() => {
              setCurrentPage(currentPage - 1);
              handlePagination(PAGINATION_EVENT.PREV);
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
              setCurrentPage(currentPage + 1);
              handlePagination(PAGINATION_EVENT.NEXT);
            }}
          >
            <ArrowForwardStyle disabled={pageSize > lengthOfEachPage} />
          </CustomArrowButton>
        </CustomButtonGroup>
      )}
    </>
  );
}
