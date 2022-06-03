import { styled } from '@mui/system'
import { Card, Typography } from '@mui/material'
import colors from 'styles/ThemeProvider/colors'

const StyledCard = styled(Card)(() => ({
  padding: '32px 20px 32px',
  margin: '0px 10px 24px 10px',
  display: 'flex',
  background: colors.surfaceCard,
  border: `1px solid ${colors.nightRider}`,
  borderRadius: '6px',
  width: '95%',
  '@media (max-width: 1440px)': {
    padding: '32px 10px',
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
  '@media (max-width: 1360px)': {
    fontSize: '14px',
    lineHeight: '18px',
  },
})

export { StyledCard, StyledTypograph }
