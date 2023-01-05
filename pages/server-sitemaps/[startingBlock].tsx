import axios from 'axios';
import { NextPageContext } from 'next';
import { AxiosApiResponse } from 'types';
import {
  createSitemap,
  getLatestBlockGroup,
  getLatestEthBlockNumber,
} from 'utils';

export async function getServerSideProps({ res, req, query }: NextPageContext) {
  const { startingBlock } = query;
  const host = req?.headers?.host;
  const isLocalhost = host === 'localhost:3000';
  const latestBlockGroup = await getLatestBlockGroup();
  const latestBlockNumber = await getLatestEthBlockNumber(latestBlockGroup);
  const response = await axios.post<AxiosApiResponse>(
    `${isLocalhost ? 'http' : 'https'}://${host}/api/getSitemap`,
    {
      startingBlock: Number(startingBlock?.slice(0, -4)),
      latestBlockNumber,
    }
  );
  const urlList = response?.data?.data;

  const sitemap = createSitemap(urlList);
  res?.setHeader('Content-Type', 'text/xml');
  res?.write(sitemap);
  res?.end();
  return { props: { results: { urlList } } };
}

export default function ServerSitemap() {
  return null;
}
