import { createTheme, Theme } from '@mui/material/styles'
import colors from '@styles/ThemeProvider/colors'

declare module '@mui/material/styles' {
  type DefaultTheme = Theme
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    xsA: true
    xsB: true
    sm: true
    smA : true
    md: true
    xmd: true
    mdA: true
    xmdA: true
    mdB: true
    xmdB: true
    xxmdB: true
    lg: true
    xl: true
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xsA: 460,
      xsB : 550,
      sm: 600,
      smA : 680,
      md: 900,
      xmd: 1000,
      mdA: 1100,
      xmdA: 1160,
      mdB: 1200,
      xmdB: 1340,
      xxmdB : 1380,
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
