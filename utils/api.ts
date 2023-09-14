import { gql } from '@apollo/client';
import axios, { AxiosResponse } from 'axios';
import client from 'lib/graphql/apolloClient';
import { Query } from 'lib/graphql/generated/generate';
import { REST_END_POINTPOINT } from '@constants';
import {
  GET_LATEST_ETH_BLOCK,
  GET_LATEST_BLOCKS_GROUP,
  GET_TRANSACTIONS_BY_DATE,
} from 'lib/graphql/queries';
import { AxiosApiResponse } from 'types';
import { handleError, timeLapseInSeconds } from 'utils';
import { createJWt } from './jwt';

const GET = async (queryName: string) => {
  try {
    const response = await axios.get<AxiosApiResponse>(`/api/${queryName}`);
    return { data: response.data?.data, error: response.data?.error };
  } catch (error) {
    handleError('GET Request', error as Error);
  }
  return { data: null, error: null };
};

const POST = async (queryName: string, payload: Record<string, unknown>) => {
  try {
    const response = await axios.post<AxiosApiResponse>(`/api/${queryName}`, {
      ...payload,
    });
    return { data: response.data?.data, error: response.data?.error };
  } catch (error) {
    handleError('Post Request', error as Error);
  }
  return { data: null, error: null };
};

const getNextBlockHash = async (
  latestBlockGroup: number,
  currentBlockNumber: number
) => {
  const { data: NextBlock, error } = await POST('getNextBlock', {
    blockGroup: Number(latestBlockGroup),
    blockNumber: Number(currentBlockNumber),
  });
  if (error) {
    handleError('getNextBlock', error);
  }
  if (NextBlock?.eth_blocks?.values?.[0]?.hash)
    return NextBlock?.eth_blocks?.values?.[0]?.hash;
  else return null;
};

const getPreviousBlockHash = async (
  latestBlockGroup: number,
  currentBlockNumber: number
) => {
  const { data: NextBlock, error } = await POST('getPreviousBlock', {
    blockGroup: Number(latestBlockGroup),
    blockNumber: Number(currentBlockNumber),
  });
  if (error) {
    handleError('getPreviousBlock', error);
  }
  if (NextBlock?.eth_blocks?.values?.[0]?.hash)
    return NextBlock?.eth_blocks?.values?.[0]?.hash;
  else return null;
};

const getTransactions = async (blockHash: string, pageSize: number) => {
  const { data, error } = await POST('getPaginatedTransactions', {
    blockHash,
    limit: pageSize,
  });
  if (error) {
    handleError('getNextBlock', error);
  }
  if (data?.transactions?.values?.length) return data;
  else return null;
};

const getLatestEthBlockNumber = async (blockGroup: number) => {
  const { data: latestBlocksResponse } = await client.query<Query>({
    query: gql`
      ${GET_LATEST_ETH_BLOCK}
    `,
    variables: {
      filter: {
        blocks_group: {
          eq: blockGroup,
        },
      },
      options: {
        pageState: null,
        pageSize: 1,
      },
    },
  });

  const latestBlockNumber =
    latestBlocksResponse?.eth_blocks?.values?.[0]?.number;
  return latestBlockNumber;
};

const getLatestBlockGroup = async () => {
  const { data: latestBlockGroupResponse } = await client.query<Query>({
    query: gql`
      ${GET_LATEST_BLOCKS_GROUP}
    `,
  });

  const blockGroup =
    latestBlockGroupResponse?.dashboard_analytics?.values?.[0]
      ?.latest_blocks_group;
  return blockGroup;
};

const getTransactionsList = async (
  date: string,
  pageSize: number,
  blockNumber?: number
) => {
  const { data: transactionsList, error } = await client.query<Query>({
    query: gql`
      ${GET_TRANSACTIONS_BY_DATE}
    `,
    variables: {
      filter: {
        date: {
          eq: date,
        },
        ...(blockNumber &&
          pageSize !== 1 && {
            block_number: {
              lt: blockNumber,
              gt: blockNumber - 150,
            },
          }),
      },
      options: {
        pageSize,
      },
    },
  });
  if (error) {
    console.log(
      `Error while fetching transactions list where blockNumber: ${blockNumber} `,
      error
    );
  }

  const list = transactionsList?.transactions_by_date?.values;
  return list || [];
};

const TransactionByText = async (text: string) => {
  try {
    const EXPIRY_TIME = 3600;
    const PAYLOAD = { tokenExpiry: timeLapseInSeconds(60) };
    const generatedToken = createJWt(PAYLOAD, EXPIRY_TIME);
    const data = {
      text,
    };

    const config = {
      method: 'post',
      url: `${REST_END_POINTPOINT || ''}/transactions/handle_raw_text`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${generatedToken || ''}`,
      },
      data,
    };

    const response: AxiosResponse = await axios(config);
    return response.data.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export {
  GET,
  POST,
  getTransactions,
  getNextBlockHash,
  getPreviousBlockHash,
  getLatestBlockGroup,
  getLatestEthBlockNumber,
  getTransactionsList,
  TransactionByText,
};
