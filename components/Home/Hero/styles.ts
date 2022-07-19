import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box, Typography } from '@mui/material'
import theme from '@styles/ThemeProvider/theme'

const TitleText = styled(Typography)({
  fontWeight: 600,
  fontSize: '56px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '52px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
  },
  [theme.breakpoints.down('smA')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
  lineHeight: '65.53px',
  color: colors.neutral100,
})

const SearchContainer = styled(Box)({
  display: 'flex',
  marginTop: '32px',
})

export { TitleText, SearchContainer }
