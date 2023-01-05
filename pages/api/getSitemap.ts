import { NextApiRequest, NextApiResponse } from 'next';
import { generateBlockNumberRoutes } from 'utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { startingBlock, latestBlockNumber } = req?.body;
  const endingBlock = Number(startingBlock) + 50000;
  const data = generateBlockNumberRoutes(
    startingBlock,
    endingBlock,
    latestBlockNumber
  );
  res.json({ data });
}

export const config = {
  api: {
    responseLimit: '20mb',
  },
};
