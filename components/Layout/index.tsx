import Head from 'next/head'
import React from 'react'
import Footer from '@components/shared/Footer'
import Header from '@components/shared/Header'
import { MainContainer, Wrapper } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Krypton</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Krypton" />
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
  )
}
export default Layout
