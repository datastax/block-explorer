import { Box, Chip, TableContainer } from '@mui/material'
import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { ChipProps, CustomTableProps } from '@types'
import { TableCell } from '@mui/material'
const links = ['Block', 'Txn', 'Miner']

const MainContainer = styled(Box)({
  width: '100%',
  paddingLeft: '44px',
  display: 'flex',
  background: colors.surfaceCard,
  flexDirection: 'column',
})
const Container = styled(Box)({
  maxWidth: '1352px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '30px',
})

const MainHeading = styled(Box)({
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '38px',
  color: colors.neutral100,
})
const BlockTableContainer = styled(Box)({
  color: 'white',
  maxWidth: '1352px',
  marginBottom: '30px',
  background: colors.surfaceCard,
})
const CustomChip = styled(Chip)((props: ChipProps) => ({
  backgroundColor: props.bgColor,
  border: props.borderColor,
  color: props.titleColor,
}))

const CustomTableCell = styled(TableCell)((props: CustomTableProps) => ({
  color: links.includes(props.color)
    ? colors.actionSecondary
    : colors.neutral100,
  borderBottom: props.border,
  fontWeight: props.fontWeight,
  fontSize: '14px',
  lineHeight: props.lineHeight,
}))

const Records = styled(Box)({
  padding: '20px',
  paddingLeft: '20px',
})
const CustomTableContainer = styled(TableContainer)({
  border: `1px solid ${colors.borderPrimary}`,
  borderRadius: '6px',
  textDecoration: 'none',
  background: 'linearGradient(180deg, #121212 100%, #1d2025 100%)',
  padding: '32px',
})
const FontStyling = styled(Box)({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
})
export {
  MainContainer,
  Container,
  MainHeading,
  CustomChip,
  BlockTableContainer,
  CustomTableCell,
  Records,
  CustomTableContainer,
  FontStyling,
}
