import { NextPageContext } from 'next';
import { ISitemapField } from 'next-sitemap';
import {
  createSitemap,
  generateBlockNumberRoutes,
  getLatestBlockGroup,
  getLatestEthBlockNumber,
} from 'utils';

export async function getServerSideProps({ res, query }: NextPageContext) {
  const { startingBlock } = query;
  const latestBlockGroup = await getLatestBlockGroup();
  const latestBlockNumber = await getLatestEthBlockNumber(latestBlockGroup);
  const endingBlock = Number(startingBlock) + 30000;
  const urlList: ISitemapField[] = generateBlockNumberRoutes(
    Number(startingBlock?.slice(0, -4)),
    endingBlock,
    latestBlockNumber
  );
  const sitemap = createSitemap(urlList);
  res?.setHeader('Content-Type', 'text/xml');
  res?.write(sitemap);
  res?.end();
  return { props: { results: { urlList } } };
}

export default function ServerSitemap() {
  return null;
}
