import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@styles/ThemeProvider/theme'
import Layout from '@components/Layout'
import { ApolloProvider } from '@apollo/client'
import { Client } from '@lib/graphql'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <ApolloProvider client={Client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default App
