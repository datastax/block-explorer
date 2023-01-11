import { getServerSideSitemapIndex } from 'next-sitemap';
import { GetServerSidePropsContext } from 'next';
import { SITEMAP_SIZE, SITE_URL } from '@constants';
import { getTransactionsList } from 'utils';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const DATE = '2023-01-09';
  const urlsList: string[] = [
    `${SITE_URL}/server-sitemaps/transactions/${DATE}*0.xml`,
  ];
  let lastBlockNumber: number;

  let transactionsList = await getTransactionsList(DATE, SITEMAP_SIZE);

  lastBlockNumber =
    transactionsList[transactionsList?.length - 1]?.block_number;

  while (transactionsList?.length === SITEMAP_SIZE) {
    const newTransactionsList = await getTransactionsList(
      DATE,
      SITEMAP_SIZE,
      lastBlockNumber
    );
    lastBlockNumber =
      newTransactionsList[newTransactionsList?.length - 1]?.block_number;
    const url = `${SITE_URL}/server-sitemaps/transactions/${DATE}*${lastBlockNumber}.xml`;
    transactionsList = newTransactionsList;
    urlsList.push(url);
  }

  return getServerSideSitemapIndex(context, urlsList);
}

export default function SitemapIndex() {
  return null;
}
