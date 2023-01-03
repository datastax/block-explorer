import { Box, styled } from '@mui/material';
import colors from '@styles/ThemeProvider/colors';

const MainHeading = styled(Box)({
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '38px',
  color: colors.neutral100,
});
const SubHeading = styled('span')({
  fontWeight: '600',
  fontSize: '28px',
  lineHeight: '38px',
  color: colors.neutral300,
});
const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '40px 0px 25px',
});
const PaginationContainer = styled('span')({
  marginLeft: '15px',
});

export { MainHeading, Container, SubHeading, PaginationContainer };
