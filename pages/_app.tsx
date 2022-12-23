import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@styles/ThemeProvider/theme';
import Layout from '@components/Layout';
import { ApolloProvider } from '@apollo/client';
import Script from 'next/script';
import { Client } from '@lib/graphql';
import '@styles/globals.css';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-499BQYHEGS"
        strategy="afterInteractive"
      />
      <ApolloProvider client={Client}>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-499BQYHEGS');
        `}
        </Script>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
