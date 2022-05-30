import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@styles/ThemeProvider/theme'
import Layout from '@components/Layout'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
