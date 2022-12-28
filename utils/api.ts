import axios from 'axios';
import { AxiosApiResponse } from 'types';
import { handleError } from 'utils';

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

export { GET, POST, getTransactions, getNextBlockHash };
