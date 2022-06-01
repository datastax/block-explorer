import { createTheme } from '@mui/material/styles'
import colors from '@styles/ThemeProvider/colors'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      main: colors.actionPrimary,
    },
    secondary: {
      main: colors.actionSecondary,
    },
    error: {
      main: colors.semanticRed,
    },
  },
})
export default theme
