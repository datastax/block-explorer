import { NextApiRequest, NextApiResponse } from 'next';
import { ISitemapField } from 'next-sitemap';
import { generateBlockNumberRoutes } from 'utils';
import zlib from 'zlib';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { startingBlock, latestBlockNumber } = req?.body;
  const endingBlock = Number(startingBlock) + 30000;
  let data: ISitemapField[] | unknown = generateBlockNumberRoutes(
    startingBlock,
    endingBlock,
    latestBlockNumber
  );

  const bufferObject = Buffer.from(JSON.stringify(data));
  const compressedData = await new Promise((resolve, reject) =>
    zlib.gzip(bufferObject, function (err, zippedData) {
      if (err) {
        console.log('Error while generating gzip: ', err);
        reject(undefined);
      } else {
        resolve(zippedData);
      }
    })
  );
  if (compressedData) data = compressedData;
  res.json({ data });
}
