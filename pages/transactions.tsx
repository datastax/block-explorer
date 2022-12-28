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
} from 'utils';

const Transactions: NextPage = () => {
  const router = useRouter();
  const blockHash = router.query['block'] as string;

  const [pageSize, setPageSize] = useState(10);
  const [pageStateArray, setPageStateArray] = useState<string[]>(['']);
  const [currentBlockDetails, setcurrentBlockDetails] =
    useState<TransactionBlockDetail>();
  const [loadingTransactionsByBlock, setLoadingTransactionsByBlock] =
    useState(true);
  const [loadingTransactions, setLoadingTransactions] = useState(true);
  const [latestBlockGroup, setlatestBlockGroup] = useState<number>(0);
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
    const DATA_LENGTH =
      paginatedTransactions?.transactions?.values?.length || 0;
    const TRANSACTIONS_LIST = paginatedTransactions?.transactions?.values || [];
    if (paginationEvent === PAGINATION_EVENT.NEXT) {
      setLoadingTransactions(true);
      const { data: NextPageTransactions, error } = await POST(
        'getPaginatedTransactions',
        {
          blockHash: TRANSACTIONS_LIST[DATA_LENGTH - 1]?.block_hash,
          transactionIndexExpression: {
            gt: TRANSACTIONS_LIST?.[DATA_LENGTH - 1]?.transaction_index,
          },
          limit: pageSize,
        }
      );

      if (NextPageTransactions) setLatestTransactions(NextPageTransactions);
      const lengthOfNextPageTransactions =
        NextPageTransactions?.transactions?.values?.length || 0;
      if (error) {
        handleError('getPaginatedTransactions', error);
        setcurrentBlockDetails(undefined);
      }
      if (lengthOfNextPageTransactions < pageSize && latestTransactions) {
        const { data: NextBlock, error } = await POST('getNextBlock', {
          blockGroup: Number(latestBlockGroup),
          blockNumber: Number(
            NextPageTransactions?.transactions?.values?.[
              lengthOfNextPageTransactions - 1
            ]?.block_number
          ),
        });
        if (error) {
          handleError('getNextBlock', error);
        }
        if (NextBlock) {
          const { data: RemainingNewBlockTransactions, error } = await POST(
            'getPaginatedTransactions',
            {
              blockHash: NextBlock?.eth_blocks?.values?.[0]?.hash,
              limit: pageSize - lengthOfNextPageTransactions,
            }
          );
          if (error) {
            handleError('getPaginatedTransactions', error);
            setcurrentBlockDetails(undefined);
          }
          if (RemainingNewBlockTransactions) {
            const CombinedTransactions: GetPaginatedEThTransactionsQuery = {
              transactions: {
                pageState:
                  RemainingNewBlockTransactions?.transactions?.pageState,
                values: [
                  ...(NextPageTransactions?.transactions?.values || []),
                  ...(RemainingNewBlockTransactions?.transactions?.values ||
                    []),
                ],
              },
            };
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
          blockHash: TRANSACTIONS_LIST[0]?.block_hash,
          limit: pageSize,
          transactionIndexExpression: {
            lt: TRANSACTIONS_LIST[0]?.transaction_index,
          },
        }
      );
      if (PreviousPageTransactions)
        setLatestTransactions(PreviousPageTransactions);
      const lengthOfPreviousPageTransactions =
        PreviousPageTransactions?.transactions?.values?.length || 0;
      if (error) {
        handleError('getPaginatedTransactions', error);
        setcurrentBlockDetails(undefined);
      }
      if (
        (lengthOfPreviousPageTransactions < pageSize && latestTransactions) ||
        TRANSACTIONS_LIST[0]?.transaction_index == 0
      ) {
        const { data: PreviousBlock, error } = await POST('getPreviousBlock', {
          blockGroup: Number(latestBlockGroup),
          blockNumber: Number(
            PreviousPageTransactions?.transactions?.values?.[
              lengthOfPreviousPageTransactions - 1
            ]?.block_number
          ),
        });
        if (error) {
          handleError('getPreviousBlock', error);
        }
        if (PreviousBlock) {
          const { data: RemainingNewBlockTransactions, error } = await POST(
            'getPaginatedTransactions',
            {
              blockHash: PreviousBlock?.eth_blocks?.values?.[0]?.hash,
              limit: pageSize - lengthOfPreviousPageTransactions,
            }
          );
          if (error) {
            handleError('getPaginatedTransactions', error);
            setcurrentBlockDetails(undefined);
          }

          if (RemainingNewBlockTransactions) {
            const combinedTransactions: GetPaginatedEThTransactionsQuery = {
              transactions: {
                pageState:
                  RemainingNewBlockTransactions?.transactions?.pageState,
                values: [
                  ...(RemainingNewBlockTransactions?.transactions?.values ||
                    []),
                  ...(PreviousPageTransactions?.transactions?.values || []),
                ],
              },
            };
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
