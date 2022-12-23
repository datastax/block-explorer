import type { NextPage } from 'next';
import Hero from '@components/shared/Hero';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InternalTransactionTable from '@components/InternalTransactions';
import { InternalTransactionTitle } from 'constants/stubs';
import { InternalTransactionData } from 'types';
import { useGetInternalTransactionByEthBlockNumberLazyQuery } from 'lib/graphql/generated/generate';
import { mapRawDataToIntTransactions } from 'utils';
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
  const [pageStateArray, setPageStateArray] = useState<string[]>(['']);

  const [
    getInternalTransactions,
    {
      data: internalTransactions,
      error: internalTransactionsError,
      loading: loadingTransctions,
    },
  ] = useGetInternalTransactionByEthBlockNumberLazyQuery();

  const handlePagination = (paginationEvent: PAGINATION_EVENT) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT)
      getInternalTransactions({
        variables: {
          filter: {
            block_number: { eq: blockNumber },
          },
          options: {
            pageState: pageStateArray[pageStateArray.length - 1],
            pageSize: pageSize,
          },
        },
        onError: () => {
          setPageStateArray(['']);
        },
      });

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      getInternalTransactions({
        variables: {
          filter: {
            block_number: { eq: blockNumber },
          },
          options: {
            pageState: pageStateArray[pageStateArray.length - 3] || null,
            pageSize: pageSize,
          },
        },
        onError: () => {
          setPageStateArray(['']);
        },
      });
      setPageStateArray((prev) => prev.slice(0, -2));
    }
  };

  if (internalTransactionsError) {
    console.error(internalTransactionsError);
  }

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
    getInternalTransactions({
      variables: {
        filter: {
          block_number: { eq: blockNumber },
        },
        options: {
          pageState: null,
          pageSize: pageSize,
        },
      },
      onError: () => {
        setPageNumber(1);
      },
    });
  }, [blockNumber, getInternalTransactions, pageSize]);

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
        loading={loadingTransctions}
        blockNumber={Number(blockNumber)}
        totalInternalTransactions={Number(totalInternalTransactions || '100')}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default InternalTransaction;
