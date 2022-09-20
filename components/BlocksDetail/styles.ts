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
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import { GasProgressProps } from 'types'
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
})
const CustomDivider = styled(Divider)({
  background: colors.neutral500,
  width: '100%',
})
const CustomListItemText = styled(ListItemText)({
  maxWidth: '158px',
  marginRight: '150px',
})
const CustomListIcon = styled(ListItemIcon)({
  minWidth: 'fit-content',
  marginRight: '6.67px',
})
const GasLimitStyle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '55%',
})
const TransactionStyle = styled('div')({
  marginLeft: '10px',
  marginRight: '10px',
})
const ProgressDetail = styled('span')(({ positive }: GasProgressProps) => ({
  color: positive ? colors.actionPrimary : colors.semanticRed,
}))
const AddressColor = styled('span')({
  color: colors.actionSecondary,
})
const TimeColor = styled('span')({
  color: colors.neutral300,
  marginLeft: '3px',
})
const CustomLink = styled(ListItemText)({
  color: colors.actionPrimary,
  textDecoration: 'underline',
  maxWidth: '11%',
  cursor: 'pointer',
})
const CustomList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
})
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
)
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
}
