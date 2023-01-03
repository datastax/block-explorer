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
        <title>Astra Ethereum Explorer</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Astra Ethereum Explorer" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="" />
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
