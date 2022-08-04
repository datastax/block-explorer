import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attribute = {
  __typename?: 'Attribute';
  trait_type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type BlockOutput = {
  __typename?: 'BlockOutput';
  base_fee_per_gas?: Maybe<Scalars['String']>;
  burnt_fee?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Float']>;
  extra_data?: Maybe<Scalars['String']>;
  gas_limit: Scalars['Float'];
  gas_target_percentage?: Maybe<Scalars['String']>;
  gas_used: Scalars['Float'];
  gas_used_percentage?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  logs_bloom?: Maybe<Scalars['String']>;
  mine_time?: Maybe<Scalars['Float']>;
  miner: Scalars['String'];
  nonce?: Maybe<Scalars['String']>;
  number: Scalars['Float'];
  parent_hash?: Maybe<Scalars['String']>;
  receipts_root?: Maybe<Scalars['String']>;
  reward?: Maybe<Scalars['String']>;
  sha3_uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  state_root?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
  total_difficulty?: Maybe<Scalars['String']>;
  transaction_count: Scalars['Float'];
  transactions_root?: Maybe<Scalars['String']>;
  txn_fees?: Maybe<Scalars['String']>;
  uncle_reward?: Maybe<Scalars['String']>;
  uncles_count?: Maybe<Scalars['String']>;
};

export type BlocksPageOutput = {
  __typename?: 'BlocksPageOutput';
  blocks: Array<BlockOutput>;
  networkUtilization: Scalars['Float'];
};

export type ContractOutput = {
  __typename?: 'ContractOutput';
  address: Scalars['String'];
  block_hash: Scalars['String'];
  block_number: Scalars['Float'];
  block_timestamp: Scalars['String'];
  bytecode: Scalars['String'];
  function_sighashes: Scalars['String'];
  is_erc20: Scalars['Boolean'];
  is_erc721?: Maybe<Scalars['Boolean']>;
  is_erc1155?: Maybe<Scalars['Boolean']>;
};

export type DashboardAnalyticsOutput = {
  __typename?: 'DashboardAnalyticsOutput';
  blockNumber?: Maybe<Scalars['Float']>;
  burntFeeSum?: Maybe<Scalars['String']>;
  chartData: Array<Array<Scalars['Float']>>;
  difficulty?: Maybe<Scalars['String']>;
  etherPriceBTC?: Maybe<Scalars['String']>;
  etherPriceUSD?: Maybe<Scalars['String']>;
  hashrate?: Maybe<Scalars['String']>;
  marketCapUSD?: Maybe<Scalars['String']>;
  medGasPrice?: Maybe<Scalars['String']>;
  networkBaseFee?: Maybe<Scalars['String']>;
  networkpriorityFee?: Maybe<Scalars['String']>;
  previous24hBlockNumber?: Maybe<Scalars['Float']>;
  pricePercentageChange?: Maybe<Scalars['String']>;
  totalTransactions?: Maybe<Scalars['String']>;
  tps?: Maybe<Scalars['String']>;
  transactionHistoryChart: Array<Scalars['Float']>;
};

export type LogOutput = {
  __typename?: 'LogOutput';
  address: Scalars['String'];
  block_hash: Scalars['String'];
  block_number: Scalars['Float'];
  block_timestamp: Scalars['String'];
  data?: Maybe<Scalars['String']>;
  log_index: Scalars['Float'];
  topic0?: Maybe<Scalars['String']>;
  topic1?: Maybe<Scalars['String']>;
  topic2?: Maybe<Scalars['String']>;
  topic3?: Maybe<Scalars['String']>;
  transaction_hash: Scalars['String'];
  transaction_index: Scalars['String'];
};

export type Metadata = {
  __typename?: 'Metadata';
  animation_url?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Attribute>>;
  background_color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  image_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  youtube_url?: Maybe<Scalars['String']>;
};

export type NftInput = {
  contractAddress?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
};

export type NftOutput = {
  __typename?: 'NFTOutput';
  block_number?: Maybe<Scalars['Float']>;
  block_number_hour?: Maybe<Scalars['Float']>;
  contract_address?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']>;
  owner_of?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  token_standard?: Maybe<Scalars['String']>;
  token_uri?: Maybe<Scalars['String']>;
};

export type PagesInput = {
  next?: InputMaybe<Scalars['Float']>;
  pageSize: Scalars['Float'];
  previous?: InputMaybe<Scalars['Float']>;
};

export type PaginationInput = {
  pageNo: Scalars['Float'];
  pageSize: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  dashboardAnalytics: DashboardAnalyticsOutput;
  getBlockByHash: Array<BlockOutput>;
  getBlockByNumber: BlockOutput;
  getBlocks: BlocksPageOutput;
  getContractByAddress: ContractOutput;
  getContractsByBlockNumber: Array<ContractOutput>;
  getLogByTransactionHash: Array<LogOutput>;
  getNFTByContractAddress: Array<NftOutput>;
  getTokenByContractAddress: TokenOutput;
  getTransactionByHash: TransactionsOutput;
  getTransactionByIndex: TransactionsOutput;
  getTransactions: Array<TransactionsOutput>;
  nfts: Array<NftOutput>;
  searchRaw: SearchOutput;
  transactions: Array<TransactionsOutput>;
};


export type QueryGetBlockByHashArgs = {
  data: Scalars['String'];
};


export type QueryGetBlockByNumberArgs = {
  data: Scalars['Float'];
};


export type QueryGetBlocksArgs = {
  data: PagesInput;
};


export type QueryGetContractByAddressArgs = {
  data: Scalars['String'];
};


export type QueryGetContractsByBlockNumberArgs = {
  data: Scalars['Float'];
};


export type QueryGetLogByTransactionHashArgs = {
  data: Scalars['String'];
};


export type QueryGetNftByContractAddressArgs = {
  input: NftInput;
};


export type QueryGetTokenByContractAddressArgs = {
  data: Scalars['String'];
};


export type QueryGetTransactionByHashArgs = {
  data: Scalars['String'];
};


export type QueryGetTransactionByIndexArgs = {
  data: TransactionByIndexInput;
};


export type QueryGetTransactionsArgs = {
  data: TransactionsPagesInput;
};


export type QuerySearchRawArgs = {
  data: Scalars['String'];
};


export type QueryTransactionsArgs = {
  data: TransactionsPagesInput;
};

export type SearchOutput = {
  __typename?: 'SearchOutput';
  block?: Maybe<BlockOutput>;
  transaction?: Maybe<TransactionsOutput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  blockAdded: BlockOutput;
  nftTransactions: Array<NftOutput>;
};

export type TokenOutput = {
  __typename?: 'TokenOutput';
  address: Scalars['String'];
  block_hash: Scalars['String'];
  block_number: Scalars['Float'];
  block_timestamp: Scalars['String'];
  decimal?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  total_supply: Scalars['String'];
};

export type TransactionByIndexInput = {
  blockHash: Scalars['String'];
  transactionIndex: Scalars['Float'];
};

export type TransactionsOutput = {
  __typename?: 'TransactionsOutput';
  baseFee?: Maybe<Scalars['String']>;
  block_hash: Scalars['String'];
  block_number: Scalars['Float'];
  block_timestamp: Scalars['String'];
  from_address?: Maybe<Scalars['String']>;
  gas: Scalars['Float'];
  gas_price: Scalars['String'];
  hash: Scalars['String'];
  input?: Maybe<Scalars['String']>;
  maxFee?: Maybe<Scalars['String']>;
  maxPriorityFee?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Float']>;
  parent_hash?: Maybe<Scalars['String']>;
  receipt_contract_address?: Maybe<Scalars['String']>;
  receipt_cumulative_gas_used?: Maybe<Scalars['Float']>;
  receipt_gas_used?: Maybe<Scalars['Float']>;
  receipt_root?: Maybe<Scalars['String']>;
  receipt_status?: Maybe<Scalars['Float']>;
  to_address?: Maybe<Scalars['String']>;
  transaction_fees?: Maybe<Scalars['String']>;
  transaction_fees_usd?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Float']>;
  txnBurntFee?: Maybe<Scalars['String']>;
  txnSavingFee?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  value_usd?: Maybe<Scalars['String']>;
};

export type TransactionsPagesInput = {
  blockHash?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['Float']>;
  pagesInput: PagesInput;
};

export type GetBlocksQueryVariables = Exact<{
  data: PagesInput;
}>;


export type GetBlocksQuery = { __typename?: 'Query', getBlocks: { __typename?: 'BlocksPageOutput', blocks: Array<{ __typename?: 'BlockOutput', number: number, timestamp: string, miner: string, transaction_count: number, hash: string, mine_time?: number | null, reward?: string | null }> } };

export type GetTransactionsQueryVariables = Exact<{
  transactionsdata: TransactionsPagesInput;
}>;


export type GetTransactionsQuery = { __typename?: 'Query', transactions: Array<{ __typename?: 'TransactionsOutput', hash: string, block_timestamp: string, from_address?: string | null, to_address?: string | null, value?: number | null }> };

export type GetPaginatedBlocksQueryVariables = Exact<{
  data: PagesInput;
}>;


export type GetPaginatedBlocksQuery = { __typename?: 'Query', getBlocks: { __typename?: 'BlocksPageOutput', networkUtilization: number, blocks: Array<{ __typename?: 'BlockOutput', number: number, timestamp: string, transaction_count: number, uncles_count?: string | null, miner: string, gas_used: number, gas_limit: number, base_fee_per_gas?: string | null, reward?: string | null, burnt_fee?: string | null, txn_fees?: string | null }> } };

export type GetPaginatedTransactionsQueryVariables = Exact<{
  transactionsdata: TransactionsPagesInput;
}>;


export type GetPaginatedTransactionsQuery = { __typename?: 'Query', transactions: Array<{ __typename?: 'TransactionsOutput', hash: string, method?: string | null, block_number: number, block_timestamp: string, from_address?: string | null, to_address?: string | null, value?: number | null, transaction_fees?: string | null, transaction_index?: number | null, block_hash: string }> };

export type GetBlockByNumberQueryVariables = Exact<{
  data: Scalars['Float'];
}>;


export type GetBlockByNumberQuery = { __typename?: 'Query', getBlockByNumber: { __typename?: 'BlockOutput', number: number, timestamp: string, transaction_count: number, mine_time?: number | null, miner: string, difficulty?: number | null, total_difficulty?: string | null, size?: number | null, gas_used: number, gas_limit: number, base_fee_per_gas?: string | null, burnt_fee?: string | null, extra_data?: string | null, reward?: string | null, uncle_reward?: string | null, txn_fees?: string | null, gas_target_percentage?: string | null, gas_used_percentage?: string | null, hash: string, parent_hash?: string | null, sha3_uncles?: string | null, nonce?: string | null } };

export type GetTransactionByHashQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetTransactionByHashQuery = { __typename?: 'Query', getTransactionByHash: { __typename?: 'TransactionsOutput', hash: string, block_hash: string, block_number: number, block_timestamp: string, from_address?: string | null, gas: number, gas_price: string, input?: string | null, nonce?: number | null, receipt_contract_address?: string | null, receipt_cumulative_gas_used?: number | null, receipt_gas_used?: number | null, receipt_root?: string | null, receipt_status?: number | null, to_address?: string | null, method?: string | null, transaction_fees_usd?: string | null, transaction_index?: number | null, value?: number | null, value_usd?: string | null, transaction_fees?: string | null, baseFee?: string | null, maxFee?: string | null, maxPriorityFee?: string | null, txnBurntFee?: string | null, txnSavingFee?: string | null } };

export type GetDashboardAnalyticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardAnalyticsQuery = { __typename?: 'Query', dashboardAnalytics: { __typename?: 'DashboardAnalyticsOutput', etherPriceUSD?: string | null, etherPriceBTC?: string | null, marketCapUSD?: string | null, difficulty?: string | null, hashrate?: string | null, tps?: string | null, medGasPrice?: string | null, totalTransactions?: string | null, blockNumber?: number | null, pricePercentageChange?: string | null, chartData: Array<Array<number>>, transactionHistoryChart: Array<number> } };

export type GetDashboardHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardHeaderQuery = { __typename?: 'Query', dashboardAnalytics: { __typename?: 'DashboardAnalyticsOutput', networkBaseFee?: string | null, networkpriorityFee?: string | null, pricePercentageChange?: string | null, etherPriceUSD?: string | null } };

export type GetDashboardBurntFeeSumQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardBurntFeeSumQuery = { __typename?: 'Query', dashboardAnalytics: { __typename?: 'DashboardAnalyticsOutput', burntFeeSum?: string | null } };

export type SearchRawQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type SearchRawQuery = { __typename?: 'Query', searchRaw: { __typename?: 'SearchOutput', block?: { __typename?: 'BlockOutput', number: number } | null, transaction?: { __typename?: 'TransactionsOutput', hash: string } | null } };


export const GetBlocksDocument = gql`
    query getBlocks($data: PagesInput!) {
  getBlocks(data: $data) {
    blocks {
      number
      timestamp
      miner
      transaction_count
      hash
      mine_time
      reward
    }
  }
}
    `;

/**
 * __useGetBlocksQuery__
 *
 * To run a query within a React component, call `useGetBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlocksQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetBlocksQuery(baseOptions: Apollo.QueryHookOptions<GetBlocksQuery, GetBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlocksQuery, GetBlocksQueryVariables>(GetBlocksDocument, options);
      }
export function useGetBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlocksQuery, GetBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlocksQuery, GetBlocksQueryVariables>(GetBlocksDocument, options);
        }
export type GetBlocksQueryHookResult = ReturnType<typeof useGetBlocksQuery>;
export type GetBlocksLazyQueryHookResult = ReturnType<typeof useGetBlocksLazyQuery>;
export type GetBlocksQueryResult = Apollo.QueryResult<GetBlocksQuery, GetBlocksQueryVariables>;
export const GetTransactionsDocument = gql`
    query getTransactions($transactionsdata: TransactionsPagesInput!) {
  transactions(data: $transactionsdata) {
    hash
    block_timestamp
    from_address
    to_address
    value
  }
}
    `;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *      transactionsdata: // value for 'transactionsdata'
 *   },
 * });
 */
export function useGetTransactionsQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, options);
      }
export function useGetTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, options);
        }
export type GetTransactionsQueryHookResult = ReturnType<typeof useGetTransactionsQuery>;
export type GetTransactionsLazyQueryHookResult = ReturnType<typeof useGetTransactionsLazyQuery>;
export type GetTransactionsQueryResult = Apollo.QueryResult<GetTransactionsQuery, GetTransactionsQueryVariables>;
export const GetPaginatedBlocksDocument = gql`
    query getPaginatedBlocks($data: PagesInput!) {
  getBlocks(data: $data) {
    networkUtilization
    blocks {
      number
      timestamp
      transaction_count
      uncles_count
      miner
      gas_used
      gas_limit
      base_fee_per_gas
      reward
      burnt_fee
      txn_fees
    }
  }
}
    `;

/**
 * __useGetPaginatedBlocksQuery__
 *
 * To run a query within a React component, call `useGetPaginatedBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedBlocksQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetPaginatedBlocksQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedBlocksQuery, GetPaginatedBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedBlocksQuery, GetPaginatedBlocksQueryVariables>(GetPaginatedBlocksDocument, options);
      }
export function useGetPaginatedBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedBlocksQuery, GetPaginatedBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedBlocksQuery, GetPaginatedBlocksQueryVariables>(GetPaginatedBlocksDocument, options);
        }
export type GetPaginatedBlocksQueryHookResult = ReturnType<typeof useGetPaginatedBlocksQuery>;
export type GetPaginatedBlocksLazyQueryHookResult = ReturnType<typeof useGetPaginatedBlocksLazyQuery>;
export type GetPaginatedBlocksQueryResult = Apollo.QueryResult<GetPaginatedBlocksQuery, GetPaginatedBlocksQueryVariables>;
export const GetPaginatedTransactionsDocument = gql`
    query getPaginatedTransactions($transactionsdata: TransactionsPagesInput!) {
  transactions(data: $transactionsdata) {
    hash
    method
    block_number
    block_timestamp
    from_address
    to_address
    value
    transaction_fees
    transaction_index
    block_hash
  }
}
    `;

/**
 * __useGetPaginatedTransactionsQuery__
 *
 * To run a query within a React component, call `useGetPaginatedTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedTransactionsQuery({
 *   variables: {
 *      transactionsdata: // value for 'transactionsdata'
 *   },
 * });
 */
export function useGetPaginatedTransactionsQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedTransactionsQuery, GetPaginatedTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedTransactionsQuery, GetPaginatedTransactionsQueryVariables>(GetPaginatedTransactionsDocument, options);
      }
export function useGetPaginatedTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedTransactionsQuery, GetPaginatedTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedTransactionsQuery, GetPaginatedTransactionsQueryVariables>(GetPaginatedTransactionsDocument, options);
        }
export type GetPaginatedTransactionsQueryHookResult = ReturnType<typeof useGetPaginatedTransactionsQuery>;
export type GetPaginatedTransactionsLazyQueryHookResult = ReturnType<typeof useGetPaginatedTransactionsLazyQuery>;
export type GetPaginatedTransactionsQueryResult = Apollo.QueryResult<GetPaginatedTransactionsQuery, GetPaginatedTransactionsQueryVariables>;
export const GetBlockByNumberDocument = gql`
    query getBlockByNumber($data: Float!) {
  getBlockByNumber(data: $data) {
    number
    timestamp
    transaction_count
    mine_time
    miner
    difficulty
    total_difficulty
    size
    gas_used
    gas_limit
    base_fee_per_gas
    burnt_fee
    extra_data
    reward
    uncle_reward
    txn_fees
    gas_target_percentage
    gas_used_percentage
    hash
    parent_hash
    sha3_uncles
    nonce
  }
}
    `;

/**
 * __useGetBlockByNumberQuery__
 *
 * To run a query within a React component, call `useGetBlockByNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlockByNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlockByNumberQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetBlockByNumberQuery(baseOptions: Apollo.QueryHookOptions<GetBlockByNumberQuery, GetBlockByNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlockByNumberQuery, GetBlockByNumberQueryVariables>(GetBlockByNumberDocument, options);
      }
export function useGetBlockByNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlockByNumberQuery, GetBlockByNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlockByNumberQuery, GetBlockByNumberQueryVariables>(GetBlockByNumberDocument, options);
        }
export type GetBlockByNumberQueryHookResult = ReturnType<typeof useGetBlockByNumberQuery>;
export type GetBlockByNumberLazyQueryHookResult = ReturnType<typeof useGetBlockByNumberLazyQuery>;
export type GetBlockByNumberQueryResult = Apollo.QueryResult<GetBlockByNumberQuery, GetBlockByNumberQueryVariables>;
export const GetTransactionByHashDocument = gql`
    query getTransactionByHash($data: String!) {
  getTransactionByHash(data: $data) {
    hash
    block_hash
    block_number
    block_timestamp
    from_address
    gas
    gas_price
    input
    nonce
    receipt_contract_address
    receipt_cumulative_gas_used
    receipt_gas_used
    receipt_root
    receipt_status
    to_address
    method
    transaction_fees_usd
    transaction_index
    value
    value_usd
    transaction_fees
    baseFee
    maxFee
    maxPriorityFee
    txnBurntFee
    txnSavingFee
    input
  }
}
    `;

/**
 * __useGetTransactionByHashQuery__
 *
 * To run a query within a React component, call `useGetTransactionByHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionByHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionByHashQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetTransactionByHashQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionByHashQuery, GetTransactionByHashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionByHashQuery, GetTransactionByHashQueryVariables>(GetTransactionByHashDocument, options);
      }
export function useGetTransactionByHashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionByHashQuery, GetTransactionByHashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionByHashQuery, GetTransactionByHashQueryVariables>(GetTransactionByHashDocument, options);
        }
export type GetTransactionByHashQueryHookResult = ReturnType<typeof useGetTransactionByHashQuery>;
export type GetTransactionByHashLazyQueryHookResult = ReturnType<typeof useGetTransactionByHashLazyQuery>;
export type GetTransactionByHashQueryResult = Apollo.QueryResult<GetTransactionByHashQuery, GetTransactionByHashQueryVariables>;
export const GetDashboardAnalyticsDocument = gql`
    query getDashboardAnalytics {
  dashboardAnalytics {
    etherPriceUSD
    etherPriceBTC
    marketCapUSD
    difficulty
    hashrate
    tps
    medGasPrice
    totalTransactions
    blockNumber
    pricePercentageChange
    chartData
    transactionHistoryChart
  }
}
    `;

/**
 * __useGetDashboardAnalyticsQuery__
 *
 * To run a query within a React component, call `useGetDashboardAnalyticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardAnalyticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardAnalyticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDashboardAnalyticsQuery(baseOptions?: Apollo.QueryHookOptions<GetDashboardAnalyticsQuery, GetDashboardAnalyticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardAnalyticsQuery, GetDashboardAnalyticsQueryVariables>(GetDashboardAnalyticsDocument, options);
      }
export function useGetDashboardAnalyticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardAnalyticsQuery, GetDashboardAnalyticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardAnalyticsQuery, GetDashboardAnalyticsQueryVariables>(GetDashboardAnalyticsDocument, options);
        }
export type GetDashboardAnalyticsQueryHookResult = ReturnType<typeof useGetDashboardAnalyticsQuery>;
export type GetDashboardAnalyticsLazyQueryHookResult = ReturnType<typeof useGetDashboardAnalyticsLazyQuery>;
export type GetDashboardAnalyticsQueryResult = Apollo.QueryResult<GetDashboardAnalyticsQuery, GetDashboardAnalyticsQueryVariables>;
export const GetDashboardHeaderDocument = gql`
    query getDashboardHeader {
  dashboardAnalytics {
    networkBaseFee
    networkpriorityFee
    pricePercentageChange
    etherPriceUSD
  }
}
    `;

/**
 * __useGetDashboardHeaderQuery__
 *
 * To run a query within a React component, call `useGetDashboardHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardHeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDashboardHeaderQuery(baseOptions?: Apollo.QueryHookOptions<GetDashboardHeaderQuery, GetDashboardHeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardHeaderQuery, GetDashboardHeaderQueryVariables>(GetDashboardHeaderDocument, options);
      }
export function useGetDashboardHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardHeaderQuery, GetDashboardHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardHeaderQuery, GetDashboardHeaderQueryVariables>(GetDashboardHeaderDocument, options);
        }
export type GetDashboardHeaderQueryHookResult = ReturnType<typeof useGetDashboardHeaderQuery>;
export type GetDashboardHeaderLazyQueryHookResult = ReturnType<typeof useGetDashboardHeaderLazyQuery>;
export type GetDashboardHeaderQueryResult = Apollo.QueryResult<GetDashboardHeaderQuery, GetDashboardHeaderQueryVariables>;
export const GetDashboardBurntFeeSumDocument = gql`
    query getDashboardBurntFeeSum {
  dashboardAnalytics {
    burntFeeSum
  }
}
    `;

/**
 * __useGetDashboardBurntFeeSumQuery__
 *
 * To run a query within a React component, call `useGetDashboardBurntFeeSumQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardBurntFeeSumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardBurntFeeSumQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDashboardBurntFeeSumQuery(baseOptions?: Apollo.QueryHookOptions<GetDashboardBurntFeeSumQuery, GetDashboardBurntFeeSumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardBurntFeeSumQuery, GetDashboardBurntFeeSumQueryVariables>(GetDashboardBurntFeeSumDocument, options);
      }
export function useGetDashboardBurntFeeSumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardBurntFeeSumQuery, GetDashboardBurntFeeSumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardBurntFeeSumQuery, GetDashboardBurntFeeSumQueryVariables>(GetDashboardBurntFeeSumDocument, options);
        }
export type GetDashboardBurntFeeSumQueryHookResult = ReturnType<typeof useGetDashboardBurntFeeSumQuery>;
export type GetDashboardBurntFeeSumLazyQueryHookResult = ReturnType<typeof useGetDashboardBurntFeeSumLazyQuery>;
export type GetDashboardBurntFeeSumQueryResult = Apollo.QueryResult<GetDashboardBurntFeeSumQuery, GetDashboardBurntFeeSumQueryVariables>;
export const SearchRawDocument = gql`
    query searchRaw($data: String!) {
  searchRaw(data: $data) {
    block {
      number
    }
    transaction {
      hash
    }
  }
}
    `;

/**
 * __useSearchRawQuery__
 *
 * To run a query within a React component, call `useSearchRawQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRawQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRawQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSearchRawQuery(baseOptions: Apollo.QueryHookOptions<SearchRawQuery, SearchRawQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRawQuery, SearchRawQueryVariables>(SearchRawDocument, options);
      }
export function useSearchRawLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRawQuery, SearchRawQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRawQuery, SearchRawQueryVariables>(SearchRawDocument, options);
        }
export type SearchRawQueryHookResult = ReturnType<typeof useSearchRawQuery>;
export type SearchRawLazyQueryHookResult = ReturnType<typeof useSearchRawLazyQuery>;
export type SearchRawQueryResult = Apollo.QueryResult<SearchRawQuery, SearchRawQueryVariables>;