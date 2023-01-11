import axios from 'axios';
import { SITEMAP_SIZE } from '@constants';
import { NextPageContext } from 'next';
import { AxiosApiResponse } from 'types';
import { createSitemap } from 'utils';

export async function getServerSideProps({ res, req, query }: NextPageContext) {
  const { timestamp } = query;
  const host = req?.headers?.host;
  const queryDetails = String(timestamp)?.split('*');
  const isLocalhost = host === 'localhost:3000';

  const response = await axios.post<AxiosApiResponse>(
    `${isLocalhost ? 'http' : 'https'}://${host}/api/getTransactionsSitemap`,
    {
      date: queryDetails?.[0],
      size: SITEMAP_SIZE,
      blockNumber: queryDetails?.[1]
        ? Number(queryDetails?.[1]?.slice(0, -4))
        : undefined,
    }
  );

  const urlsList = response?.data?.data;
  const sitemap = createSitemap(urlsList);
  res?.setHeader('Content-Type', 'text/xml');
  res?.write(sitemap);
  res?.end();
  return { props: { results: { urlsList } } };
}

export default function ServerSitemap() {
  return null;
}
