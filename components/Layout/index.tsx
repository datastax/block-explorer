import Head from 'next/head';
import React from 'react';
import Footer from '@components/shared/Footer';
import Header from '@components/shared/Header';
import { MainContainer, Wrapper } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Astra Block Explorer | View Realtime Ethereum Data</title>
        <meta name="description" content="Explore Real-Time Blockchain Data with the Astra Block Explorer" />
        <meta property="og:title" content="Astra Block Explorer" />
        <meta property="og:description" content="Explore Real-Time Blockchain Data with the Astra Block Explorer" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Astra Block Explorer"/>
        <meta name="twitter:site" content="@AstraBlock" />
        <meta name="twitter:description" content="Explore Real-Time Blockchain Data with the Astra Block Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContainer>
        <Wrapper>{children}</Wrapper>
      </MainContainer>
      <Footer />
    </>
  );
};
export default Layout;
