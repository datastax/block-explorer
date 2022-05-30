import { createTheme } from '@mui/material/styles'
import colors from '@styles/ThemeProvider/colors'

const theme = createTheme({
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
