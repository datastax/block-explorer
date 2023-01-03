import { styled } from '@mui/system';
import { Box } from '@mui/material';
import theme from '@styles/ThemeProvider/theme';

const Container = styled(Box)({
  width: '50%',
  [theme.breakpoints.down('xmd')]: {
    width: '100%',
  },
  [theme.breakpoints.down('xsA')]: {
    width: '470px',
  },
});

export { Container };
