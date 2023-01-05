import axios from 'axios';
import { NextPageContext } from 'next';
import { AxiosApiResponse } from 'types';
import {
  createSitemap,
  getLatestBlockGroup,
  getLatestEthBlockNumber,
} from 'utils';
import zlib from 'zlib';

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
  let urlList = response?.data?.data;
  let sitemap;
  if (urlList?.type === 'Buffer') {
    const unzippedData = await new Promise<Record<string, unknown>>(
      (resolve, reject) => {
        zlib.unzip(Buffer.from(urlList?.data), function (err, unzipped) {
          const parsedZippedData = JSON.parse(unzipped.toString());
          if (err) {
            reject(undefined);
            console.log('err', err);
          } else {
            const mappedSiteMap = createSitemap(parsedZippedData);
            const decodedUrlList = parsedZippedData;
            resolve({ mappedSiteMap, decodedUrlList });
          }
        });
      }
    );
    if (unzippedData?.mappedSiteMap) sitemap = unzippedData?.mappedSiteMap;
    if (unzippedData?.decodedUrlList) urlList = unzippedData?.decodedUrlList;
  } else {
    sitemap = createSitemap(urlList);
  }

  res?.setHeader('Content-Type', 'text/xml');
  res?.write(sitemap);
  res?.end();
  return { props: { results: { urlList } } };
}

export default function ServerSitemap() {
  return null;
}
