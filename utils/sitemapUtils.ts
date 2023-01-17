import { SITE_URL } from '@constants';
import { ISitemapField } from 'next-sitemap';

const generateBlockNumberRoutes = (
  start: number,
  stop: number,
  latestBlockNumber: number
) => {
  const BlockNumberRoutes = [];

  const threshold = stop < latestBlockNumber ? stop : latestBlockNumber;
  let index = start;
  while (index < threshold) {
    BlockNumberRoutes.push({
      loc: `${SITE_URL}/block/${index}`,
      lastmod: new Date().toISOString(),
    });
    index++;
  }
  return BlockNumberRoutes;
};

const toUrl = (route: ISitemapField) =>
  `<url><loc>${route.loc}</loc><lastmod>${route.lastmod}</lastmod></url>`;

const createSitemap = (urlList: ISitemapField[]) =>
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlList.map((url) => toUrl(url)).join('')}
    </urlset>`;

const generateTransactionsHashRoutes = (
  transactionsList: Array<{ hash: string; block_number: string }>
) => {
  const transactionsHashRoutes: ISitemapField[] = [];
  transactionsList.map((transaction) => {
    transactionsHashRoutes.push({
      loc: `${SITE_URL}/transaction/${transaction?.hash}`,
      lastmod: new Date().toISOString(),
    });
  });
  return transactionsHashRoutes;
};

export {
  generateBlockNumberRoutes,
  createSitemap,
  generateTransactionsHashRoutes,
};
