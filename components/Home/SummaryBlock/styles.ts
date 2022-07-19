import { styled } from '@mui/system'
import { Card, Typography } from '@mui/material'
import colors from 'styles/ThemeProvider/colors'
import theme from '@styles/ThemeProvider/theme'

const StyledCard = styled(Card)(() => ({
  padding: '32px 0px 32px 32px',
  margin: '0px 0px 24px 0px',
  display: 'flex',
  background: colors.surfaceCard,
  border: `1px solid ${colors.nightRider}`,
  borderRadius: '6px',
  width: '100%',
  [theme.breakpoints.down('mdB')]: {
    padding: '32px 0px 32px 10px',
  },
}))

const StyledTypograph = styled(Typography)({
  color: colors.neutral100,
  fontSize: '16px',
  lineHeight: '24px',
  wordWrap: 'break-word',
  span: {
    color: colors.semanticRed,
    marginLeft: '8px',
  },
  [theme.breakpoints.down('mdB')]: {
    fontSize: '14px',
  },
})

export { StyledCard, StyledTypograph }
