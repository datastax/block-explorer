import type { NextPage } from 'next';
import Hero from '@components/shared/Hero';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InternalTransactionTable from '@components/InternalTransactions';
import { InternalTransactionTitle } from 'constants/stubs';
import { InternalTransactionData } from 'types';
import { GetInternalTransactionByEthBlockNumberQuery } from 'lib/graphql/generated/generate';
import { handleError, mapRawDataToIntTransactions, POST } from 'utils';
import { PAGINATION_EVENT } from '@constants';

const InternalTransaction: NextPage = () => {
  const router = useRouter();
  const blockNumber = router.query['blockNumber'] as string;
  const totalInternalTransactions = router.query[
    'totalInternalTransactions'
  ] as string;
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [internalTransactionsData, setInternalTransactionsData] = useState<
    InternalTransactionData[]
  >([]);
  const [loadingTransactions, setloadingTransactions] = useState<boolean>(true);
  const [pageStateArray, setPageStateArray] = useState<string[]>(['']);
  const [internalTransactions, setinternalTransactions] =
    useState<GetInternalTransactionByEthBlockNumberQuery>();

  const handlePagination = async (paginationEvent: PAGINATION_EVENT) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT) {
      setloadingTransactions(true);

      const { data, error } = await POST('getInternalTransactionsByBlock', {
        blockNumber: blockNumber,
        pageState: pageStateArray[pageStateArray.length - 1],
        pageSize,
      });
      setinternalTransactions(data);
      setloadingTransactions(false);
      if (error) {
        handleError('getInternalTransactionsByBlock', error);
        setPageStateArray(['']);
      }
    }

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      setloadingTransactions(true);
      const { data, error } = await POST('getInternalTransactionsByBlock', {
        blockNumber: blockNumber,
        pageState: pageStateArray[pageStateArray.length - 3] || null,
        pageSize,
      });
      setinternalTransactions(data);
      setloadingTransactions(false);
      setPageStateArray((prev) => prev.slice(0, -2));
      if (error) {
        handleError('getInternalTransactionsByBlock', error);
        setPageStateArray(['']);
      }
    }
  };

  useEffect(() => {
    if (internalTransactions)
      setInternalTransactionsData(
        mapRawDataToIntTransactions(internalTransactions)
      );
    if (internalTransactions?.traces?.pageState) {
      setPageStateArray((prevState) => [
        ...prevState,
        String(internalTransactions?.traces?.pageState),
      ]);
    }
  }, [internalTransactions]);

  useEffect(() => {
    (async () => {
      setloadingTransactions(true);
      const { data, error } = await POST('getInternalTransactionsByBlock', {
        blockNumber: blockNumber,
        pageState: null,
        pageSize,
      });
      setloadingTransactions(false);
      if (data) setinternalTransactions(data);
      if (error) {
        handleError('getInternalTransactionsByBlock', error);
        setPageNumber(1);
      }
    })();
  }, [blockNumber, pageSize]);

  useEffect(() => {
    setPageStateArray(['']);
  }, [pageSize]);

  return (
    <>
      <Hero title="Internal transactions" />
      <InternalTransactionTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        Data={internalTransactionsData}
        titles={InternalTransactionTitle}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        loading={loadingTransactions}
        blockNumber={Number(blockNumber)}
        totalInternalTransactions={Number(totalInternalTransactions || '100')}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default InternalTransaction;
