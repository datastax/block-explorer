import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box, Link as MuiLink } from '@mui/material'

const Container = styled(Box)({
  background: colors.neutral900,
  width: '100%',
})

const Wrapper = styled(Box)({
  height: '72px',
  maxWidth: '1440px',
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
  justifyContent: 'space-between',
  padding: '0px 44px',
})

const Link = styled(MuiLink)({
  textDecoration: 'None',
  color: colors.neutral100,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '14px',
})

export { Container, Wrapper, Link }
