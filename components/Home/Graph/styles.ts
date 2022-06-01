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
})
export { StyledTypograph, Container }
