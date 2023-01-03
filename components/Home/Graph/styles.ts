import { styled } from '@mui/system';
import { Box, Card } from '@mui/material';
import colors from '@styles/ThemeProvider/colors';
import theme from '@styles/ThemeProvider/theme';

const StyledTypograph = styled('div')({
  fontWeight: 500,
  fontSize: '24px',
  [theme.breakpoints.down('mdB')]: {
    fontSize: '20px',
  },
  lineHeight: '28.13px',
  color: colors.neutral100,
  display: 'flex',
  justifyContent: 'space-between',
  span: {
    color: colors.nightRider,
    marginLeft: '8px',
    fontSize: '16px',
    [theme.breakpoints.down('mdB')]: {
      fontSize: '14px',
    },
    lineHeight: '18.75px',
  },
});

const Container = styled(Card)({
  padding: '32px',
  background: colors.surfaceCard,
  border: `1px solid ${colors.nightRider}`,
  borderRadius: '6px',
  [theme.breakpoints.down('xmdB')]: {
    padding: '32px 10px',
  },
});

const ToolTip = styled(Box)({
  padding: '15px',
  backgroundColor: colors.neutral700,
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: {
    color: colors.actionPrimary,
    margin: 0,
    padding: 0,
  },
  span: {
    color: colors.actionTertiary,
  },
  h6: {
    color: colors.darkTextSecondary,
    margin: 0,
    padding: 0,
  },
});
export { StyledTypograph, Container, ToolTip };
