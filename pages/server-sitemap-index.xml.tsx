import { getServerSideSitemapIndex } from 'next-sitemap';
import { GetServerSidePropsContext } from 'next';
import { SITEMAP_SIZE, SITE_URL } from '@constants';
import { getLatestBlockGroup, getLatestEthBlockNumber } from 'utils';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const blockGroup = await getLatestBlockGroup();
  const latestBlockNumber = await getLatestEthBlockNumber(blockGroup);

  const urlsList = [];
  for (let index = 1; index <= latestBlockNumber; index += SITEMAP_SIZE) {
    urlsList.push(`${SITE_URL}/server-sitemaps/${index}.xml`);
  }

  return getServerSideSitemapIndex(context, urlsList);
}

export default function SitemapIndex() {
  return null;
}
