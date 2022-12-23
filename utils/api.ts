import axios from 'axios';
import { BASE_URL } from '@constants';
import { AxiosApiResponse } from 'types';
import { handleError } from 'utils';

const GET = async (queryName: string) => {
  try {
    const response = await axios.get<AxiosApiResponse>(
      `${BASE_URL}/api/${queryName}`
    );
    return { data: response.data?.data, error: response.data?.error };
  } catch (error) {
    handleError('GET Request', error as Error);
  }
  return { data: null, error: null };
};

const POST = async (queryName: string, payload: Record<string, unknown>) => {
  try {
    const response = await axios.post<AxiosApiResponse>(
      `${BASE_URL}/api/${queryName}`,
      { ...payload }
    );
    return { data: response.data?.data, error: response.data?.error };
  } catch (error) {
    handleError('Post Request', error as Error);
  }
  return { data: null, error: null };
};

export { GET, POST };