import { styled } from '@mui/system';
import { Box, Stack } from '@mui/material';
import theme from '@styles/ThemeProvider/theme';

const Container = styled(Box)({
  display: 'flex',
  [theme.breakpoints.down('xmd')]: {
    flexDirection: 'column',
  },
  padding: '56px 0px',
  width: '100%',
  justifyContent: 'space-between',
});

const PriceStack = styled(Stack)({
  width: '320px',
  margin: 0,
  padding: 0,

  [theme.breakpoints.down('xxmdB')]: {
    width: '300px',
  },
  [theme.breakpoints.down('xmdB')]: {
    width: '275px',
  },
  [theme.breakpoints.down('xmdA')]: {
    width: '250px',
  },
  [theme.breakpoints.down('mdA')]: {
    width: '235px',
  },
  [theme.breakpoints.down('xmd')]: {
    width: '48.5%',
  },
  [theme.breakpoints.down('smA')]: {
    width: '45.5%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '40%',
  },
  [theme.breakpoints.down('xsB')]: {
    width: '100%',
  },
});
const TransactionStack = styled(Stack)({
  width: '434px',
  [theme.breakpoints.down('xxmdB')]: {
    width: '425px',
  },
  [theme.breakpoints.down('xmdB')]: {
    width: '400px',
  },
  [theme.breakpoints.down('mdB')]: {
    width: '360px',
  },
  [theme.breakpoints.down('xmdA')]: {
    width: '350px',
  },
  [theme.breakpoints.down('mdA')]: {
    width: '330px',
  },
  [theme.breakpoints.down('xmd')]: {
    width: '310px',
  },
  [theme.breakpoints.down('xmd')]: {
    width: '48.5%',
  },
  [theme.breakpoints.down('smA')]: {
    width: '310px',
  },
  [theme.breakpoints.down('xsB')]: {
    width: '100%',
  },
});

const CardsBox = styled(Box)({
  width: '57.55%',
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('xmd')]: {
    width: '100%',
  },
  [theme.breakpoints.down('xsB')]: {
    flexDirection: 'column',
  },
  justifyContent: 'space-between',
});

const GraphBox = styled(Box)({
  margin: 0,
  width: '40.6%',
  [theme.breakpoints.down('xmd')]: {
    width: '100%',
  },
});

const SkeletonWrapper = styled(Box)({
  width: '100%',
});
export {
  Container,
  PriceStack,
  TransactionStack,
  CardsBox,
  GraphBox,
  SkeletonWrapper,
};
