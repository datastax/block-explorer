import React from 'react';
import {
  CustomPagingButton,
  ArrowBackStyle,
  ArrowForwardStyle,
} from './styles';
import { ButtonGroup } from '@mui/material';
interface PaginationProps {
  setPreviousConsecutiveState?: () => void;
  setNextConsecutiveState?: () => void;
}

const PaginationButton = ({
  setPreviousConsecutiveState,
  setNextConsecutiveState,
}: PaginationProps) => {
  return (
    <React.Fragment>
      <ButtonGroup>
        <CustomPagingButton size="small" onClick={setPreviousConsecutiveState}>
          <ArrowBackStyle />
        </CustomPagingButton>
        <CustomPagingButton size="small" onClick={setNextConsecutiveState}>
          <ArrowForwardStyle />
        </CustomPagingButton>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default PaginationButton;
