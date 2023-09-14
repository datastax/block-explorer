/* eslint-disable @typescript-eslint/no-explicit-any */
import Hero from '@components/shared/Hero';
import TransactionsTableV2 from '@components/Transactions/TableV2';
import { transactionTitles } from '@constants';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TransactionByText } from 'utils';

const Transactions: NextPage = () => {
  const router = useRouter();
  const { search } = router.query;
  const searchValue = Array.isArray(search) ? search[0] : search || '';
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const fetchData = async (value: string) => {
    try {
      setLoading(true);
      const res = await TransactionByText(value);
      setData(res);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  return (
    <>
      <Hero title="Transactions" />
      <TransactionsTableV2
        titles={transactionTitles}
        transactions={{ transactions: { values: data } }}
        loading={loading || !data?.length}
      />
    </>
  );
};

export default Transactions;
