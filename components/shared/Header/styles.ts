import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box, Theme } from '@mui/material'
const Container = styled(Box)({
  background: colors.neutral900,
  width: '100%',
})

interface WrapperProps {
  height?: string
  padding?: string
  theme: Theme
  flexDirection?: string
}

const Wrapper = styled(Box)(
  ({ height, padding, theme, flexDirection }: WrapperProps) => ({
    height: height,
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    justifyContent: 'space-between',
    padding: padding ? padding : '0px 44px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: flexDirection,
      marginTop: '40px',
    },
  })
)

const StyledLink = styled('a')({
  textDecoration: 'None',
  color: colors.neutral100,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '14px',
})

const SearchBox = styled(Box)((props) => ({
  width: '80%',
  display: 'flex',
  flexDirection: 'row-reverse',
  [props.theme.breakpoints.down('md')]: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}))
const LogoBox = styled(Box)((props) => ({
  width: '20%',
  [props.theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))
const StyledLabel = styled('div')({
  span: {
    color: colors.semanticRed,
  },
  'span:last-child': {
    color: colors.neutral300,
  },
})

export { Container, Wrapper, StyledLink, StyledLabel, SearchBox, LogoBox }
