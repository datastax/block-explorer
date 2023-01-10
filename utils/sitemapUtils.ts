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

export { generateBlockNumberRoutes, createSitemap };
