/* eslint-disable @typescript-eslint/no-empty-function */
import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: 'https://eth-explorer.datastax.com/block',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://eth-explorer.datastax.com/transaction',
      lastmod: new Date().toISOString(),
    },
  ]

  return getServerSideSitemap(ctx, fields)
}

export default function SitemapIndex() {}
