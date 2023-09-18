/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from '@styles/ThemeProvider/colors';
import {
  Dashboard_AnalyticsQuery,
  GetEthBlockByNumberQuery,
  GetEthTransactionByHashQuery,
  GetInternalTransactionByEthBlockNumberQuery,
  GetInternalTransactionByEthBlockNumber_Transaction_HashQuery,
  GetPaginatedEthBlocksQuery,
  GetPaginatedEThTransactionsQuery,
} from 'lib/graphql/generated/generate';
import {
  BlockDetails,
  InternalTransactionData,
  InternalTxnsTabData,
  LogEvent,
  TransactionDetails,
} from 'types';
import Router from 'next/router';
import { ApolloError } from '@apollo/client';
import {
  summaryBlocksDataPrice,
  summaryBlocksDataTransactions,
} from '@constants';

const numberRegex = /^[0-9]+$/;

const formatAddress = (
  address: string | null | undefined,
  start = 7,
  end = 5
) => {
  if (!address) {
    return '';
  }
  if (address.length < 15) return address;
  return address.slice(0, start) + '....' + address.slice(address.length - end);
};

function numberWithCommas(value: number | string | null | undefined) {
  if (!value) return '0';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const getDifferenceV2 = (timestamp: string | undefined | null) => {
  if (!timestamp) return 0;

  // Parse the provided timestamp into a JavaScript Date object
  const parsedTimestamp = new Date(timestamp);

  if (isNaN(parsedTimestamp.getTime())) {
    return 'Invalid Timestamp';
  }

  const currentDate = new Date();
  const time = parsedTimestamp;

  const delta = Math.abs(currentDate.getTime() - time.getTime());

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return `${days} Days, ${hours} Hours ago`;
};

const getDifference = (timestamp: number | undefined | null) => {
  if (!timestamp) return 0;
  const currentDate = new Date().getTime();
  const time = new Date(timestamp * 1000).getTime();

  let delta = Math.abs(currentDate - time) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  const seconds = Math.floor(delta % 60);

  let templateString = [days, hours, minutes, seconds]
    .map((a, index) => {
      switch (index) {
        case 0:
          return a > 0 ? `${a} Days, ` : '';
        case 1:
          return a > 0 ? `${a} Hours, ` : '';
        case 2:
          return a > 0 ? `${a} Mins, ` : '';
        case 3:
          return a > 0 ? `${a} Secs` : '';
      }
    })
    .join('  ')
    .replaceAll('  ', ' ');

  if (templateString.split(', ').length > 2) {
    templateString = templateString.split(', ').splice(0, 2).join(', ');
  }
  return templateString;
};

const etherToGwei = (num: number | string | null | undefined) => {
  if (!num) return 0;
  if (typeof num === 'string') return (Number(num) * 1000000000).toFixed(2);
  if (num) return (num * 1000000000).toFixed(2);
  return 0;
};

const calculateStaticBlockReward = (block: string) => {
  const blockNumber = parseInt(block);
  if (0 < blockNumber && blockNumber < 4369999) {
    return 5;
  } else if (4369999 < blockNumber && blockNumber < 7279999) {
    return 3;
  } else if (7279999 < blockNumber) {
    return 2;
  }
};

const convertToMillion = (num: number) => {
  return `${(num / 1e6).toFixed(2)} M`;
};

const weiToEther = (
  num: number | undefined | null | string,
  fixed?: number
) => {
  if (!num) return 0;

  if (typeof num === 'string') return (Number(num) / 1e18).toFixed(fixed);

  if (fixed) return (num / 1e18).toFixed(fixed);
  return num / 1e18;
};

const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
};

const fixed = (number: number | undefined | null | string, fixed: number) => {
  if (!number) return 0;
  if (typeof number === 'string') return parseFloat(number).toFixed(fixed);
  return number.toFixed(fixed);
};

const getBurntFee = (burntFeeSum: string | null | undefined) => {
  return numberWithCommas(weiToEther(burntFeeSum, 2));
};

const getGasFeesPercentage = (
  usageTxn: number | null | undefined,
  gasLimit: number | null | undefined
) => {
  if (!usageTxn || !gasLimit) return 0;
  return ((usageTxn / gasLimit) * 100).toFixed(2);
};

const isNumber = (value: string) => {
  return numberRegex.test(value);
};

const mapRawDataToBlockDetails = (
  data: GetEthBlockByNumberQuery,
  block: string
): BlockDetails => {
  const { values } = data?.eth_blocks || {};
  return {
    Sha3Uncles: values?.[0]?.sha3_uncles || null,
    StateRoot: values?.[0]?.state_root || null,
    Hash: values?.[0]?.hash || '',
    ParentHash: values?.[0]?.parent_hash || '',
    Nonce: values?.[0]?.nonce || null,
    internalTransaction: values?.[0]?.int_txn_count || 0,
    BlockHeight: values?.[0]?.number.toString() || '',
    Timestamp: {
      time: `${getDifference(parseInt(values?.[0]?.timestamp || ''))} ago`,
      Date: `(${new Date(
        parseInt(values?.[0]?.timestamp || '') * 1000
      ).toUTCString()})`,
    },
    Transactions: `${values?.[0]?.transaction_count}`,
    MinedBy: {
      address: values?.[0]?.miner || '',
      miner: `(Miner: ${
        values?.[0]?.miners_name
          ? values?.[0]?.miners_name
          : formatAddress(values?.[0]?.miner)
      })`,
      time: `in ${values?.[0]?.mine_time} secs`,
    },
    BlockReward: `${values?.[0]?.reward} Ether (${calculateStaticBlockReward(
      block as string
    )} + ${values?.[0]?.txn_fees} - ${values?.[0]?.burnt_fees})`,
    UnclesReward: values?.[0]?.uncle_reward || '',
    Difficulty: numberWithCommas(values?.[0]?.difficulty || 0) || '',
    TotalDifficulty: numberWithCommas(values?.[0]?.total_difficulty || 0) || '',
    Size: numberWithCommas(values?.[0]?.size || 0) + ' bytes',
    GasUsed: numberWithCommas(values?.[0]?.gas_used || 0),
    GasUsedPercetge: parseFloat(values?.[0]?.gas_used_percentage || ''),
    GasTargetPercentage: parseFloat(values?.[0]?.gas_target_percentage || ''),
    GasLimit: numberWithCommas(values?.[0]?.gas_limit || 0),
    BaseFeePerGas: values?.[0]?.base_fee_per_gas
      ? `${values?.[0]?.base_fee_per_gas} Ether (${etherToGwei(
          parseFloat(values?.[0]?.base_fee_per_gas || '')
        )} Gwei)`
      : null,
    BurntFees: parseFloat(values?.[0]?.burnt_fees || '')
      ? `🔥 ${values?.[0]?.burnt_fees} Ether`
      : null,
    ExtraData: `speth03�0\`' (Hex:${values?.[0]?.extra_data})`,
  };
};

const mapRawDataToIntTransactions = (
  internalTransactions: GetInternalTransactionByEthBlockNumberQuery
): InternalTransactionData[] => {
  const data =
    internalTransactions?.traces?.values?.map((transaction) => {
      return {
        parentTxnHash: transaction?.transaction_hash,
        type: 'call',
        from: transaction?.from_address ?? '',
        to: transaction?.to_address ?? '',
        value: String(Number(transaction?.value).toFixed(4)),
      };
    }) || [];

  return data;
};

const mapRawDataToInternalTransactions = (
  transactionDetails: GetInternalTransactionByEthBlockNumber_Transaction_HashQuery
): InternalTxnsTabData[] => {
  const data =
    transactionDetails?.traces?.values?.map(
      ({ from_address, to_address, gas_limit, type_trace_address, value }) => {
        return {
          typeTraceAddress: type_trace_address,
          from: from_address,
          to: to_address,
          value: String(value),
          gasLimit: numberWithCommas(gas_limit),
        };
      }
    ) || [];
  return data;
};

const mapRawDataToTransactionDetails = (
  transactionDetails: GetEthTransactionByHashQuery,
  blockConfirmation: number
): TransactionDetails => {
  return {
    Nonce: transactionDetails?.transactions_by_hash?.values?.[0]?.nonce,
    TransactionIndex:
      transactionDetails?.transactions_by_hash?.values?.[0]?.transaction_index,
    TransactionHash:
      transactionDetails?.transactions_by_hash?.values?.[0]?.hash || '',
    Status:
      transactionDetails?.transactions_by_hash?.values?.[0]?.receipt_status,
    Block: transactionDetails?.transactions_by_hash?.values?.[0]?.block_number,
    BlockConfirmation:
      blockConfirmation -
      Number(
        transactionDetails?.transactions_by_hash?.values?.[0]?.block_number
      ),
    Timestamp: {
      time: `${getDifference(
        parseInt(
          transactionDetails?.transactions_by_hash?.values?.[0]
            ?.block_timestamp || ''
        )
      )} ago`,
      Date: `(${new Date(
        parseInt(
          transactionDetails?.transactions_by_hash?.values?.[0]
            ?.block_timestamp || ''
        ) * 1000
      ).toUTCString()})`,
    },
    Gas_limit: transactionDetails.transactions_by_hash?.values?.[0]?.gas,
    Usage_Txn:
      transactionDetails.transactions_by_hash?.values?.[0]?.receipt_gas_used,
    TransactionAction: {
      approved: 'Approved',
      kuno: 'KUNO',
      trade: 'For Trade On',
      router: 'Uniswap V3: Router 2',
      checkIn: 'Check in',
      token: 'Token Approvals',
    },
    From:
      transactionDetails?.transactions_by_hash?.values?.[0]?.from_address || '',
    To: transactionDetails?.transactions_by_hash?.values?.[0]?.to_address || '',
    Value: `${transactionDetails?.transactions_by_hash?.values?.[0]?.value} Ether`,
    Value_usd: `($${parseFloat(
      transactionDetails?.transactions_by_hash?.values?.[0]?.value || ''
    ).toFixed(2)})`,
    TransactionFee: `${
      transactionDetails?.transactions_by_hash?.values?.[0]?.transaction_fees
    } Ether ($${parseFloat(
      transactionDetails?.transactions_by_hash?.values?.[0]?.transaction_fees ||
        ''
    ).toFixed(2)})`,
    GasPrice: `${
      transactionDetails?.transactions_by_hash?.values?.[0]?.gas_price
    } Ether (${etherToGwei(
      transactionDetails?.transactions_by_hash?.values?.[0]?.gas_price
    )} Gwei)`,
    BaseFee: transactionDetails?.transactions_by_hash?.values?.[0]?.base_fee,
    MaxFee: transactionDetails?.transactions_by_hash?.values?.[0]?.max_fee,
    MaxPriorityFee:
      transactionDetails?.transactions_by_hash?.values?.[0]?.max_priority_fee,
    TxnBurntFee:
      transactionDetails?.transactions_by_hash?.values?.[0]?.txn_savings, //
    TxnSavingFee:
      transactionDetails?.transactions_by_hash?.values?.[0]?.txn_savings,
    input: transactionDetails?.transactions_by_hash?.values?.[0]?.input,
  };
};

const getEventNameFromRawData = (
  name: string | undefined | null,
  events: string | undefined | null
) => {
  if (!name) return '';

  const uniformString = name?.replace('(', ',').replace(')', '');
  const params = uniformString?.split(',');
  if (params?.length > 1) {
    let NameWithParams = `<ColouredText color={${colors.actionSecondary}}>${params[0]}</ColouredText>(`;
    params.map((param: string, index) => {
      if (index !== 0)
        NameWithParams =
          NameWithParams +
          `<ColouredText color={${colors.actionPrimary}}>${param}</ColouredText>,&nbsp;`;
    });
    NameWithParams += `<ColouredText color={${colors.actionSecondary}}>)</ColouredText>`;
    return NameWithParams;
  }

  if (!events) return `${name}`;

  const parsedEvents = JSON.parse(events);
  let FullEventName = ``;
  let count = 0;
  parsedEvents.map((event: LogEvent) => {
    if (event['indexed']) {
      FullEventName =
        FullEventName +
        `&nbsp;index_topic_${count}&nbsp;<ColouredText color={${colors.actionPrimary}}>${event['type']}</ColouredText>&nbsp;<ColouredText color={${colors.semanticRed}}>${event['name']}</ColouredText>,&nbsp;`;
    } else {
      FullEventName =
        FullEventName +
        `&nbsp;<ColouredText color={${colors.actionPrimary}}>${event['type']}</ColouredText>&nbsp;<ColouredText color={${colors.semanticRed}}>${event['name']}</ColouredText>,&nbsp;`;
    }
    count = count + 1;
  });

  return `${name} ( ${FullEventName} )`;
};

const timeLapseInSeconds = (timeInMinutes: number) => {
  const timeInSeconds = timeInMinutes * 60;
  return Math.round(new Date().getTime() / 1000 + timeInSeconds);
};

const getNetworkUtilization = (blocks: GetPaginatedEthBlocksQuery) => {
  const { values } = blocks?.eth_blocks || {};
  const PageSize = values?.length || 0;
  let gasUsedSum = 0;
  values?.map((block) => {
    gasUsedSum = gasUsedSum + Number(block.gas_used_percentage);
  });
  return gasUsedSum / PageSize;
};

const redirect = (path: string) => {
  Router.push(path);
};

const getBlockGroupFromBlockNumber = (blockNumber: number) => {
  return Math.ceil(blockNumber / 100000);
};

const handleError = (queryName: string, error: ApolloError | Error) => {
  console.error(`Error while calling ${queryName}`, error);
};

const mapRawDataToSummaryBlocks = (
  dashboardAnalytics: Dashboard_AnalyticsQuery
) => {
  return summaryBlocksDataPrice.map((block) => {
    return {
      icon: block.icon,
      title: block.title,
      value: `$${
        block.title === 'Ether Price'
          ? numberWithCommas(
              parseFloat(
                dashboardAnalytics?.dashboard_analytics?.values?.[0]
                  ?.ether_price_usd || ''
              ).toFixed(2)
            )
          : numberWithCommas(
              parseFloat(
                dashboardAnalytics?.dashboard_analytics?.values?.[0]
                  ?.market_cap_usd || ''
              ).toFixed(2)
            )
      }`,
      stat:
        block.title === 'Ether Price'
          ? `@${parseFloat(
              dashboardAnalytics?.dashboard_analytics?.values?.[0]
                ?.ether_price_btc || ''
            ).toFixed(5)} BTC`
          : undefined,
      supportingStat:
        block.title === 'Ether Price'
          ? `${parseFloat(
              dashboardAnalytics?.dashboard_analytics?.values?.[0]
                ?.price_percentage_change || ''
            ).toFixed(2)}%`
          : undefined,
      fontSizeOfValue: block.fontSizeOfValue,
    };
  });
};

const mapRawDataToSummaryTransactions = (
  dashboardAnalytics: Dashboard_AnalyticsQuery
) => {
  return summaryBlocksDataTransactions.map((block) => {
    return {
      icon: block.icon,
      title: block.title,
      value:
        block.title === 'Difficuilty'
          ? `${numberWithCommas(
              (
                parseFloat(
                  dashboardAnalytics?.dashboard_analytics?.values?.[0]
                    ?.difficulty || ''
                ) / 10e12
              ).toFixed(2)
            )} TH`
          : `${convertToMillion(
              parseInt(
                dashboardAnalytics?.dashboard_analytics?.values?.[0]
                  ?.total_transactions || ''
              )
            )}`,
      stat:
        block.title === 'Transactions'
          ? `${parseFloat(
              dashboardAnalytics?.dashboard_analytics?.values?.[0]?.tps || ''
            ).toFixed(1)} TPS`
          : block.stat,
      secondaryTitle: block.secondaryTitle,
      secondaryValue:
        block.secondaryTitle === 'Hash Rate'
          ? `${numberWithCommas(
              (
                parseFloat(
                  dashboardAnalytics?.dashboard_analytics?.values?.[0]
                    ?.hashrate || ''
                ) / 10e9
              ).toFixed(2)
            )} GH/s`
          : `${parseFloat(
              dashboardAnalytics?.dashboard_analytics?.values?.[0]
                ?.med_gas_price || ''
            ).toFixed(2)} Gwei`,
      fontSizeOfValue: block.fontSizeOfValue,
      secondaryStat: block.secondaryStat,
    };
  });
};

const mapRawDataToGraphData = (
  dashboardAnalytics: Dashboard_AnalyticsQuery
) => {
  let count = 1;

  return (
    dashboardAnalytics?.dashboard_analytics?.values?.[0]
      ?.transactions_history_chart &&
    JSON?.parse(
      dashboardAnalytics?.dashboard_analytics?.values?.[0]
        ?.transactions_history_chart || ''
    )
      ?.map((node: string) => {
        const date = new Date();
        date.setDate(date.getDate() - count);
        const day = date.getDate();
        const month = date.toLocaleString('en-us', { month: 'long' });
        count += 1;
        return {
          label: `${month} ${day}`,
          value: node,
        };
      })
      .reverse()
  );
};

const combineTransactions = (
  oldTransactions: GetPaginatedEThTransactionsQuery,
  newTransactions: GetPaginatedEThTransactionsQuery
): GetPaginatedEThTransactionsQuery => {
  return {
    transactions: {
      pageState: newTransactions?.transactions?.pageState,
      values: [
        ...(oldTransactions?.transactions?.values || []),
        ...(newTransactions?.transactions?.values || []),
      ],
    },
  };
};

const getPassedSecondsToday = (timestampHex: string) => {
  const timeStamp = parseInt(timestampHex);
  const date: any = new Date(timeStamp * 1000);
  const today: any = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const secondsPassed = (date - today) / 1000;
  const currentDayBlocks = Math.floor(secondsPassed / 12);
  return currentDayBlocks;
};

export {
  formatAddress,
  getDifference,
  numberWithCommas,
  etherToGwei,
  calculateStaticBlockReward,
  convertToMillion,
  weiToEther,
  copyToClipboard,
  fixed,
  getBurntFee,
  getGasFeesPercentage,
  isNumber,
  mapRawDataToBlockDetails,
  mapRawDataToTransactionDetails,
  getEventNameFromRawData,
  timeLapseInSeconds,
  mapRawDataToInternalTransactions,
  mapRawDataToIntTransactions,
  getNetworkUtilization,
  redirect,
  getBlockGroupFromBlockNumber,
  handleError,
  mapRawDataToSummaryBlocks,
  mapRawDataToSummaryTransactions,
  mapRawDataToGraphData,
  combineTransactions,
  getPassedSecondsToday,
  getDifferenceV2,
};
export { default as createEmotionCache } from './createEmotionCache';
export * from './api';
export * from './sitemapUtils';
