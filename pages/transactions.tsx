import Hero from '@components/shared/Hero';
import TransactionsTable from '@components/Transactions/Table';
import { PAGINATION_EVENT, transactionTitles } from '@constants';
import {
  GetPaginatedEThTransactionsQuery,
  useGetLatestBlockGroupQuery,
  useGetLatestEthBlockLazyQuery,
  useGetNextBlockForTransactionLazyQuery,
  useGetPaginatedEThTransactionsLazyQuery,
  useGetPreviousBlockForTransactionLazyQuery,
} from 'lib/graphql/generated/generate';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TransactionBlockDetail } from 'types';

const Transactions: NextPage = () => {
  const router = useRouter();
  const blockHash = router.query['block'] as string;

  const [pageSize, setPageSize] = useState(10);
  const [pageStateArray, setPageStateArray] = useState<string[]>(['']);
  const [blockDetails, setBlockDetails] = useState<TransactionBlockDetail>();
  const [paginatedTransactions, setpaginatedTransactions] =
    useState<GetPaginatedEThTransactionsQuery>();

  const [getLatestBlock, { error: latestBlockError }] =
    useGetLatestEthBlockLazyQuery();

  const [getNextBlockTranscation] = useGetNextBlockForTransactionLazyQuery();

  const [getPreviousBlockTranscation] =
    useGetPreviousBlockForTransactionLazyQuery();

  const [
    getTransactionsByBlock,
    {
      data: transactionsByBlock,
      error: transactionErrorByBlock,
      loading: loadingTransactionsByBlock,
    },
  ] = useGetPaginatedEThTransactionsLazyQuery();

  const [getNewTransactions, { error: newTransactionsError }] =
    useGetPaginatedEThTransactionsLazyQuery();

  const [
    getTransactions,
    {
      data: latestTransactions,
      error: transactionError,
      loading: loadingTransactions,
    },
  ] = useGetPaginatedEThTransactionsLazyQuery();

  const { data: blockGroupData, error: latestBlockGroupError } =
    useGetLatestBlockGroupQuery({
      onCompleted: (res) => {
        getLatestBlock({
          variables: {
            filter: {
              blocks_group: {
                eq: res?.dashboard_analytics?.values?.[0]?.latest_blocks_group,
              },
            },
            options: {
              pageState: null,
              pageSize: 1,
            },
          },
          onCompleted: (res) => {
            setBlockDetails({
              blockHash: String(res?.eth_blocks?.values?.[0]?.hash),
              blockNumber: res?.eth_blocks?.values?.[0]?.number,
            });
          },
        });
      },
    });

  const handleBlockTransactionPagination = (
    paginationEvent: PAGINATION_EVENT
  ) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT)
      getTransactionsByBlock({
        variables: {
          filter: {
            block_hash: {
              eq: blockHash,
            },
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
      getTransactionsByBlock({
        variables: {
          filter: {
            block_hash: {
              eq: blockHash,
            },
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

  const handleTransactionPagination = (paginationEvent: PAGINATION_EVENT) => {
    const LATEST_BLOCK_GROUP =
      blockGroupData?.dashboard_analytics?.values?.[0]?.latest_blocks_group;
    const DATA_LENGTH =
      paginatedTransactions?.transactions?.values?.length || 0;
    const TRANSACTIONS_LIST = paginatedTransactions?.transactions?.values || [];
    if (paginationEvent === PAGINATION_EVENT.NEXT) {
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: TRANSACTIONS_LIST[DATA_LENGTH - 1]?.block_hash,
            },
            transaction_index: {
              gt: TRANSACTIONS_LIST?.[DATA_LENGTH - 1]?.transaction_index,
            },
          },
          options: {
            limit: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined);
          setPageStateArray(['']);
        },
        onCompleted: (NextPageTransactions) => {
          const lengthOfNextPageTransactions =
            NextPageTransactions?.transactions?.values?.length || pageSize;
          if (lengthOfNextPageTransactions < pageSize && latestTransactions) {
            getNextBlockTranscation({
              variables: {
                blockGroup: Number(LATEST_BLOCK_GROUP),
                blockNumber: Number(
                  NextPageTransactions?.transactions?.values?.[
                    lengthOfNextPageTransactions - 1
                  ]?.block_number
                ),
              },
              onError: (error) => {
                console.error('Error While Fetching Next Block: ', error);
              },
              onCompleted: (NextBlock) => {
                getNewTransactions({
                  variables: {
                    filter: {
                      block_hash: {
                        eq: NextBlock?.eth_blocks?.values?.[0]?.hash,
                      },
                    },
                    options: {
                      limit: pageSize - lengthOfNextPageTransactions,
                    },
                  },
                  onCompleted: (RemainingNewBlockTransactions) => {
                    const CombinedTransactions: GetPaginatedEThTransactionsQuery =
                      {
                        transactions: {
                          pageState:
                            RemainingNewBlockTransactions?.transactions
                              ?.pageState,
                          values: [
                            ...(NextPageTransactions?.transactions?.values ||
                              []),
                            ...(RemainingNewBlockTransactions?.transactions
                              ?.values || []),
                          ],
                        },
                      };

                    setpaginatedTransactions(CombinedTransactions);
                  },
                  onError: () => {
                    setBlockDetails(undefined);
                  },
                });
              },
            });
          }
        },
      });
    }

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: TRANSACTIONS_LIST[0]?.block_hash,
            },
            transaction_index: {
              lt: TRANSACTIONS_LIST[0]?.transaction_index,
            },
          },
          options: {
            limit: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined);
          setPageStateArray(['']);
        },
        onCompleted: (PreviousPageTransactions) => {
          const lengthOfPreviousPageTransactions =
            PreviousPageTransactions?.transactions?.values?.length || pageSize;
          if (
            (lengthOfPreviousPageTransactions < pageSize &&
              latestTransactions) ||
            TRANSACTIONS_LIST[0]?.transaction_index == 0
          ) {
            getPreviousBlockTranscation({
              variables: {
                blockGroup: Number(LATEST_BLOCK_GROUP),
                blockNumber: Number(
                  PreviousPageTransactions?.transactions?.values?.[
                    lengthOfPreviousPageTransactions - 1
                  ]?.block_number
                ),
              },
              onError: (error) => {
                console.error('Error While Fetching Previous Block: ', error);
              },
              onCompleted: (PreviousBlock) => {
                getNewTransactions({
                  variables: {
                    filter: {
                      block_hash: {
                        eq: PreviousBlock?.eth_blocks?.values?.[0]?.hash,
                      },
                    },
                    options: {
                      limit: pageSize - lengthOfPreviousPageTransactions,
                    },
                  },
                  onCompleted: (RemainingNewBlockTransactions) => {
                    const combinedTransactions: GetPaginatedEThTransactionsQuery =
                      {
                        transactions: {
                          pageState:
                            RemainingNewBlockTransactions?.transactions
                              ?.pageState,
                          values: [
                            ...(RemainingNewBlockTransactions?.transactions
                              ?.values || []),
                            ...(PreviousPageTransactions?.transactions
                              ?.values || []),
                          ],
                        },
                      };
                    setpaginatedTransactions(combinedTransactions);
                  },
                  onError: () => {
                    setBlockDetails(undefined);
                  },
                });
              },
            });
          }
        },
      });
    }
  };

  useEffect(() => {
    setPageStateArray(['']);
  }, [pageSize]);

  useEffect(() => {
    if (blockHash) {
      getTransactionsByBlock({
        variables: {
          filter: {
            block_hash: {
              eq: blockHash,
            },
          },
          options: {
            pageState: null,
            pageSize: pageSize,
          },
        },
        onError: () => {
          setBlockDetails(undefined);
        },
      });
    }
  }, [blockHash, getTransactionsByBlock, pageSize]);

  useEffect(() => {
    if (latestTransactions) {
      setpaginatedTransactions(latestTransactions);
    }
  }, [latestTransactions]);

  useEffect(() => {
    if (transactionsByBlock) {
      setpaginatedTransactions(transactionsByBlock);
      setPageStateArray((prevState) => [
        ...prevState,
        String(transactionsByBlock?.transactions?.pageState),
      ]);
    }
  }, [transactionsByBlock]);

  useEffect(() => {
    if (blockDetails?.blockHash && pageSize)
      getTransactions({
        variables: {
          filter: {
            block_hash: {
              eq: blockDetails?.blockHash,
            },
          },
          options: {
            limit: pageSize,
          },
        },
      });
  }, [blockDetails?.blockHash, getTransactions, pageSize]);

  if (
    transactionError ||
    transactionErrorByBlock ||
    latestBlockGroupError ||
    latestBlockError ||
    newTransactionsError
  ) {
    console.error(
      transactionError ||
        transactionErrorByBlock ||
        latestBlockGroupError ||
        latestBlockError ||
        newTransactionsError
    );
  }

  return (
    <>
      <Hero title="Transactions" />
      <TransactionsTable
        titles={transactionTitles}
        transactions={paginatedTransactions}
        pageSize={pageSize}
        setPageSize={setPageSize}
        handlePagination={
          blockHash
            ? handleBlockTransactionPagination
            : handleTransactionPagination
        }
        loading={loadingTransactions || loadingTransactionsByBlock}
      />
    </>
  );
};

export default Transactions;
