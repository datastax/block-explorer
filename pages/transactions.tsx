import Hero from '@components/shared/Hero';
import TransactionsTable from '@components/Transactions/Table';
import { PAGINATION_EVENT, transactionTitles } from '@constants';
import { GetPaginatedEThTransactionsQuery } from 'lib/graphql/generated/generate';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TransactionBlockDetail } from 'types';
import {
  handleError,
  combineTransactions,
  GET,
  POST,
  getTransactions,
  getNextBlockHash,
  getPreviousBlockHash,
} from 'utils';

const Transactions: NextPage = () => {
  const router = useRouter();
  const blockHash = router.query['block'] as string;

  const [pageSize, setPageSize] = useState(10);
  const [pageStateArray, setPageStateArray] = useState<string[]>(['']);

  const [latestBlockGroup, setlatestBlockGroup] = useState<number>(0);
  const [currentBlockDetails, setcurrentBlockDetails] =
    useState<TransactionBlockDetail>();
  const [loadingTransactionsByBlock, setLoadingTransactionsByBlock] =
    useState(true);
  const [loadingTransactions, setLoadingTransactions] = useState(true);

  const [transactionsByBlock, setTransactionsByBlock] =
    useState<GetPaginatedEThTransactionsQuery>();
  const [paginatedTransactions, setpaginatedTransactions] =
    useState<GetPaginatedEThTransactionsQuery>();
  const [latestTransactions, setLatestTransactions] =
    useState<GetPaginatedEThTransactionsQuery>();

  useEffect(() => {
    (async () => {
      const { data, error } = await GET('getLatestBlockGroup');
      if (error) {
        handleError('getLatestBlockGroup', error);
      }
      if (data) {
        setlatestBlockGroup(
          data?.dashboard_analytics?.values?.[0]?.latest_blocks_group || 0
        );
        const { data: latestEthBlock, error: latesEthBlockError } = await POST(
          'getLatestEthBlock',
          {
            blockGroup:
              data?.dashboard_analytics?.values?.[0]?.latest_blocks_group,
            pageState: null,
            pageSize: 1,
          }
        );
        if (latesEthBlockError) {
          handleError('latesEthBlockError', latesEthBlockError);
        }
        if (latestEthBlock) {
          setcurrentBlockDetails({
            blockHash: String(latestEthBlock?.eth_blocks?.values?.[0]?.hash),
            blockNumber: latestEthBlock?.eth_blocks?.values?.[0]?.number,
          });
        }
      }
    })();
  }, []);

  const handleBlockTransactionPagination = async (
    paginationEvent: PAGINATION_EVENT
  ) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT) {
      setLoadingTransactionsByBlock(true);
      const { data, error } = await POST('getPaginatedTransactions', {
        blockHash: blockHash,
        pageState: pageStateArray[pageStateArray.length - 1],
        pageSize,
      });
      if (data) setTransactionsByBlock(data);
      setLoadingTransactionsByBlock(false);
      if (error) {
        handleError('getPaginatedTransactions', error);
        setPageStateArray(['']);
      }
    }

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      setLoadingTransactionsByBlock(true);
      const { data, error } = await POST('getPaginatedTransactions', {
        blockHash: blockHash,
        pageState: pageStateArray[pageStateArray.length - 3] || null,
        pageSize,
      });
      if (data) setTransactionsByBlock(data);
      setPageStateArray((prev) => prev.slice(0, -2));
      setLoadingTransactionsByBlock(false);
      if (error) {
        handleError('getPaginatedTransactions', error);
        setPageStateArray(['']);
      }
    }
  };

  const handleTransactionPagination = async (
    paginationEvent: PAGINATION_EVENT
  ) => {
    const currentTransactionsList =
      paginatedTransactions?.transactions?.values || [];
    const currentTransactionsListLength = currentTransactionsList.length || 0;
    if (paginationEvent === PAGINATION_EVENT.NEXT) {
      setLoadingTransactions(true);
      const { data: NextPageTransactions, error } = await POST(
        'getPaginatedTransactions',
        {
          blockHash:
            currentTransactionsList[currentTransactionsListLength - 1]
              ?.block_hash,
          transactionIndexExpression: {
            gt: currentTransactionsList?.[currentTransactionsListLength - 1]
              ?.transaction_index,
          },
          limit: pageSize,
        }
      );

      if (error) {
        handleError('getPaginatedTransactions', error);
        setcurrentBlockDetails(undefined);
      }

      const lengthOfNextPageTransactions =
        NextPageTransactions?.transactions?.values?.length || 0;

      if (NextPageTransactions) setLatestTransactions(NextPageTransactions);

      if (lengthOfNextPageTransactions < pageSize && latestTransactions) {
        const NextBlockHash = await getNextBlockHash(
          latestBlockGroup,
          NextPageTransactions?.transactions?.values?.[
            lengthOfNextPageTransactions - 1
          ]?.block_number || currentBlockDetails?.blockNumber
        );

        if (NextBlockHash) {
          const RemainingNewBlockTransactions = await getTransactions(
            NextBlockHash,
            pageSize - lengthOfNextPageTransactions
          );

          if (RemainingNewBlockTransactions) {
            const CombinedTransactions: GetPaginatedEThTransactionsQuery =
              combineTransactions(
                NextPageTransactions,
                RemainingNewBlockTransactions
              );
            setpaginatedTransactions(CombinedTransactions);
          }
        }
      }
      setLoadingTransactions(false);
    }

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      setLoadingTransactions(true);
      const { data: PreviousPageTransactions, error } = await POST(
        'getPaginatedTransactions',
        {
          blockHash: currentTransactionsList[0]?.block_hash,
          limit: pageSize,
          transactionIndexExpression: {
            lt: currentTransactionsList[0]?.transaction_index,
          },
        }
      );

      if (error) {
        handleError('getPaginatedTransactions', error);
        setcurrentBlockDetails(undefined);
      }

      const lengthOfPreviousPageTransactions =
        PreviousPageTransactions?.transactions?.values?.length || 0;

      if (PreviousPageTransactions)
        setLatestTransactions(PreviousPageTransactions);

      if (
        (lengthOfPreviousPageTransactions < pageSize && latestTransactions) ||
        currentTransactionsList[0]?.transaction_index == 0
      ) {
        const PreviousBlockHash = await getPreviousBlockHash(
          latestBlockGroup,
          PreviousPageTransactions?.transactions?.values?.[
            lengthOfPreviousPageTransactions - 1
          ]?.block_number || currentBlockDetails?.blockNumber
        );

        if (PreviousBlockHash) {
          const { data: RemainingNewBlockTransactions, error } = await POST(
            'getPaginatedTransactions',
            {
              blockHash: PreviousBlockHash,
              limit: pageSize - lengthOfPreviousPageTransactions,
            }
          );

          if (error) {
            handleError('getPaginatedTransactions', error);
            setcurrentBlockDetails(undefined);
          }

          if (RemainingNewBlockTransactions) {
            const combinedTransactions: GetPaginatedEThTransactionsQuery =
              combineTransactions(
                RemainingNewBlockTransactions,
                PreviousPageTransactions
              );
            setpaginatedTransactions(combinedTransactions);
          }
        }
      }
      setLoadingTransactions(false);
    }
  };

  useEffect(() => {
    setPageStateArray(['']);
  }, [pageSize]);

  useEffect(() => {
    if (blockHash && pageSize) {
      (async () => {
        setLoadingTransactionsByBlock(true);
        const { data, error } = await POST('getPaginatedTransactions', {
          blockHash: blockHash,
          pageState: null,
          pageSize,
        });
        if (data) setTransactionsByBlock(data);
        setLoadingTransactionsByBlock(false);
        if (error) {
          handleError('getPaginatedTransactions', error);
          setcurrentBlockDetails(undefined);
        }
      })();
    }
  }, [blockHash, pageSize]);

  useEffect(() => {
    if (latestTransactions) {
      setpaginatedTransactions(latestTransactions);
    }
  }, [latestTransactions]);

  useEffect(() => {
    if (transactionsByBlock) {
      setPageStateArray((prevState) => [
        ...prevState,
        String(transactionsByBlock?.transactions?.pageState),
      ]);
    }
  }, [transactionsByBlock]);

  useEffect(() => {
    if (currentBlockDetails?.blockHash && pageSize) {
      (async () => {
        setLoadingTransactions(true);

        const transactionsData = await getTransactions(
          currentBlockDetails?.blockHash || '',
          pageSize
        );

        const transactionsLength =
          transactionsData?.transactions?.values?.length || 0;

        if (transactionsLength === pageSize)
          setLatestTransactions(transactionsData);

        if (transactionsLength < pageSize) {
          const nextBlockHash = await getNextBlockHash(
            latestBlockGroup,
            transactionsData?.transactions?.values?.[transactionsLength - 1]
              ?.block_number || currentBlockDetails?.blockNumber
          );

          if (nextBlockHash) {
            const RemainingNewBlockTransactions = await getTransactions(
              nextBlockHash,
              pageSize - transactionsLength
            );

            if (RemainingNewBlockTransactions) {
              const CombinedTransactions: GetPaginatedEThTransactionsQuery =
                combineTransactions(
                  transactionsData,
                  RemainingNewBlockTransactions
                );
              setpaginatedTransactions(CombinedTransactions);
            }
          }
        }
        setLoadingTransactions(false);
      })();
    }
  }, [
    currentBlockDetails?.blockHash,
    currentBlockDetails?.blockNumber,
    latestBlockGroup,
    pageSize,
  ]);

  return (
    <>
      <Hero title="Transactions" />
      <TransactionsTable
        isTransactions={blockHash ? false : true}
        titles={transactionTitles}
        transactions={blockHash ? transactionsByBlock : paginatedTransactions}
        pageSize={pageSize}
        setPageSize={setPageSize}
        handlePagination={
          blockHash
            ? handleBlockTransactionPagination
            : handleTransactionPagination
        }
        loading={
          blockHash
            ? loadingTransactionsByBlock
            : loadingTransactions ||
              !paginatedTransactions?.transactions?.values?.length
        }
      />
    </>
  );
};

export default Transactions;
