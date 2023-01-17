import { NextApiRequest, NextApiResponse } from 'next';
import { ISitemapField } from 'next-sitemap';
import { generateBlockNumberRoutes } from 'utils';
import Compression from 'compression';
import { SITEMAP_SIZE } from '@constants';

const compression = Compression({
  threshold: 0,
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn: Function
) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { startingBlock, latestBlockNumber } = req?.body;
  const endingBlock = Number(startingBlock) + SITEMAP_SIZE;
  const data: ISitemapField[] = generateBlockNumberRoutes(
    startingBlock,
    endingBlock,
    latestBlockNumber
  );

  await runMiddleware(req, res, compression);
  res.json({ data });
}
