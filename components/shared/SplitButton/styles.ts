import { styled } from '@mui/system';
import colors from '@styles/ThemeProvider/colors';
import { Button } from '@mui/material';

export const CustomArrowButton = styled(Button)({
  background: colors.nordic,
  '&:disabled': {
    color: colors.neutral300,
    border: `1px solid ${colors.neutral300}`,
    background: 'none',
  },
});
