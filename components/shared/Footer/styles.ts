import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box, Theme, Typography } from '@mui/material'

interface StyledTypographyProps {
  theme?: Theme
  fontColor: string
}

const MainContiner = styled(Box)({
  background: colors.neutral900,
  width: '100%',
})

const Wrapper = styled(Box)({
  height: '56px',
  maxWidth: '1440px',
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
  padding: '0px 44px',
})

const StyledTypography = styled(Typography)((props: StyledTypographyProps) => ({
  color: props.fontColor,
  fontWeight: 500,
  fontSize: '11px',
  lineHeight: '16px',
  span: {
    color: colors.violet,
  },
}))

export { MainContiner, Wrapper, StyledTypography }
