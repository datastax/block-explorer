import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box, Button, Card, TableCell } from '@mui/material'
import { CustomTableProps } from 'types'
import theme from '@styles/ThemeProvider/theme'

interface columnBoxProps {
  flexValue: string
}

const StyledCard = styled(Card)({
  padding: '32px',
  background: colors.surfaceCard,
  border: `1px solid ${colors.nightRider}`,
  borderRadius: '6px',
  width: '50%',
  [theme.breakpoints.down('lg')]: {
    padding: '15px',
    
  },
})

const CustomTableCell = styled(TableCell)((props: CustomTableProps) => ({
  color: props.color,
  borderBottom: props.border,
  fontWeight: props.fontWeight,
  fontSize: '16px',
  lineHeight: props.lineheight,
  text: {
    color: colors.neutral100,
    fontSize: '12px',
    lineHeight: '14.4px',
  },
  span: {
    color: colors.neutral100,
  },
}))

const ColumnBox = styled(Box)((props: columnBoxProps) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: props.flexValue,
  minWidth: '33%',
  [theme.breakpoints.down('lg')]: {
    minWidth: 'auto',
  },
}))

const StyledButton = styled(Button)({
  width: '100%',
  background: colors.actionSecondary,
  borderRadius: '4px',
  color: colors.neutral900,
  boxShadow: colors.buttonShaddow,
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
  '&:hover': {
    backgroundColor: colors.actionSecondaryHover,
  },
})

const ChipWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
})

export { StyledCard, CustomTableCell, ColumnBox, StyledButton, ChipWrapper }