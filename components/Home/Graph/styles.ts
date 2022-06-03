import { styled } from '@mui/system'
import { Card, Typography } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'

const StyledTypograph = styled(Typography)({
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '28.13px',
  color: colors.neutral100,
  span: {
    color: colors.nightRider,
    marginLeft: '8px',
    fontSize: '16px',
    lineHeight: '18.75px',
    marginRight: '84px',
  },
})

const Container = styled(Card)({
  padding: '32px',
  marginLeft: '24px',
  background: colors.surfaceCard,
  border: `1px solid ${colors.nightRider}`,
  borderRadius: '6px',
  '@media (max-width: 1360px)': {
    width: '50%',
    margin: '0 auto 0 auto',
  },
})
export { StyledTypograph, Container }
