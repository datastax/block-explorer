import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@styles/ThemeProvider/theme'
import Layout from '@components/Layout'
import { ApolloProvider } from '@apollo/client'
import { Client } from '@lib/graphql'
import '@styles/globals.css'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={Client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
