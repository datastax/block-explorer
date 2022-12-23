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
  useGetLogsByEthTransactionLazyQuery,
  useGetEthTransactionByHashQuery,
  useGetLatestEthBlockLazyQuery,
  useGetLatestBlockGroupQuery,
  useGetInternalTransactionByEthBlockNumber_Transaction_HashLazyQuery,
} from 'lib/graphql/generated/generate';
import { TransactionDetails, TabProps, InternalTxnsTabData } from 'types';
import {
  mapRawDataToInternalTransactions,
  mapRawDataToTransactionDetails,
} from 'utils';
import InternalTxns from '@components/InternalTxnsTab';

interface TransactionProps {
  transactionHash: string;
}

const Transaction: NextPage<TransactionProps> = (props: TransactionProps) => {
  const { transactionHash } = props;

  const [tabIndex, setTabIndex] = useState(0);
  const [blockConfirmation, setBlockConfirmation] = useState<number>();
  const [transactionDetailData, setTransactionDetailData] =
    useState<TransactionDetails>();
  const [internalTransactions, setInternalTransactions] = useState<
    InternalTxnsTabData[]
  >([]);

  const [
    getInternalTransactions,
    { data: internalTransactionsData, error: internalTransactionsError },
  ] = useGetInternalTransactionByEthBlockNumber_Transaction_HashLazyQuery();

  const { data: transactionDetails, error: transactionError } =
    useGetEthTransactionByHashQuery({
      variables: {
        filter: {
          hash: {
            eq: transactionHash as string,
          },
        },
      },
    });

  const [getLogs, { data: transactionLogs, error: transactionLogsError }] =
    useGetLogsByEthTransactionLazyQuery();

  const [getLatestBlock, { error: blockError, loading: blockLoading }] =
    useGetLatestEthBlockLazyQuery();

  const { error: latestBlockGroupError } = useGetLatestBlockGroupQuery({
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
          setBlockConfirmation(res?.eth_blocks?.values?.[0]?.number);
        },
      });
    },
  });

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
      if (blockConfirmation && !blockLoading && internalTransactionsData) {
        setTransactionDetailData(
          mapRawDataToTransactionDetails(transactionDetails, blockConfirmation)
        );
        setInternalTransactions(
          mapRawDataToInternalTransactions(internalTransactionsData)
        );
      }
    }
  }, [
    blockConfirmation,
    blockLoading,
    internalTransactionsData,
    transactionDetails,
  ]);

  useEffect(() => {
    const locationHash = window.location.hash;
    if (locationHash === '#eventlog') setTabIndex(1);
    if (locationHash === '#internal') setTabIndex(2);
  }, []);

  useEffect(() => {
    if (transactionDetails?.transactions_by_hash?.values?.[0]?.block_number)
      getLogs({
        variables: {
          filter: {
            transaction_hash: { eq: transactionHash as string },
            block_number: {
              eq: transactionDetails?.transactions_by_hash?.values?.[0]
                ?.block_number,
            },
          },
        },
      });
    getInternalTransactions({
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
  }, [
    getInternalTransactions,
    getLogs,
    transactionDetails?.transactions_by_hash?.values,
    transactionHash,
  ]);

  if (transactionLogsError)
    console.error(
      'Error While Fetching Transaction Logs',
      transactionLogsError
    );
  if (latestBlockGroupError) {
    console.error(latestBlockGroupError);
  }
  if (blockError || transactionError || internalTransactionsError) {
    console.error(
      blockError + ' ' + transactionError + ' ' + internalTransactionsError
    );
  }

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
  return { props: { transactionHash: transactionhash as string } };
}
