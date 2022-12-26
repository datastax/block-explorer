import { useEffect, useState } from 'react';
import type { NextPage, NextPageContext } from 'next';
import Router from 'next/router';
import { Typography, Box } from '@mui/material';
import colors from '@styles/ThemeProvider/colors';
import Hero from '@components/shared/Hero';
import TransactionDetail from '@components/TransactionDetail';
import CustomSkeleton from '@components/shared/CustomSkeleton';
import Tabs from '@components/shared/Tabs/CustomTabs';
import TabPanel from '@components/shared/Tabs/CustomTabsPanel';
import TransactionLogs from '@components/TransactionDetail/TransactionLogs';
import {
  Query,
  GetEthTransactionByHashQuery,
  GetLogsByEthTransactionQuery,
  GetInternalTransactionByEthBlockNumber_Transaction_HashQuery,
} from 'lib/graphql/generated/generate';
import { TransactionDetails, TabProps, InternalTxnsTabData } from 'types';
import {
  GET,
  handleError,
  mapRawDataToInternalTransactions,
  mapRawDataToTransactionDetails,
  POST,
} from 'utils';
import InternalTxns from '@components/InternalTxnsTab';
import { ApolloError, gql } from '@apollo/client';
import client from 'lib/graphql/apolloClient';
import {
  GET_ETH_TRANSACTION_BY_HASH,
  GET_INTERNAL_TRANSACTIONS_OF_TRANSACTION,
  GET_LOGS_OF_TRANSACTION,
} from 'lib/graphql/queries';

interface TransactionProps {
  transactionDetails: GetEthTransactionByHashQuery;
  transactionLogs: GetLogsByEthTransactionQuery;
  internalTransactionsData: GetInternalTransactionByEthBlockNumber_Transaction_HashQuery;
  blockConfirmation: number;
  transactionError: ApolloError;
  transactionLogsError: ApolloError;
  internalTransactionsError: ApolloError;
}

const Transaction: NextPage<TransactionProps> = ({
  transactionDetails,
  internalTransactionsData,
  transactionLogs,
  blockConfirmation,
  transactionError,
  transactionLogsError,
  internalTransactionsError,
}: TransactionProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [transactionDetailData, setTransactionDetailData] =
    useState<TransactionDetails>();
  const [internalTransactions, setInternalTransactions] = useState<
    InternalTxnsTabData[]
  >([]);

  // const [
  //   getConsecutiveTransaction,
  //   { data: consecutiveTransaction, error: consecutiveTransactionError },
  // ] = useGetConsecutiveTransactionsLazyQuery()

  // const [nextConsecutive, setNextConsecutive] = useState<number | null>()
  // const [previousConsecutive, setPreviousConsecutive] = useState<
  //   number | null
  // >()
  // const [blockHash, setBlockHash] = useState<string>()
  // const [blockNumber, setBlockNumber] = useState<number>()

  // const setNextConsecutiveState = () => {
  //   setPreviousConsecutive(undefined)
  //   setNextConsecutive(transactionDetailData?.TransactionIndex)
  //   setBlockHash(
  //     transactionDetails?.transactions_by_hash?.values?.[0]?.block_hash || ''
  //   )
  //   setBlockNumber(
  //     transactionDetails?.transactions_by_hash?.values?.[0]?.block_number
  //   )
  // }

  // const setPreviousConsecutiveState = () => {
  //   setPreviousConsecutive(transactionDetailData?.TransactionIndex)
  //   setNextConsecutive(undefined)
  //   setBlockHash(
  //     transactionDetails?.transactions_by_hash?.values?.[0]?.block_hash || ''
  //   )
  //   setBlockNumber(
  //     transactionDetails?.transactions_by_hash?.values?.[0]?.block_number
  //   )
  // }

  // const resetStates = useCallback((hash: string) => {
  //   setPreviousConsecutive(undefined)
  //   setNextConsecutive(undefined)
  //   setBlockHash(undefined)
  //   setBlockNumber(undefined)
  //   Router.push(hash)
  // }, [])

  // useEffect(() => {
  //   if (nextConsecutive || previousConsecutive === 0) {
  //     getConsecutiveTransaction({
  //       variables: {
  //         transactionsdata: {
  //           blockHash: blockHash,
  //           blockNumber: blockNumber,
  //           pagesInput: {
  //             pageSize: 1,
  //             next: nextConsecutive,
  //             previous: undefined,
  //           },
  //         },
  //       },
  //     })
  //   }
  //   if (previousConsecutive || previousConsecutive === 0) {
  //     getConsecutiveTransaction({
  //       variables: {
  //         transactionsdata: {
  //           blockHash: blockHash,
  //           blockNumber: blockNumber,
  //           pagesInput: {
  //             pageSize: 1,
  //             next: undefined,
  //             previous: previousConsecutive,
  //           },
  //         },
  //       },
  //     })
  //   }
  // }, [
  //   blockHash,
  //   blockNumber,
  //   getConsecutiveTransaction,
  //   nextConsecutive,
  //   previousConsecutive,
  // ])

  // useEffect(() => {
  //   if (consecutiveTransaction?.transactions[0]?.hash) {
  //     resetStates(consecutiveTransaction?.transactions[0]?.hash)
  //   }
  // }, [consecutiveTransaction?.transactions, resetStates])

  const tabsList: TabProps[] = [
    {
      label: 'Transaction Overview',
      ariaControls: 'simple-tabpanel-0',
      id: 'simple-tab-0',
    },
    {
      label: `Logs (${transactionLogs?.logs?.values?.length || 0})`,
      ariaControls: 'simple-tabpanel-1',
      id: 'simple-tab-2',
    },
    {
      label: `Internal Txns`,
      ariaControls: 'simple-tabpanel-2',
      id: 'simple-tab-3',
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    if (transactionDetails) {
      if (transactionDetails?.transactions_by_hash?.values?.length === 0)
        Router.push(`/404`);
      if (blockConfirmation && internalTransactionsData) {
        setTransactionDetailData(
          mapRawDataToTransactionDetails(transactionDetails, blockConfirmation)
        );
        setInternalTransactions(
          mapRawDataToInternalTransactions(internalTransactionsData)
        );
      }
    }
  }, [blockConfirmation, internalTransactionsData, transactionDetails]);

  useEffect(() => {
    const locationHash = window.location.hash;
    if (locationHash === '#eventlog') setTabIndex(1);
    if (locationHash === '#internal') setTabIndex(2);
  }, []);

  if (transactionError) {
    handleError('getTransactionByHash', transactionError);
  }
  if (transactionLogsError)
    handleError('getLogsOfTransaction', transactionLogsError);

  if (internalTransactionsError)
    handleError(
      'getInternalTransactionsOfTransaction',
      internalTransactionsError
    );

  return (
    <>
      <Hero
        title="Transaction Details"
        showChips={false}
        showPagination={false}
        showDropdown={false}
        setNextConsecutiveState={() => {
          console.log('Next called');
        }}
        setPreviousConsecutiveState={() => {
          console.log('Previous Called');
        }}
      />

      <Tabs tabIndex={tabIndex} tabsList={tabsList} onChange={handleChange} />

      {transactionDetailData ? (
        <>
          <TabPanel value={tabIndex} index={0}>
            <TransactionDetail TransactionData={transactionDetailData} />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Typography
              fontWeight={500}
              fontSize="22px"
              color={colors.neutral100}
            >
              Transaction Receipt Event Logs
            </Typography>
            {transactionLogs?.logs?.values &&
              transactionLogs?.logs?.values?.length > 0 && (
                <TransactionLogs logsData={transactionLogs} />
              )}
          </TabPanel>
          {internalTransactions && internalTransactions.length > 0 && (
            <TabPanel value={tabIndex} index={2}>
              <InternalTxns data={internalTransactions} />
            </TabPanel>
          )}
        </>
      ) : (
        <Box sx={{ width: '100%' }}>
          <CustomSkeleton rows={10} />
        </Box>
      )}
    </>
  );
};

export default Transaction;

export async function getServerSideProps(context: NextPageContext) {
  const { transactionhash } = context.query;

  let transactionLogs,
    transactionLogsError,
    internalTransactionsData,
    internalTransactionsError,
    blockConfirmation;

  const { data: transactionDetails, error: transactionError } =
    await client.query<Query>({
      query: gql`
        ${GET_ETH_TRANSACTION_BY_HASH}
      `,
      variables: {
        filter: {
          hash: {
            eq: transactionhash as string,
          },
        },
      },
    });

  if (
    transactionError ||
    !transactionDetails?.transactions_by_hash?.values?.[0]?.block_number
  )
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };

  if (transactionDetails?.transactions_by_hash?.values?.[0]?.block_number) {
    const { data: logs, error: logsError } = await client.query<Query>({
      query: gql`
        ${GET_LOGS_OF_TRANSACTION}
      `,
      variables: {
        filter: {
          transaction_hash: { eq: transactionhash as string },
          block_number: {
            eq: transactionDetails?.transactions_by_hash?.values?.[0]
              ?.block_number,
          },
        },
      },
    });

    const { data: intTxns, error: intTxnsError } = await client.query<Query>({
      query: gql`
        ${GET_INTERNAL_TRANSACTIONS_OF_TRANSACTION}
      `,
      variables: {
        filter: {
          block_number: {
            eq: transactionDetails?.transactions_by_hash?.values?.[0]
              ?.block_number,
          },
          transaction_hash: {
            eq: transactionDetails?.transactions_by_hash?.values?.[0]?.hash,
          },
        },
      },
    });
    if (logs) transactionLogs = logs;
    if (logsError) transactionLogsError = logsError;
    if (intTxns) internalTransactionsData = intTxns;
    if (intTxnsError) internalTransactionsError = intTxnsError;
  }

  const { data: latestBlockGroup } = await GET('getLatestBlockGroup');
  if (latestBlockGroup) {
    const { data: latestEthBlock } = await POST('getLatestEthBlock', {
      blockGroup:
        latestBlockGroup?.dashboard_analytics?.values?.[0]?.latest_blocks_group,
      pageState: null,
      pageSize: 1,
    });
    if (latestEthBlock)
      blockConfirmation = latestEthBlock?.eth_blocks?.values?.[0]?.number;
  }

  return {
    props: {
      transactionDetails,
      transactionLogs,
      internalTransactionsData,
      blockConfirmation,
      transactionError: transactionError || null,
      transactionLogsError: transactionLogsError || null,
      internalTransactionsError: internalTransactionsError || null,
    },
  };
}
