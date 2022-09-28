import {
  Box,
  ListItem,
  TableContainer,
  Divider,
  ListItemText,
  ListItemIcon,
  List,
} from '@mui/material'
import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import theme from '@styles/ThemeProvider/theme'
const DetailsTableContainer = styled(Box)({
  color: 'white',
  maxWidth: '1352px',
  marginBottom: '30px',
  background: colors.surfaceCard,
})
const CustomTableContainer = styled(TableContainer)({
  border: `1px solid ${colors.borderPrimary}`,
  borderRadius: '6px',
  textDecoration: 'none',
  background: colors.surfaceCard,
  padding: '32px',
})
const CustomListItem = styled(ListItem)({
  paddingBottom: '15px',
  paddingTop: '15px',
  [theme.breakpoints.down('smA')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
})
const CustomDivider = styled(Divider)({
  background: colors.neutral500,
  width: '100%',
})
const CustomListItemText = styled(ListItemText)({
  width: '15%',
  marginRight: '10%',
  [theme.breakpoints.down('smA')]: {
    width: '100%',
  },
})
const CustomListIcon = styled(ListItemIcon)({
  minWidth: 'fit-content',
  marginRight: '6.67px',
})
const TextStyle = styled('div')({
  color: colors.actionSecondary,
})

const CustomLink = styled(ListItemText)({
  color: colors.actionPrimary,
  textDecoration: 'underline',
  maxWidth: '100%',
  cursor: 'pointer',
})
const CustomList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
})
const Wrapper = styled('div')({
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
})
const RightSpacing = styled('div')({
  marginRight: '10px',
})
const RightLogoSpacing = styled('div')({
  marginRight: '4px',
})
const TransactionMainBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '460px',
  [theme.breakpoints.down(820)]: {
    minWidth: '100%',
  },
})
const TransactionInnerBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down(660)]: {
    flexDirection: 'column',
    width: '190px',
  },
})
const LoggedIn = styled('span')({
  color: colors.actionSecondary,
})

const InputBox = styled('div')({
  border: `1px solid ${colors.neutral500}`,
  borderRadius: '5px',
  padding: '10px',
  wordBreak: 'break-word',
  width: '40vw',
  color: colors.neutral300,
})

const SideBox = styled('div')({
  width: '18%',
  display: 'flex',
  marginRight: '10%',
  alignItems: 'center',
  [theme.breakpoints.down('smA')]: {
    width: '100%',
  },
})

export {
  CustomListItem,
  CustomListIcon,
  CustomListItemText,
  CustomDivider,
  TextStyle,
  Wrapper,
  RightSpacing,
  DetailsTableContainer,
  CustomTableContainer,
  CustomList,
  CustomLink,
  LoggedIn,
  RightLogoSpacing,
  InputBox,
  TransactionMainBox as TransactionMainBox,
  TransactionInnerBox as TransactionInnerBox,
  SideBox,
}
