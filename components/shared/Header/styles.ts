import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box, Theme } from '@mui/material'

const Container = styled(Box)({
  background: colors.neutral900,
  width: '100%',
})

interface WrapperProps {
  theme?: Theme
  height?: string
  padding?: string
}

const Wrapper = styled(Box)(({ height, padding }: WrapperProps) => ({
  height: height,
  maxWidth: '1440px',
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
  justifyContent: 'space-between',
  padding: padding ? padding : '0px 44px',
}))

const StyledLink = styled('a')({
  textDecoration: 'None',
  color: colors.neutral100,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '14px',
})

const StyledLabel = styled('div')({
  span: {
    color: colors.semanticRed,
  },
  'span:last-child': {
    color: colors.neutral300,
  },
})

export { Container, Wrapper, StyledLink, StyledLabel }
