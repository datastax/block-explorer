import { Chip, styled } from '@mui/material';
import { ChipProps } from 'types';

const CustomChip = styled(Chip)(
  ({ bgcolor, border, titlecolor, icon, cursor }: ChipProps) => ({
    backgroundColor: bgcolor,
    border: border,
    color: titlecolor,
    paddingLeft: icon && '10px',
    '& .css-6od3lo-MuiChip-label': {
      paddingLeft: icon && '5px',
    },
    cursor: cursor,
  })
);

export { CustomChip };
