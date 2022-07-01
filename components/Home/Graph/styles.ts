import { styled } from '@mui/system'
import { Card } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import theme from '@styles/ThemeProvider/theme'

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
})

const Container = styled(Card)({
  padding: '32px',
  background: colors.surfaceCard,
  border: `1px solid ${colors.nightRider}`,
  borderRadius: '6px',
  [theme.breakpoints.down('xmdB')]: {
    padding: '32px 10px',
  },
})
export { StyledTypograph, Container }
