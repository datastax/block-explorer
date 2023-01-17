import { NextApiRequest, NextApiResponse } from 'next';
import { generateTransactionsHashRoutes, getTransactionsList } from 'utils';
import Compression from 'compression';

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
  const { date, size, blockNumber } = req?.body;
  const transactions = await getTransactionsList(date, size, blockNumber);
  const data = generateTransactionsHashRoutes(
    transactions as Array<{ hash: string; block_number: string }>
  );

  await runMiddleware(req, res, compression);
  res.json({ data });
}
