import {
  Box,
  ListItem,
  TableContainer,
  Divider,
  ListItemText,
  ListItemIcon,
  List,
} from '@mui/material';
import { styled } from '@mui/system';
import colors from '@styles/ThemeProvider/colors';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { GasProgressProps } from 'types';
import theme from '@styles/ThemeProvider/theme';
const DetailsTableContainer = styled(Box)({
  color: 'white',
  maxWidth: '1352px',
  marginBottom: '30px',
  background: colors.surfaceCard,
});
const CustomTableContainer = styled(TableContainer)({
  border: `1px solid ${colors.borderPrimary}`,
  borderRadius: '6px',
  textDecoration: 'none',
  background: colors.surfaceCard,
  padding: '32px',
});
const CustomListItem = styled(ListItem)({
  paddingBottom: '15px',
  paddingTop: '15px',
  [theme.breakpoints.down('smA')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
});
const CustomDivider = styled(Divider)({
  background: colors.neutral500,
  width: '100%',
});
const CustomListItemText = styled(ListItemText)({
  width: '15%',
  marginRight: '10%',
  [theme.breakpoints.down('smA')]: {
    width: '100%',
  },
});
const CustomListIcon = styled(ListItemIcon)({
  minWidth: 'fit-content',
  marginRight: '6.67px',
});
const GasLimitStyle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '55%',
  [theme.breakpoints.down('xmdB')]: {
    width: '65%',
  },
  [theme.breakpoints.down('xmdA')]: {
    width: '75%',
  },
  [theme.breakpoints.down('mdA')]: {
    width: '85%',
  },
  [theme.breakpoints.down('xmd')]: {
    width: '100%',
  },
});
const TransactionStyle = styled('div')({
  marginLeft: '10px',
  marginRight: '10px',
});

const SideBox = styled('div')({
  width: '18%',
  display: 'flex',
  marginRight: '10%',
  alignItems: 'center',
  [theme.breakpoints.down('smA')]: {
    width: '100%',
  },
});

const ProgressDetail = styled('span')(({ positive }: GasProgressProps) => ({
  color: positive ? colors.actionPrimary : colors.semanticRed,
}));
const AddressColor = styled('span')({
  color: colors.actionSecondary,
});
const TimeColor = styled('span')({
  color: colors.neutral300,
  marginLeft: '3px',
});
const CustomLink = styled(ListItemText)({
  color: colors.actionPrimary,
  textDecoration: 'underline',
  maxWidth: '100%',
  cursor: 'pointer',
});
const CustomList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
});
const BorderLinearProgress = styled(LinearProgress)(
  ({ positive }: GasProgressProps) => ({
    height: 10,
    borderRadius: 5,
    width: '40%',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: colors.neutral500,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: positive ? colors.actionPrimary : colors.semanticRed,
    },
  })
);

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItems: 'center',
  width: '75%',
  flexWrap: 'wrap',

  wordBreak: 'break-word',
  [theme.breakpoints.down('smA')]: {
    width: '100%',
  },
}));

export {
  DetailsTableContainer,
  CustomTableContainer,
  BorderLinearProgress,
  CustomListItem,
  CustomDivider,
  CustomListItemText,
  CustomListIcon,
  GasLimitStyle,
  ProgressDetail,
  TransactionStyle,
  AddressColor,
  TimeColor,
  CustomLink,
  CustomList,
  Wrapper,
  SideBox,
};
