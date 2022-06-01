import { styled } from '@mui/system'
import { Card, Typography } from '@mui/material'
import colors from 'styles/ThemeProvider/colors'
import theme from '@styles/ThemeProvider/theme'

interface StyledCardProps {
  width: string
}

const StyledCard = styled(Card)((props: StyledCardProps) => ({
  padding: '32px 32px 32px',
  display: 'flex',
  background: colors.surfaceCard,
  border: `1px solid ${colors.nightRider}`,
  borderRadius: '6px',
  width: props.width,
  [theme.breakpoints.down('lg')]: {
    width: 'auto',
    maxWidth: props.width,
  },
}))

const StyledTypograph = styled(Typography)({
  color: colors.neutral100,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  wordWrap:"break-word",
  span: {
    color: colors.semanticRed,
    marginLeft: '8px',
  },
})

export { StyledCard, StyledTypograph }
