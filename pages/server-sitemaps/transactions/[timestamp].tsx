/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPageContext } from 'next';
import {
  createSitemap,
  generateTransactionsHashRoutes,
  getTransactionsList,
} from 'utils';

export async function getServerSideProps({ res, query }: NextPageContext) {
  const { timestamp } = query;
  const queryDetails = String(timestamp)?.split('*');

  const transactions = await getTransactionsList(
    queryDetails[0],
    30000,
    queryDetails[1] ? Number(queryDetails[1]) : undefined
  );
  const urlsList = generateTransactionsHashRoutes(transactions as any);
  const sitemap = createSitemap(urlsList);
  res?.setHeader('Content-Type', 'text/xml');
  res?.write(sitemap);
  res?.end();
  return { props: { results: { urlsList } } };
}

export default function ServerSitemap() {
  return null;
}
