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
  /**
   * Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.
   */
  BigInt: any;
  /**
   * Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"
   */
  Decimal: any;
  /**
   * Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).
   */
  Float32: any;
  /**
   * Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.
   */
  SmallInt: any;
  /**
   * Represents a CQL `timestamp` as a string.
   * This is an instantaneous point on the time-line.
   * This type supports many different string representations (see https://docs.datastax.com/en/cql-oss/3.x/cql/cql_reference/timestamp_type_r.html). A timestamp can also be input as a numeric literal, which will be interpreted as a number of milliseconds since the epoch (1970-01-01 UTC at midnight).
   * Examples: "2011-02-03 04:05+0000", 1296705900000
   * String literals that do not include any time zone information will be interpreted using the server's default time zone.
   */
  Timestamp: any;
  /**
   * Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.
   */
  TinyInt: any;
  /**
   * Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808
   */
  Varint: any;
};

export type BigIntFilterInput = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  notEq?: InputMaybe<Scalars['BigInt']>;
};

export type BooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  notEq?: InputMaybe<Scalars['Boolean']>;
};

export type DecimalFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  notEq?: InputMaybe<Scalars['Decimal']>;
};

export type FloatFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  notEq?: InputMaybe<Scalars['Float']>;
};

export type IntFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  notEq?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Bulk insert mutations for the table 'assets'.
   * Note that 'address', 'token_address', 'token_id', 'transaction_hash' and 'block_number' are the fields that correspond to the table primary key.
   */
  bulkInsertassets?: Maybe<Array<Maybe<AssetsMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'contract_abis'.
   * Note that 'contract_address' is the field that corresponds to the table primary key.
   */
  bulkInsertcontract_abis?: Maybe<Array<Maybe<Contract_AbisMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'contracts'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  bulkInsertcontracts?: Maybe<Array<Maybe<ContractsMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'dashboard_analytics'.
   * Note that 'id' is the field that corresponds to the table primary key.
   */
  bulkInsertdashboard_analytics?: Maybe<Array<Maybe<Dashboard_AnalyticsMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'eth_blocks'.
   * Note that 'blocks_group', 'number' and 'hash' are the fields that correspond to the table primary key.
   */
  bulkInserteth_blocks?: Maybe<Array<Maybe<Eth_BlocksMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'event_signatures'.
   * Note that 'event_hex' is the field that corresponds to the table primary key.
   */
  bulkInsertevent_signatures?: Maybe<Array<Maybe<Event_SignaturesMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'logs'.
   * Note that 'block_number', 'transaction_hash' and 'log_index' are the fields that correspond to the table primary key.
   */
  bulkInsertlogs?: Maybe<Array<Maybe<LogsMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'nfts'.
   * Note that 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  bulkInsertnfts?: Maybe<Array<Maybe<NftsMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'sorted_nfts'.
   * Note that 'block_number_hour', 'block_number', 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  bulkInsertsorted_nfts?: Maybe<Array<Maybe<Sorted_NftsMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'token_transfers'.
   * Note that 'transaction_hash', 'block_number' and 'log_index' are the fields that correspond to the table primary key.
   */
  bulkInserttoken_transfers?: Maybe<Array<Maybe<Token_TransfersMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'tokens'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  bulkInserttokens?: Maybe<Array<Maybe<TokensMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'traces'.
   * Note that 'block_number', 'transaction_hash' and 'internal_transaction_index' are the fields that correspond to the table primary key.
   */
  bulkInserttraces?: Maybe<Array<Maybe<TracesMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'transactions'.
   * Note that 'block_hash', 'transaction_index' and 'hash' are the fields that correspond to the table primary key.
   */
  bulkInserttransactions?: Maybe<Array<Maybe<TransactionsMutationResult>>>;
  /**
   * Bulk insert mutations for the table 'transactions_by_hash'.
   * Note that 'hash', 'transaction_index' and 'block_number' are the fields that correspond to the table primary key.
   */
  bulkInserttransactions_by_hash?: Maybe<Array<Maybe<Transactions_By_HashMutationResult>>>;
  /**
   * Delete mutation for the table 'assets'.
   * Note that 'address', 'token_address', 'token_id', 'transaction_hash' and 'block_number' are the fields that correspond to the table primary key.
   */
  deleteassets?: Maybe<AssetsMutationResult>;
  /**
   * Delete mutation for the table 'contract_abis'.
   * Note that 'contract_address' is the field that corresponds to the table primary key.
   */
  deletecontract_abis?: Maybe<Contract_AbisMutationResult>;
  /**
   * Delete mutation for the table 'contracts'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  deletecontracts?: Maybe<ContractsMutationResult>;
  /**
   * Delete mutation for the table 'dashboard_analytics'.
   * Note that 'id' is the field that corresponds to the table primary key.
   */
  deletedashboard_analytics?: Maybe<Dashboard_AnalyticsMutationResult>;
  /**
   * Delete mutation for the table 'eth_blocks'.
   * Note that 'blocks_group', 'number' and 'hash' are the fields that correspond to the table primary key.
   */
  deleteeth_blocks?: Maybe<Eth_BlocksMutationResult>;
  /**
   * Delete mutation for the table 'event_signatures'.
   * Note that 'event_hex' is the field that corresponds to the table primary key.
   */
  deleteevent_signatures?: Maybe<Event_SignaturesMutationResult>;
  /**
   * Delete mutation for the table 'logs'.
   * Note that 'block_number', 'transaction_hash' and 'log_index' are the fields that correspond to the table primary key.
   */
  deletelogs?: Maybe<LogsMutationResult>;
  /**
   * Delete mutation for the table 'nfts'.
   * Note that 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  deletenfts?: Maybe<NftsMutationResult>;
  /**
   * Delete mutation for the table 'sorted_nfts'.
   * Note that 'block_number_hour', 'block_number', 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  deletesorted_nfts?: Maybe<Sorted_NftsMutationResult>;
  /**
   * Delete mutation for the table 'token_transfers'.
   * Note that 'transaction_hash', 'block_number' and 'log_index' are the fields that correspond to the table primary key.
   */
  deletetoken_transfers?: Maybe<Token_TransfersMutationResult>;
  /**
   * Delete mutation for the table 'tokens'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  deletetokens?: Maybe<TokensMutationResult>;
  /**
   * Delete mutation for the table 'traces'.
   * Note that 'block_number', 'transaction_hash' and 'internal_transaction_index' are the fields that correspond to the table primary key.
   */
  deletetraces?: Maybe<TracesMutationResult>;
  /**
   * Delete mutation for the table 'transactions'.
   * Note that 'block_hash', 'transaction_index' and 'hash' are the fields that correspond to the table primary key.
   */
  deletetransactions?: Maybe<TransactionsMutationResult>;
  /**
   * Delete mutation for the table 'transactions_by_hash'.
   * Note that 'hash', 'transaction_index' and 'block_number' are the fields that correspond to the table primary key.
   */
  deletetransactions_by_hash?: Maybe<Transactions_By_HashMutationResult>;
  /**
   * Insert mutation for the table 'assets'.
   * Note that 'address', 'token_address', 'token_id', 'transaction_hash' and 'block_number' are the fields that correspond to the table primary key.
   */
  insertassets?: Maybe<AssetsMutationResult>;
  /**
   * Insert mutation for the table 'contract_abis'.
   * Note that 'contract_address' is the field that corresponds to the table primary key.
   */
  insertcontract_abis?: Maybe<Contract_AbisMutationResult>;
  /**
   * Insert mutation for the table 'contracts'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  insertcontracts?: Maybe<ContractsMutationResult>;
  /**
   * Insert mutation for the table 'dashboard_analytics'.
   * Note that 'id' is the field that corresponds to the table primary key.
   */
  insertdashboard_analytics?: Maybe<Dashboard_AnalyticsMutationResult>;
  /**
   * Insert mutation for the table 'eth_blocks'.
   * Note that 'blocks_group', 'number' and 'hash' are the fields that correspond to the table primary key.
   */
  inserteth_blocks?: Maybe<Eth_BlocksMutationResult>;
  /**
   * Insert mutation for the table 'event_signatures'.
   * Note that 'event_hex' is the field that corresponds to the table primary key.
   */
  insertevent_signatures?: Maybe<Event_SignaturesMutationResult>;
  /**
   * Insert mutation for the table 'logs'.
   * Note that 'block_number', 'transaction_hash' and 'log_index' are the fields that correspond to the table primary key.
   */
  insertlogs?: Maybe<LogsMutationResult>;
  /**
   * Insert mutation for the table 'nfts'.
   * Note that 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  insertnfts?: Maybe<NftsMutationResult>;
  /**
   * Insert mutation for the table 'sorted_nfts'.
   * Note that 'block_number_hour', 'block_number', 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  insertsorted_nfts?: Maybe<Sorted_NftsMutationResult>;
  /**
   * Insert mutation for the table 'token_transfers'.
   * Note that 'transaction_hash', 'block_number' and 'log_index' are the fields that correspond to the table primary key.
   */
  inserttoken_transfers?: Maybe<Token_TransfersMutationResult>;
  /**
   * Insert mutation for the table 'tokens'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  inserttokens?: Maybe<TokensMutationResult>;
  /**
   * Insert mutation for the table 'traces'.
   * Note that 'block_number', 'transaction_hash' and 'internal_transaction_index' are the fields that correspond to the table primary key.
   */
  inserttraces?: Maybe<TracesMutationResult>;
  /**
   * Insert mutation for the table 'transactions'.
   * Note that 'block_hash', 'transaction_index' and 'hash' are the fields that correspond to the table primary key.
   */
  inserttransactions?: Maybe<TransactionsMutationResult>;
  /**
   * Insert mutation for the table 'transactions_by_hash'.
   * Note that 'hash', 'transaction_index' and 'block_number' are the fields that correspond to the table primary key.
   */
  inserttransactions_by_hash?: Maybe<Transactions_By_HashMutationResult>;
  /**
   * Update mutation for the table 'assets'.
   * Note that 'address', 'token_address', 'token_id', 'transaction_hash' and 'block_number' are the fields that correspond to the table primary key.
   */
  updateassets?: Maybe<AssetsMutationResult>;
  /**
   * Update mutation for the table 'contract_abis'.
   * Note that 'contract_address' is the field that corresponds to the table primary key.
   */
  updatecontract_abis?: Maybe<Contract_AbisMutationResult>;
  /**
   * Update mutation for the table 'contracts'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  updatecontracts?: Maybe<ContractsMutationResult>;
  /**
   * Update mutation for the table 'dashboard_analytics'.
   * Note that 'id' is the field that corresponds to the table primary key.
   */
  updatedashboard_analytics?: Maybe<Dashboard_AnalyticsMutationResult>;
  /**
   * Update mutation for the table 'eth_blocks'.
   * Note that 'blocks_group', 'number' and 'hash' are the fields that correspond to the table primary key.
   */
  updateeth_blocks?: Maybe<Eth_BlocksMutationResult>;
  /**
   * Update mutation for the table 'event_signatures'.
   * Note that 'event_hex' is the field that corresponds to the table primary key.
   */
  updateevent_signatures?: Maybe<Event_SignaturesMutationResult>;
  /**
   * Update mutation for the table 'logs'.
   * Note that 'block_number', 'transaction_hash' and 'log_index' are the fields that correspond to the table primary key.
   */
  updatelogs?: Maybe<LogsMutationResult>;
  /**
   * Update mutation for the table 'nfts'.
   * Note that 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  updatenfts?: Maybe<NftsMutationResult>;
  /**
   * Update mutation for the table 'sorted_nfts'.
   * Note that 'block_number_hour', 'block_number', 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  updatesorted_nfts?: Maybe<Sorted_NftsMutationResult>;
  /**
   * Update mutation for the table 'token_transfers'.
   * Note that 'transaction_hash', 'block_number' and 'log_index' are the fields that correspond to the table primary key.
   */
  updatetoken_transfers?: Maybe<Token_TransfersMutationResult>;
  /**
   * Update mutation for the table 'tokens'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  updatetokens?: Maybe<TokensMutationResult>;
  /**
   * Update mutation for the table 'traces'.
   * Note that 'block_number', 'transaction_hash' and 'internal_transaction_index' are the fields that correspond to the table primary key.
   */
  updatetraces?: Maybe<TracesMutationResult>;
  /**
   * Update mutation for the table 'transactions'.
   * Note that 'block_hash', 'transaction_index' and 'hash' are the fields that correspond to the table primary key.
   */
  updatetransactions?: Maybe<TransactionsMutationResult>;
  /**
   * Update mutation for the table 'transactions_by_hash'.
   * Note that 'hash', 'transaction_index' and 'block_number' are the fields that correspond to the table primary key.
   */
  updatetransactions_by_hash?: Maybe<Transactions_By_HashMutationResult>;
};


export type MutationBulkInsertassetsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<AssetsInput>>;
};


export type MutationBulkInsertcontract_AbisArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<Contract_AbisInput>>;
};


export type MutationBulkInsertcontractsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<ContractsInput>>;
};


export type MutationBulkInsertdashboard_AnalyticsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<Dashboard_AnalyticsInput>>;
};


export type MutationBulkInserteth_BlocksArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<Eth_BlocksInput>>;
};


export type MutationBulkInsertevent_SignaturesArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<Event_SignaturesInput>>;
};


export type MutationBulkInsertlogsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<LogsInput>>;
};


export type MutationBulkInsertnftsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<NftsInput>>;
};


export type MutationBulkInsertsorted_NftsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<Sorted_NftsInput>>;
};


export type MutationBulkInserttoken_TransfersArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<Token_TransfersInput>>;
};


export type MutationBulkInserttokensArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<TokensInput>>;
};


export type MutationBulkInserttracesArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<TracesInput>>;
};


export type MutationBulkInserttransactionsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<TransactionsInput>>;
};


export type MutationBulkInserttransactions_By_HashArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  values?: InputMaybe<Array<Transactions_By_HashInput>>;
};


export type MutationDeleteassetsArgs = {
  ifCondition?: InputMaybe<AssetsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: AssetsInput;
};


export type MutationDeletecontract_AbisArgs = {
  ifCondition?: InputMaybe<Contract_AbisFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Contract_AbisInput;
};


export type MutationDeletecontractsArgs = {
  ifCondition?: InputMaybe<ContractsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: ContractsInput;
};


export type MutationDeletedashboard_AnalyticsArgs = {
  ifCondition?: InputMaybe<Dashboard_AnalyticsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Dashboard_AnalyticsInput;
};


export type MutationDeleteeth_BlocksArgs = {
  ifCondition?: InputMaybe<Eth_BlocksFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Eth_BlocksInput;
};


export type MutationDeleteevent_SignaturesArgs = {
  ifCondition?: InputMaybe<Event_SignaturesFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Event_SignaturesInput;
};


export type MutationDeletelogsArgs = {
  ifCondition?: InputMaybe<LogsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: LogsInput;
};


export type MutationDeletenftsArgs = {
  ifCondition?: InputMaybe<NftsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: NftsInput;
};


export type MutationDeletesorted_NftsArgs = {
  ifCondition?: InputMaybe<Sorted_NftsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Sorted_NftsInput;
};


export type MutationDeletetoken_TransfersArgs = {
  ifCondition?: InputMaybe<Token_TransfersFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Token_TransfersInput;
};


export type MutationDeletetokensArgs = {
  ifCondition?: InputMaybe<TokensFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TokensInput;
};


export type MutationDeletetracesArgs = {
  ifCondition?: InputMaybe<TracesFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TracesInput;
};


export type MutationDeletetransactionsArgs = {
  ifCondition?: InputMaybe<TransactionsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TransactionsInput;
};


export type MutationDeletetransactions_By_HashArgs = {
  ifCondition?: InputMaybe<Transactions_By_HashFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Transactions_By_HashInput;
};


export type MutationInsertassetsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: AssetsInput;
};


export type MutationInsertcontract_AbisArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Contract_AbisInput;
};


export type MutationInsertcontractsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: ContractsInput;
};


export type MutationInsertdashboard_AnalyticsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Dashboard_AnalyticsInput;
};


export type MutationInserteth_BlocksArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Eth_BlocksInput;
};


export type MutationInsertevent_SignaturesArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Event_SignaturesInput;
};


export type MutationInsertlogsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: LogsInput;
};


export type MutationInsertnftsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: NftsInput;
};


export type MutationInsertsorted_NftsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Sorted_NftsInput;
};


export type MutationInserttoken_TransfersArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Token_TransfersInput;
};


export type MutationInserttokensArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TokensInput;
};


export type MutationInserttracesArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TracesInput;
};


export type MutationInserttransactionsArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TransactionsInput;
};


export type MutationInserttransactions_By_HashArgs = {
  ifNotExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Transactions_By_HashInput;
};


export type MutationUpdateassetsArgs = {
  ifCondition?: InputMaybe<AssetsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: AssetsInput;
};


export type MutationUpdatecontract_AbisArgs = {
  ifCondition?: InputMaybe<Contract_AbisFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Contract_AbisInput;
};


export type MutationUpdatecontractsArgs = {
  ifCondition?: InputMaybe<ContractsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: ContractsInput;
};


export type MutationUpdatedashboard_AnalyticsArgs = {
  ifCondition?: InputMaybe<Dashboard_AnalyticsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Dashboard_AnalyticsInput;
};


export type MutationUpdateeth_BlocksArgs = {
  ifCondition?: InputMaybe<Eth_BlocksFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Eth_BlocksInput;
};


export type MutationUpdateevent_SignaturesArgs = {
  ifCondition?: InputMaybe<Event_SignaturesFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Event_SignaturesInput;
};


export type MutationUpdatelogsArgs = {
  ifCondition?: InputMaybe<LogsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: LogsInput;
};


export type MutationUpdatenftsArgs = {
  ifCondition?: InputMaybe<NftsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: NftsInput;
};


export type MutationUpdatesorted_NftsArgs = {
  ifCondition?: InputMaybe<Sorted_NftsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Sorted_NftsInput;
};


export type MutationUpdatetoken_TransfersArgs = {
  ifCondition?: InputMaybe<Token_TransfersFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Token_TransfersInput;
};


export type MutationUpdatetokensArgs = {
  ifCondition?: InputMaybe<TokensFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TokensInput;
};


export type MutationUpdatetracesArgs = {
  ifCondition?: InputMaybe<TracesFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TracesInput;
};


export type MutationUpdatetransactionsArgs = {
  ifCondition?: InputMaybe<TransactionsFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: TransactionsInput;
};


export type MutationUpdatetransactions_By_HashArgs = {
  ifCondition?: InputMaybe<Transactions_By_HashFilterInput>;
  ifExists?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MutationOptions>;
  value: Transactions_By_HashInput;
};

export enum MutationConsistency {
  All = 'ALL',
  LocalOne = 'LOCAL_ONE',
  LocalQuorum = 'LOCAL_QUORUM'
}

/** The execution options for the mutation. */
export type MutationOptions = {
  consistency?: InputMaybe<MutationConsistency>;
  serialConsistency?: InputMaybe<SerialConsistency>;
  ttl?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /**
   * Query for the table 'assets'.
   * Note that 'address', 'token_address', 'token_id', 'transaction_hash' and 'block_number' are the fields that correspond to the table primary key.
   */
  assets?: Maybe<AssetsResult>;
  /** @deprecated No longer supported. Use root type instead. */
  assetsFilter?: Maybe<AssetsResult>;
  /**
   * Query for the table 'contract_abis'.
   * Note that 'contract_address' is the field that corresponds to the table primary key.
   */
  contract_abis?: Maybe<Contract_AbisResult>;
  /** @deprecated No longer supported. Use root type instead. */
  contract_abisFilter?: Maybe<Contract_AbisResult>;
  /**
   * Query for the table 'contracts'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  contracts?: Maybe<ContractsResult>;
  /** @deprecated No longer supported. Use root type instead. */
  contractsFilter?: Maybe<ContractsResult>;
  /**
   * Warnings encountered during the CQL to GraphQL conversion.
   * No warnings found, this will return an empty list.
   */
  conversionWarnings?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Query for the table 'dashboard_analytics'.
   * Note that 'id' is the field that corresponds to the table primary key.
   */
  dashboard_analytics?: Maybe<Dashboard_AnalyticsResult>;
  /** @deprecated No longer supported. Use root type instead. */
  dashboard_analyticsFilter?: Maybe<Dashboard_AnalyticsResult>;
  /**
   * Query for the table 'eth_blocks'.
   * Note that 'blocks_group', 'number' and 'hash' are the fields that correspond to the table primary key.
   */
  eth_blocks?: Maybe<Eth_BlocksResult>;
  /** @deprecated No longer supported. Use root type instead. */
  eth_blocksFilter?: Maybe<Eth_BlocksResult>;
  /**
   * Query for the table 'event_signatures'.
   * Note that 'event_hex' is the field that corresponds to the table primary key.
   */
  event_signatures?: Maybe<Event_SignaturesResult>;
  /** @deprecated No longer supported. Use root type instead. */
  event_signaturesFilter?: Maybe<Event_SignaturesResult>;
  /**
   * Query for the table 'logs'.
   * Note that 'block_number', 'transaction_hash' and 'log_index' are the fields that correspond to the table primary key.
   */
  logs?: Maybe<LogsResult>;
  /** @deprecated No longer supported. Use root type instead. */
  logsFilter?: Maybe<LogsResult>;
  /**
   * Query for the table 'nfts'.
   * Note that 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  nfts?: Maybe<NftsResult>;
  /** @deprecated No longer supported. Use root type instead. */
  nftsFilter?: Maybe<NftsResult>;
  /**
   * Query for the table 'sorted_nfts'.
   * Note that 'block_number_hour', 'block_number', 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
   */
  sorted_nfts?: Maybe<Sorted_NftsResult>;
  /** @deprecated No longer supported. Use root type instead. */
  sorted_nftsFilter?: Maybe<Sorted_NftsResult>;
  /**
   * Query for the table 'token_transfers'.
   * Note that 'transaction_hash', 'block_number' and 'log_index' are the fields that correspond to the table primary key.
   */
  token_transfers?: Maybe<Token_TransfersResult>;
  /** @deprecated No longer supported. Use root type instead. */
  token_transfersFilter?: Maybe<Token_TransfersResult>;
  /**
   * Query for the table 'tokens'.
   * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
   */
  tokens?: Maybe<TokensResult>;
  /** @deprecated No longer supported. Use root type instead. */
  tokensFilter?: Maybe<TokensResult>;
  /**
   * Query for the table 'traces'.
   * Note that 'block_number', 'transaction_hash' and 'internal_transaction_index' are the fields that correspond to the table primary key.
   */
  traces?: Maybe<TracesResult>;
  /** @deprecated No longer supported. Use root type instead. */
  tracesFilter?: Maybe<TracesResult>;
  /**
   * Query for the table 'transactions'.
   * Note that 'block_hash', 'transaction_index' and 'hash' are the fields that correspond to the table primary key.
   */
  transactions?: Maybe<TransactionsResult>;
  /** @deprecated No longer supported. Use root type instead. */
  transactionsFilter?: Maybe<TransactionsResult>;
  /**
   * Query for the table 'transactions_by_hash'.
   * Note that 'hash', 'transaction_index' and 'block_number' are the fields that correspond to the table primary key.
   */
  transactions_by_hash?: Maybe<Transactions_By_HashResult>;
  /** @deprecated No longer supported. Use root type instead. */
  transactions_by_hashFilter?: Maybe<Transactions_By_HashResult>;
};


export type QueryAssetsArgs = {
  filter?: InputMaybe<AssetsFilterInput>;
  groupBy?: InputMaybe<AssetsGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<AssetsOrder>>>;
  value?: InputMaybe<AssetsInput>;
};


export type QueryAssetsFilterArgs = {
  filter?: InputMaybe<AssetsFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<AssetsOrder>>>;
};


export type QueryContract_AbisArgs = {
  filter?: InputMaybe<Contract_AbisFilterInput>;
  groupBy?: InputMaybe<Contract_AbisGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Contract_AbisOrder>>>;
  value?: InputMaybe<Contract_AbisInput>;
};


export type QueryContract_AbisFilterArgs = {
  filter?: InputMaybe<Contract_AbisFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Contract_AbisOrder>>>;
};


export type QueryContractsArgs = {
  filter?: InputMaybe<ContractsFilterInput>;
  groupBy?: InputMaybe<ContractsGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<ContractsOrder>>>;
  value?: InputMaybe<ContractsInput>;
};


export type QueryContractsFilterArgs = {
  filter?: InputMaybe<ContractsFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<ContractsOrder>>>;
};


export type QueryDashboard_AnalyticsArgs = {
  filter?: InputMaybe<Dashboard_AnalyticsFilterInput>;
  groupBy?: InputMaybe<Dashboard_AnalyticsGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Dashboard_AnalyticsOrder>>>;
  value?: InputMaybe<Dashboard_AnalyticsInput>;
};


export type QueryDashboard_AnalyticsFilterArgs = {
  filter?: InputMaybe<Dashboard_AnalyticsFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Dashboard_AnalyticsOrder>>>;
};


export type QueryEth_BlocksArgs = {
  filter?: InputMaybe<Eth_BlocksFilterInput>;
  groupBy?: InputMaybe<Eth_BlocksGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Eth_BlocksOrder>>>;
  value?: InputMaybe<Eth_BlocksInput>;
};


export type QueryEth_BlocksFilterArgs = {
  filter?: InputMaybe<Eth_BlocksFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Eth_BlocksOrder>>>;
};


export type QueryEvent_SignaturesArgs = {
  filter?: InputMaybe<Event_SignaturesFilterInput>;
  groupBy?: InputMaybe<Event_SignaturesGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Event_SignaturesOrder>>>;
  value?: InputMaybe<Event_SignaturesInput>;
};


export type QueryEvent_SignaturesFilterArgs = {
  filter?: InputMaybe<Event_SignaturesFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Event_SignaturesOrder>>>;
};


export type QueryLogsArgs = {
  filter?: InputMaybe<LogsFilterInput>;
  groupBy?: InputMaybe<LogsGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<LogsOrder>>>;
  value?: InputMaybe<LogsInput>;
};


export type QueryLogsFilterArgs = {
  filter?: InputMaybe<LogsFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<LogsOrder>>>;
};


export type QueryNftsArgs = {
  filter?: InputMaybe<NftsFilterInput>;
  groupBy?: InputMaybe<NftsGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<NftsOrder>>>;
  value?: InputMaybe<NftsInput>;
};


export type QueryNftsFilterArgs = {
  filter?: InputMaybe<NftsFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<NftsOrder>>>;
};


export type QuerySorted_NftsArgs = {
  filter?: InputMaybe<Sorted_NftsFilterInput>;
  groupBy?: InputMaybe<Sorted_NftsGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Sorted_NftsOrder>>>;
  value?: InputMaybe<Sorted_NftsInput>;
};


export type QuerySorted_NftsFilterArgs = {
  filter?: InputMaybe<Sorted_NftsFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Sorted_NftsOrder>>>;
};


export type QueryToken_TransfersArgs = {
  filter?: InputMaybe<Token_TransfersFilterInput>;
  groupBy?: InputMaybe<Token_TransfersGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Token_TransfersOrder>>>;
  value?: InputMaybe<Token_TransfersInput>;
};


export type QueryToken_TransfersFilterArgs = {
  filter?: InputMaybe<Token_TransfersFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Token_TransfersOrder>>>;
};


export type QueryTokensArgs = {
  filter?: InputMaybe<TokensFilterInput>;
  groupBy?: InputMaybe<TokensGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<TokensOrder>>>;
  value?: InputMaybe<TokensInput>;
};


export type QueryTokensFilterArgs = {
  filter?: InputMaybe<TokensFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<TokensOrder>>>;
};


export type QueryTracesArgs = {
  filter?: InputMaybe<TracesFilterInput>;
  groupBy?: InputMaybe<TracesGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<TracesOrder>>>;
  value?: InputMaybe<TracesInput>;
};


export type QueryTracesFilterArgs = {
  filter?: InputMaybe<TracesFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<TracesOrder>>>;
};


export type QueryTransactionsArgs = {
  filter?: InputMaybe<TransactionsFilterInput>;
  groupBy?: InputMaybe<TransactionsGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<TransactionsOrder>>>;
  value?: InputMaybe<TransactionsInput>;
};


export type QueryTransactionsFilterArgs = {
  filter?: InputMaybe<TransactionsFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<TransactionsOrder>>>;
};


export type QueryTransactions_By_HashArgs = {
  filter?: InputMaybe<Transactions_By_HashFilterInput>;
  groupBy?: InputMaybe<Transactions_By_HashGroupByInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Transactions_By_HashOrder>>>;
  value?: InputMaybe<Transactions_By_HashInput>;
};


export type QueryTransactions_By_HashFilterArgs = {
  filter?: InputMaybe<Transactions_By_HashFilterInput>;
  options?: InputMaybe<QueryOptions>;
  orderBy?: InputMaybe<Array<InputMaybe<Transactions_By_HashOrder>>>;
};

export enum QueryConsistency {
  All = 'ALL',
  LocalOne = 'LOCAL_ONE',
  LocalQuorum = 'LOCAL_QUORUM',
  LocalSerial = 'LOCAL_SERIAL',
  Serial = 'SERIAL'
}

/** The execution options for the query. */
export type QueryOptions = {
  consistency?: InputMaybe<QueryConsistency>;
  limit?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  pageState?: InputMaybe<Scalars['String']>;
};

export enum SerialConsistency {
  LocalSerial = 'LOCAL_SERIAL',
  Serial = 'SERIAL'
}

export type StringFilterInput = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  notEq?: InputMaybe<Scalars['String']>;
};

export type TimestampFilterInput = {
  eq?: InputMaybe<Scalars['Timestamp']>;
  gt?: InputMaybe<Scalars['Timestamp']>;
  gte?: InputMaybe<Scalars['Timestamp']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Timestamp']>>>;
  lt?: InputMaybe<Scalars['Timestamp']>;
  lte?: InputMaybe<Scalars['Timestamp']>;
  notEq?: InputMaybe<Scalars['Timestamp']>;
};

/** The type used to represent results of a query for the table 'assets'. */
export type Assets = {
  __typename?: 'assets';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['BigInt']>;
  is_contract?: Maybe<Scalars['Boolean']>;
  token_address?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
  token_standard?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};


/** The type used to represent results of a query for the table 'assets'. */
export type Assets_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'assets'. */
export type Assets_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'assets'. */
export type Assets_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'assets'. */
export type Assets_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'assets'. */
export type Assets_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'assets'. */
export type Assets_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'assets'. */
export type Assets_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'assets'. */
export type Assets_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'assets'.
 * Note that 'address', 'token_address', 'token_id', 'transaction_hash' and 'block_number' are the fields that correspond to the table primary key.
 */
export type AssetsFilterInput = {
  address?: InputMaybe<StringFilterInput>;
  balance?: InputMaybe<StringFilterInput>;
  block_number?: InputMaybe<BigIntFilterInput>;
  is_contract?: InputMaybe<BooleanFilterInput>;
  token_address?: InputMaybe<StringFilterInput>;
  token_id?: InputMaybe<StringFilterInput>;
  token_name?: InputMaybe<StringFilterInput>;
  token_standard?: InputMaybe<StringFilterInput>;
  transaction_hash?: InputMaybe<StringFilterInput>;
};

export type AssetsGroupByInput = {
  address?: InputMaybe<Scalars['Boolean']>;
  block_number?: InputMaybe<Scalars['Boolean']>;
  token_address?: InputMaybe<Scalars['Boolean']>;
  token_id?: InputMaybe<Scalars['Boolean']>;
  transaction_hash?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'assets'.
 * Note that 'address', 'token_address', 'token_id', 'transaction_hash' and 'block_number' are the fields that correspond to the table primary key.
 */
export type AssetsInput = {
  address?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['BigInt']>;
  is_contract?: InputMaybe<Scalars['Boolean']>;
  token_address?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  token_name?: InputMaybe<Scalars['String']>;
  token_standard?: InputMaybe<Scalars['String']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
};

/** The type used to represent results of a mutation for the table 'assets'. */
export type AssetsMutationResult = {
  __typename?: 'assetsMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Assets>;
};

/** The enum used to order a query result based on one or more fields for the table 'assets'. */
export enum AssetsOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  BalanceAsc = 'balance_ASC',
  BalanceDesc = 'balance_DESC',
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  IsContractAsc = 'is_contract_ASC',
  IsContractDesc = 'is_contract_DESC',
  TokenAddressAsc = 'token_address_ASC',
  TokenAddressDesc = 'token_address_DESC',
  TokenIdAsc = 'token_id_ASC',
  TokenIdDesc = 'token_id_DESC',
  TokenNameAsc = 'token_name_ASC',
  TokenNameDesc = 'token_name_DESC',
  TokenStandardAsc = 'token_standard_ASC',
  TokenStandardDesc = 'token_standard_DESC',
  TransactionHashAsc = 'transaction_hash_ASC',
  TransactionHashDesc = 'transaction_hash_DESC'
}

export type AssetsResult = {
  __typename?: 'assetsResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Assets>>;
};

/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis = {
  __typename?: 'contract_abis';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  contract_address?: Maybe<Scalars['String']>;
  events?: Maybe<Scalars['String']>;
  functions?: Maybe<Scalars['String']>;
  is_proxy?: Maybe<Scalars['Boolean']>;
  proxy_address?: Maybe<Scalars['String']>;
};


/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contract_abis'. */
export type Contract_Abis_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'contract_abis'.
 * Note that 'contract_address' is the field that corresponds to the table primary key.
 */
export type Contract_AbisFilterInput = {
  contract_address?: InputMaybe<StringFilterInput>;
  events?: InputMaybe<StringFilterInput>;
  functions?: InputMaybe<StringFilterInput>;
  is_proxy?: InputMaybe<BooleanFilterInput>;
  proxy_address?: InputMaybe<StringFilterInput>;
};

export type Contract_AbisGroupByInput = {
  contract_address?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'contract_abis'.
 * Note that 'contract_address' is the field that corresponds to the table primary key.
 */
export type Contract_AbisInput = {
  contract_address?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Scalars['String']>;
  functions?: InputMaybe<Scalars['String']>;
  is_proxy?: InputMaybe<Scalars['Boolean']>;
  proxy_address?: InputMaybe<Scalars['String']>;
};

/** The type used to represent results of a mutation for the table 'contract_abis'. */
export type Contract_AbisMutationResult = {
  __typename?: 'contract_abisMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Contract_Abis>;
};

/** The enum used to order a query result based on one or more fields for the table 'contract_abis'. */
export enum Contract_AbisOrder {
  ContractAddressAsc = 'contract_address_ASC',
  ContractAddressDesc = 'contract_address_DESC',
  EventsAsc = 'events_ASC',
  EventsDesc = 'events_DESC',
  FunctionsAsc = 'functions_ASC',
  FunctionsDesc = 'functions_DESC',
  IsProxyAsc = 'is_proxy_ASC',
  IsProxyDesc = 'is_proxy_DESC',
  ProxyAddressAsc = 'proxy_address_ASC',
  ProxyAddressDesc = 'proxy_address_DESC'
}

export type Contract_AbisResult = {
  __typename?: 'contract_abisResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Contract_Abis>>;
};

/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts = {
  __typename?: 'contracts';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  address?: Maybe<Scalars['String']>;
  block_hash?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['BigInt']>;
  block_timestamp?: Maybe<Scalars['Timestamp']>;
  bytecode?: Maybe<Scalars['String']>;
  function_sighashes?: Maybe<Scalars['String']>;
  is_erc20?: Maybe<Scalars['Boolean']>;
  is_erc721?: Maybe<Scalars['Boolean']>;
  is_erc1155?: Maybe<Scalars['Boolean']>;
};


/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'contracts'. */
export type Contracts_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'contracts'.
 * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
 */
export type ContractsFilterInput = {
  address?: InputMaybe<StringFilterInput>;
  block_hash?: InputMaybe<StringFilterInput>;
  block_number?: InputMaybe<BigIntFilterInput>;
  block_timestamp?: InputMaybe<TimestampFilterInput>;
  bytecode?: InputMaybe<StringFilterInput>;
  function_sighashes?: InputMaybe<StringFilterInput>;
  is_erc20?: InputMaybe<BooleanFilterInput>;
  is_erc721?: InputMaybe<BooleanFilterInput>;
  is_erc1155?: InputMaybe<BooleanFilterInput>;
};

export type ContractsGroupByInput = {
  address?: InputMaybe<Scalars['Boolean']>;
  block_number?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'contracts'.
 * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
 */
export type ContractsInput = {
  address?: InputMaybe<Scalars['String']>;
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['BigInt']>;
  block_timestamp?: InputMaybe<Scalars['Timestamp']>;
  bytecode?: InputMaybe<Scalars['String']>;
  function_sighashes?: InputMaybe<Scalars['String']>;
  is_erc20?: InputMaybe<Scalars['Boolean']>;
  is_erc721?: InputMaybe<Scalars['Boolean']>;
  is_erc1155?: InputMaybe<Scalars['Boolean']>;
};

/** The type used to represent results of a mutation for the table 'contracts'. */
export type ContractsMutationResult = {
  __typename?: 'contractsMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Contracts>;
};

/** The enum used to order a query result based on one or more fields for the table 'contracts'. */
export enum ContractsOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  BytecodeAsc = 'bytecode_ASC',
  BytecodeDesc = 'bytecode_DESC',
  FunctionSighashesAsc = 'function_sighashes_ASC',
  FunctionSighashesDesc = 'function_sighashes_DESC',
  IsErc20Asc = 'is_erc20_ASC',
  IsErc20Desc = 'is_erc20_DESC',
  IsErc721Asc = 'is_erc721_ASC',
  IsErc721Desc = 'is_erc721_DESC',
  IsErc1155Asc = 'is_erc1155_ASC',
  IsErc1155Desc = 'is_erc1155_DESC'
}

export type ContractsResult = {
  __typename?: 'contractsResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Contracts>>;
};

/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics = {
  __typename?: 'dashboard_analytics';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  block_number?: Maybe<Scalars['BigInt']>;
  chart_data?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['String']>;
  ether_price_btc?: Maybe<Scalars['String']>;
  ether_price_usd?: Maybe<Scalars['String']>;
  hashrate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  latest_blocks_group?: Maybe<Scalars['BigInt']>;
  market_cap_usd?: Maybe<Scalars['String']>;
  med_gas_price?: Maybe<Scalars['String']>;
  network_base_fee?: Maybe<Scalars['String']>;
  network_priority_fee?: Maybe<Scalars['String']>;
  previous_24h_block_number?: Maybe<Scalars['BigInt']>;
  price_percentage_change?: Maybe<Scalars['String']>;
  sum_of_burnt_fees?: Maybe<Scalars['String']>;
  total_transactions?: Maybe<Scalars['String']>;
  tps?: Maybe<Scalars['String']>;
  transactions_history_chart?: Maybe<Scalars['String']>;
};


/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'dashboard_analytics'. */
export type Dashboard_Analytics_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'dashboard_analytics'.
 * Note that 'id' is the field that corresponds to the table primary key.
 */
export type Dashboard_AnalyticsFilterInput = {
  block_number?: InputMaybe<BigIntFilterInput>;
  chart_data?: InputMaybe<StringFilterInput>;
  difficulty?: InputMaybe<StringFilterInput>;
  ether_price_btc?: InputMaybe<StringFilterInput>;
  ether_price_usd?: InputMaybe<StringFilterInput>;
  hashrate?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<BigIntFilterInput>;
  latest_blocks_group?: InputMaybe<BigIntFilterInput>;
  market_cap_usd?: InputMaybe<StringFilterInput>;
  med_gas_price?: InputMaybe<StringFilterInput>;
  network_base_fee?: InputMaybe<StringFilterInput>;
  network_priority_fee?: InputMaybe<StringFilterInput>;
  previous_24h_block_number?: InputMaybe<BigIntFilterInput>;
  price_percentage_change?: InputMaybe<StringFilterInput>;
  sum_of_burnt_fees?: InputMaybe<StringFilterInput>;
  total_transactions?: InputMaybe<StringFilterInput>;
  tps?: InputMaybe<StringFilterInput>;
  transactions_history_chart?: InputMaybe<StringFilterInput>;
};

export type Dashboard_AnalyticsGroupByInput = {
  id?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'dashboard_analytics'.
 * Note that 'id' is the field that corresponds to the table primary key.
 */
export type Dashboard_AnalyticsInput = {
  block_number?: InputMaybe<Scalars['BigInt']>;
  chart_data?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Scalars['String']>;
  ether_price_btc?: InputMaybe<Scalars['String']>;
  ether_price_usd?: InputMaybe<Scalars['String']>;
  hashrate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  latest_blocks_group?: InputMaybe<Scalars['BigInt']>;
  market_cap_usd?: InputMaybe<Scalars['String']>;
  med_gas_price?: InputMaybe<Scalars['String']>;
  network_base_fee?: InputMaybe<Scalars['String']>;
  network_priority_fee?: InputMaybe<Scalars['String']>;
  previous_24h_block_number?: InputMaybe<Scalars['BigInt']>;
  price_percentage_change?: InputMaybe<Scalars['String']>;
  sum_of_burnt_fees?: InputMaybe<Scalars['String']>;
  total_transactions?: InputMaybe<Scalars['String']>;
  tps?: InputMaybe<Scalars['String']>;
  transactions_history_chart?: InputMaybe<Scalars['String']>;
};

/** The type used to represent results of a mutation for the table 'dashboard_analytics'. */
export type Dashboard_AnalyticsMutationResult = {
  __typename?: 'dashboard_analyticsMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Dashboard_Analytics>;
};

/** The enum used to order a query result based on one or more fields for the table 'dashboard_analytics'. */
export enum Dashboard_AnalyticsOrder {
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  ChartDataAsc = 'chart_data_ASC',
  ChartDataDesc = 'chart_data_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  EtherPriceBtcAsc = 'ether_price_btc_ASC',
  EtherPriceBtcDesc = 'ether_price_btc_DESC',
  EtherPriceUsdAsc = 'ether_price_usd_ASC',
  EtherPriceUsdDesc = 'ether_price_usd_DESC',
  HashrateAsc = 'hashrate_ASC',
  HashrateDesc = 'hashrate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LatestBlocksGroupAsc = 'latest_blocks_group_ASC',
  LatestBlocksGroupDesc = 'latest_blocks_group_DESC',
  MarketCapUsdAsc = 'market_cap_usd_ASC',
  MarketCapUsdDesc = 'market_cap_usd_DESC',
  MedGasPriceAsc = 'med_gas_price_ASC',
  MedGasPriceDesc = 'med_gas_price_DESC',
  NetworkBaseFeeAsc = 'network_base_fee_ASC',
  NetworkBaseFeeDesc = 'network_base_fee_DESC',
  NetworkPriorityFeeAsc = 'network_priority_fee_ASC',
  NetworkPriorityFeeDesc = 'network_priority_fee_DESC',
  Previous_24hBlockNumberAsc = 'previous_24h_block_number_ASC',
  Previous_24hBlockNumberDesc = 'previous_24h_block_number_DESC',
  PricePercentageChangeAsc = 'price_percentage_change_ASC',
  PricePercentageChangeDesc = 'price_percentage_change_DESC',
  SumOfBurntFeesAsc = 'sum_of_burnt_fees_ASC',
  SumOfBurntFeesDesc = 'sum_of_burnt_fees_DESC',
  TotalTransactionsAsc = 'total_transactions_ASC',
  TotalTransactionsDesc = 'total_transactions_DESC',
  TpsAsc = 'tps_ASC',
  TpsDesc = 'tps_DESC',
  TransactionsHistoryChartAsc = 'transactions_history_chart_ASC',
  TransactionsHistoryChartDesc = 'transactions_history_chart_DESC'
}

export type Dashboard_AnalyticsResult = {
  __typename?: 'dashboard_analyticsResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Dashboard_Analytics>>;
};

/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks = {
  __typename?: 'eth_blocks';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  base_fee_per_gas?: Maybe<Scalars['String']>;
  blocks_difficulty?: Maybe<Scalars['Float']>;
  blocks_group?: Maybe<Scalars['BigInt']>;
  blocks_total_difficulty?: Maybe<Scalars['Float']>;
  burnt_fees?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Decimal']>;
  extra_data?: Maybe<Scalars['String']>;
  gas_limit?: Maybe<Scalars['BigInt']>;
  gas_target_percentage?: Maybe<Scalars['String']>;
  gas_used?: Maybe<Scalars['BigInt']>;
  gas_used_percentage?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  int_txn_count?: Maybe<Scalars['BigInt']>;
  logs_bloom?: Maybe<Scalars['String']>;
  mine_time?: Maybe<Scalars['BigInt']>;
  miner?: Maybe<Scalars['String']>;
  miners_name?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['BigInt']>;
  parent_hash?: Maybe<Scalars['String']>;
  receipts_root?: Maybe<Scalars['String']>;
  reward?: Maybe<Scalars['String']>;
  sha3_uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['BigInt']>;
  state_root?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  total_difficulty?: Maybe<Scalars['Decimal']>;
  transaction_count?: Maybe<Scalars['BigInt']>;
  transactions_root?: Maybe<Scalars['String']>;
  txn_fees?: Maybe<Scalars['String']>;
  uncle_reward?: Maybe<Scalars['String']>;
  uncles_count?: Maybe<Scalars['BigInt']>;
};


/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'eth_blocks'. */
export type Eth_Blocks_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'eth_blocks'.
 * Note that 'blocks_group', 'number' and 'hash' are the fields that correspond to the table primary key.
 */
export type Eth_BlocksFilterInput = {
  base_fee_per_gas?: InputMaybe<StringFilterInput>;
  blocks_difficulty?: InputMaybe<FloatFilterInput>;
  blocks_group?: InputMaybe<BigIntFilterInput>;
  blocks_total_difficulty?: InputMaybe<FloatFilterInput>;
  burnt_fees?: InputMaybe<StringFilterInput>;
  difficulty?: InputMaybe<DecimalFilterInput>;
  extra_data?: InputMaybe<StringFilterInput>;
  gas_limit?: InputMaybe<BigIntFilterInput>;
  gas_target_percentage?: InputMaybe<StringFilterInput>;
  gas_used?: InputMaybe<BigIntFilterInput>;
  gas_used_percentage?: InputMaybe<StringFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  int_txn_count?: InputMaybe<BigIntFilterInput>;
  logs_bloom?: InputMaybe<StringFilterInput>;
  mine_time?: InputMaybe<BigIntFilterInput>;
  miner?: InputMaybe<StringFilterInput>;
  miners_name?: InputMaybe<StringFilterInput>;
  nonce?: InputMaybe<StringFilterInput>;
  number?: InputMaybe<BigIntFilterInput>;
  parent_hash?: InputMaybe<StringFilterInput>;
  receipts_root?: InputMaybe<StringFilterInput>;
  reward?: InputMaybe<StringFilterInput>;
  sha3_uncles?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<BigIntFilterInput>;
  state_root?: InputMaybe<StringFilterInput>;
  timestamp?: InputMaybe<StringFilterInput>;
  total_difficulty?: InputMaybe<DecimalFilterInput>;
  transaction_count?: InputMaybe<BigIntFilterInput>;
  transactions_root?: InputMaybe<StringFilterInput>;
  txn_fees?: InputMaybe<StringFilterInput>;
  uncle_reward?: InputMaybe<StringFilterInput>;
  uncles_count?: InputMaybe<BigIntFilterInput>;
};

export type Eth_BlocksGroupByInput = {
  blocks_group?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['Boolean']>;
  number?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'eth_blocks'.
 * Note that 'blocks_group', 'number' and 'hash' are the fields that correspond to the table primary key.
 */
export type Eth_BlocksInput = {
  base_fee_per_gas?: InputMaybe<Scalars['String']>;
  blocks_difficulty?: InputMaybe<Scalars['Float']>;
  blocks_group?: InputMaybe<Scalars['BigInt']>;
  blocks_total_difficulty?: InputMaybe<Scalars['Float']>;
  burnt_fees?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Scalars['Decimal']>;
  extra_data?: InputMaybe<Scalars['String']>;
  gas_limit?: InputMaybe<Scalars['BigInt']>;
  gas_target_percentage?: InputMaybe<Scalars['String']>;
  gas_used?: InputMaybe<Scalars['BigInt']>;
  gas_used_percentage?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  int_txn_count?: InputMaybe<Scalars['BigInt']>;
  logs_bloom?: InputMaybe<Scalars['String']>;
  mine_time?: InputMaybe<Scalars['BigInt']>;
  miner?: InputMaybe<Scalars['String']>;
  miners_name?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['BigInt']>;
  parent_hash?: InputMaybe<Scalars['String']>;
  receipts_root?: InputMaybe<Scalars['String']>;
  reward?: InputMaybe<Scalars['String']>;
  sha3_uncles?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['BigInt']>;
  state_root?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['String']>;
  total_difficulty?: InputMaybe<Scalars['Decimal']>;
  transaction_count?: InputMaybe<Scalars['BigInt']>;
  transactions_root?: InputMaybe<Scalars['String']>;
  txn_fees?: InputMaybe<Scalars['String']>;
  uncle_reward?: InputMaybe<Scalars['String']>;
  uncles_count?: InputMaybe<Scalars['BigInt']>;
};

/** The type used to represent results of a mutation for the table 'eth_blocks'. */
export type Eth_BlocksMutationResult = {
  __typename?: 'eth_blocksMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Eth_Blocks>;
};

/** The enum used to order a query result based on one or more fields for the table 'eth_blocks'. */
export enum Eth_BlocksOrder {
  BaseFeePerGasAsc = 'base_fee_per_gas_ASC',
  BaseFeePerGasDesc = 'base_fee_per_gas_DESC',
  BlocksDifficultyAsc = 'blocks_difficulty_ASC',
  BlocksDifficultyDesc = 'blocks_difficulty_DESC',
  BlocksGroupAsc = 'blocks_group_ASC',
  BlocksGroupDesc = 'blocks_group_DESC',
  BlocksTotalDifficultyAsc = 'blocks_total_difficulty_ASC',
  BlocksTotalDifficultyDesc = 'blocks_total_difficulty_DESC',
  BurntFeesAsc = 'burnt_fees_ASC',
  BurntFeesDesc = 'burnt_fees_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  ExtraDataAsc = 'extra_data_ASC',
  ExtraDataDesc = 'extra_data_DESC',
  GasLimitAsc = 'gas_limit_ASC',
  GasLimitDesc = 'gas_limit_DESC',
  GasTargetPercentageAsc = 'gas_target_percentage_ASC',
  GasTargetPercentageDesc = 'gas_target_percentage_DESC',
  GasUsedAsc = 'gas_used_ASC',
  GasUsedDesc = 'gas_used_DESC',
  GasUsedPercentageAsc = 'gas_used_percentage_ASC',
  GasUsedPercentageDesc = 'gas_used_percentage_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  IntTxnCountAsc = 'int_txn_count_ASC',
  IntTxnCountDesc = 'int_txn_count_DESC',
  LogsBloomAsc = 'logs_bloom_ASC',
  LogsBloomDesc = 'logs_bloom_DESC',
  MineTimeAsc = 'mine_time_ASC',
  MineTimeDesc = 'mine_time_DESC',
  MinerAsc = 'miner_ASC',
  MinerDesc = 'miner_DESC',
  MinersNameAsc = 'miners_name_ASC',
  MinersNameDesc = 'miners_name_DESC',
  NonceAsc = 'nonce_ASC',
  NonceDesc = 'nonce_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  ParentHashAsc = 'parent_hash_ASC',
  ParentHashDesc = 'parent_hash_DESC',
  ReceiptsRootAsc = 'receipts_root_ASC',
  ReceiptsRootDesc = 'receipts_root_DESC',
  RewardAsc = 'reward_ASC',
  RewardDesc = 'reward_DESC',
  Sha3UnclesAsc = 'sha3_uncles_ASC',
  Sha3UnclesDesc = 'sha3_uncles_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  StateRootAsc = 'state_root_ASC',
  StateRootDesc = 'state_root_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  TotalDifficultyAsc = 'total_difficulty_ASC',
  TotalDifficultyDesc = 'total_difficulty_DESC',
  TransactionCountAsc = 'transaction_count_ASC',
  TransactionCountDesc = 'transaction_count_DESC',
  TransactionsRootAsc = 'transactions_root_ASC',
  TransactionsRootDesc = 'transactions_root_DESC',
  TxnFeesAsc = 'txn_fees_ASC',
  TxnFeesDesc = 'txn_fees_DESC',
  UncleRewardAsc = 'uncle_reward_ASC',
  UncleRewardDesc = 'uncle_reward_DESC',
  UnclesCountAsc = 'uncles_count_ASC',
  UnclesCountDesc = 'uncles_count_DESC'
}

export type Eth_BlocksResult = {
  __typename?: 'eth_blocksResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Eth_Blocks>>;
};

/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures = {
  __typename?: 'event_signatures';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  event_hex?: Maybe<Scalars['String']>;
  event_name?: Maybe<Scalars['String']>;
  event_signature?: Maybe<Scalars['String']>;
};


/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'event_signatures'. */
export type Event_Signatures_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'event_signatures'.
 * Note that 'event_hex' is the field that corresponds to the table primary key.
 */
export type Event_SignaturesFilterInput = {
  event_hex?: InputMaybe<StringFilterInput>;
  event_name?: InputMaybe<StringFilterInput>;
  event_signature?: InputMaybe<StringFilterInput>;
};

export type Event_SignaturesGroupByInput = {
  event_hex?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'event_signatures'.
 * Note that 'event_hex' is the field that corresponds to the table primary key.
 */
export type Event_SignaturesInput = {
  event_hex?: InputMaybe<Scalars['String']>;
  event_name?: InputMaybe<Scalars['String']>;
  event_signature?: InputMaybe<Scalars['String']>;
};

/** The type used to represent results of a mutation for the table 'event_signatures'. */
export type Event_SignaturesMutationResult = {
  __typename?: 'event_signaturesMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Event_Signatures>;
};

/** The enum used to order a query result based on one or more fields for the table 'event_signatures'. */
export enum Event_SignaturesOrder {
  EventHexAsc = 'event_hex_ASC',
  EventHexDesc = 'event_hex_DESC',
  EventNameAsc = 'event_name_ASC',
  EventNameDesc = 'event_name_DESC',
  EventSignatureAsc = 'event_signature_ASC',
  EventSignatureDesc = 'event_signature_DESC'
}

export type Event_SignaturesResult = {
  __typename?: 'event_signaturesResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Event_Signatures>>;
};

/** The type used to represent results of a query for the table 'logs'. */
export type Logs = {
  __typename?: 'logs';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  address?: Maybe<Scalars['String']>;
  block_hash?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['BigInt']>;
  block_timestamp?: Maybe<Scalars['Timestamp']>;
  data?: Maybe<Scalars['String']>;
  decoded_data?: Maybe<Scalars['String']>;
  log_index?: Maybe<Scalars['BigInt']>;
  topic0?: Maybe<Scalars['String']>;
  topic1?: Maybe<Scalars['String']>;
  topic2?: Maybe<Scalars['String']>;
  topic3?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['BigInt']>;
};


/** The type used to represent results of a query for the table 'logs'. */
export type Logs_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'logs'. */
export type Logs_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'logs'. */
export type Logs_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'logs'. */
export type Logs_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'logs'. */
export type Logs_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'logs'. */
export type Logs_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'logs'. */
export type Logs_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'logs'. */
export type Logs_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'logs'.
 * Note that 'block_number', 'transaction_hash' and 'log_index' are the fields that correspond to the table primary key.
 */
export type LogsFilterInput = {
  address?: InputMaybe<StringFilterInput>;
  block_hash?: InputMaybe<StringFilterInput>;
  block_number?: InputMaybe<BigIntFilterInput>;
  block_timestamp?: InputMaybe<TimestampFilterInput>;
  data?: InputMaybe<StringFilterInput>;
  decoded_data?: InputMaybe<StringFilterInput>;
  log_index?: InputMaybe<BigIntFilterInput>;
  topic0?: InputMaybe<StringFilterInput>;
  topic1?: InputMaybe<StringFilterInput>;
  topic2?: InputMaybe<StringFilterInput>;
  topic3?: InputMaybe<StringFilterInput>;
  transaction_hash?: InputMaybe<StringFilterInput>;
  transaction_index?: InputMaybe<BigIntFilterInput>;
};

export type LogsGroupByInput = {
  block_number?: InputMaybe<Scalars['Boolean']>;
  log_index?: InputMaybe<Scalars['Boolean']>;
  transaction_hash?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'logs'.
 * Note that 'block_number', 'transaction_hash' and 'log_index' are the fields that correspond to the table primary key.
 */
export type LogsInput = {
  address?: InputMaybe<Scalars['String']>;
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['BigInt']>;
  block_timestamp?: InputMaybe<Scalars['Timestamp']>;
  data?: InputMaybe<Scalars['String']>;
  decoded_data?: InputMaybe<Scalars['String']>;
  log_index?: InputMaybe<Scalars['BigInt']>;
  topic0?: InputMaybe<Scalars['String']>;
  topic1?: InputMaybe<Scalars['String']>;
  topic2?: InputMaybe<Scalars['String']>;
  topic3?: InputMaybe<Scalars['String']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['BigInt']>;
};

/** The type used to represent results of a mutation for the table 'logs'. */
export type LogsMutationResult = {
  __typename?: 'logsMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Logs>;
};

/** The enum used to order a query result based on one or more fields for the table 'logs'. */
export enum LogsOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  DataAsc = 'data_ASC',
  DataDesc = 'data_DESC',
  DecodedDataAsc = 'decoded_data_ASC',
  DecodedDataDesc = 'decoded_data_DESC',
  LogIndexAsc = 'log_index_ASC',
  LogIndexDesc = 'log_index_DESC',
  Topic0Asc = 'topic0_ASC',
  Topic0Desc = 'topic0_DESC',
  Topic1Asc = 'topic1_ASC',
  Topic1Desc = 'topic1_DESC',
  Topic2Asc = 'topic2_ASC',
  Topic2Desc = 'topic2_DESC',
  Topic3Asc = 'topic3_ASC',
  Topic3Desc = 'topic3_DESC',
  TransactionHashAsc = 'transaction_hash_ASC',
  TransactionHashDesc = 'transaction_hash_DESC',
  TransactionIndexAsc = 'transaction_index_ASC',
  TransactionIndexDesc = 'transaction_index_DESC'
}

export type LogsResult = {
  __typename?: 'logsResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Logs>>;
};

/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts = {
  __typename?: 'nfts';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  block_number?: Maybe<Scalars['BigInt']>;
  contract_address?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_of?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  token_standard?: Maybe<Scalars['String']>;
  token_uri?: Maybe<Scalars['String']>;
};


/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'nfts'. */
export type Nfts_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'nfts'.
 * Note that 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
 */
export type NftsFilterInput = {
  block_number?: InputMaybe<BigIntFilterInput>;
  contract_address?: InputMaybe<StringFilterInput>;
  metadata?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  owner_of?: InputMaybe<StringFilterInput>;
  symbol?: InputMaybe<StringFilterInput>;
  token_id?: InputMaybe<StringFilterInput>;
  token_standard?: InputMaybe<StringFilterInput>;
  token_uri?: InputMaybe<StringFilterInput>;
};

export type NftsGroupByInput = {
  contract_address?: InputMaybe<Scalars['Boolean']>;
  token_id?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'nfts'.
 * Note that 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
 */
export type NftsInput = {
  block_number?: InputMaybe<Scalars['BigInt']>;
  contract_address?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  owner_of?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  token_standard?: InputMaybe<Scalars['String']>;
  token_uri?: InputMaybe<Scalars['String']>;
};

/** The type used to represent results of a mutation for the table 'nfts'. */
export type NftsMutationResult = {
  __typename?: 'nftsMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Nfts>;
};

/** The enum used to order a query result based on one or more fields for the table 'nfts'. */
export enum NftsOrder {
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  ContractAddressAsc = 'contract_address_ASC',
  ContractAddressDesc = 'contract_address_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OwnerOfAsc = 'owner_of_ASC',
  OwnerOfDesc = 'owner_of_DESC',
  SymbolAsc = 'symbol_ASC',
  SymbolDesc = 'symbol_DESC',
  TokenIdAsc = 'token_id_ASC',
  TokenIdDesc = 'token_id_DESC',
  TokenStandardAsc = 'token_standard_ASC',
  TokenStandardDesc = 'token_standard_DESC',
  TokenUriAsc = 'token_uri_ASC',
  TokenUriDesc = 'token_uri_DESC'
}

export type NftsResult = {
  __typename?: 'nftsResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Nfts>>;
};

/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts = {
  __typename?: 'sorted_nfts';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  block_number?: Maybe<Scalars['BigInt']>;
  block_number_hour?: Maybe<Scalars['BigInt']>;
  contract_address?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_of?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  token_standard?: Maybe<Scalars['String']>;
  token_uri?: Maybe<Scalars['String']>;
};


/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'sorted_nfts'. */
export type Sorted_Nfts_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'sorted_nfts'.
 * Note that 'block_number_hour', 'block_number', 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
 */
export type Sorted_NftsFilterInput = {
  block_number?: InputMaybe<BigIntFilterInput>;
  block_number_hour?: InputMaybe<BigIntFilterInput>;
  contract_address?: InputMaybe<StringFilterInput>;
  metadata?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  owner_of?: InputMaybe<StringFilterInput>;
  symbol?: InputMaybe<StringFilterInput>;
  token_id?: InputMaybe<StringFilterInput>;
  token_standard?: InputMaybe<StringFilterInput>;
  token_uri?: InputMaybe<StringFilterInput>;
};

export type Sorted_NftsGroupByInput = {
  block_number?: InputMaybe<Scalars['Boolean']>;
  block_number_hour?: InputMaybe<Scalars['Boolean']>;
  contract_address?: InputMaybe<Scalars['Boolean']>;
  token_id?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'sorted_nfts'.
 * Note that 'block_number_hour', 'block_number', 'contract_address' and 'token_id' are the fields that correspond to the table primary key.
 */
export type Sorted_NftsInput = {
  block_number?: InputMaybe<Scalars['BigInt']>;
  block_number_hour?: InputMaybe<Scalars['BigInt']>;
  contract_address?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  owner_of?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  token_standard?: InputMaybe<Scalars['String']>;
  token_uri?: InputMaybe<Scalars['String']>;
};

/** The type used to represent results of a mutation for the table 'sorted_nfts'. */
export type Sorted_NftsMutationResult = {
  __typename?: 'sorted_nftsMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Sorted_Nfts>;
};

/** The enum used to order a query result based on one or more fields for the table 'sorted_nfts'. */
export enum Sorted_NftsOrder {
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  BlockNumberHourAsc = 'block_number_hour_ASC',
  BlockNumberHourDesc = 'block_number_hour_DESC',
  ContractAddressAsc = 'contract_address_ASC',
  ContractAddressDesc = 'contract_address_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OwnerOfAsc = 'owner_of_ASC',
  OwnerOfDesc = 'owner_of_DESC',
  SymbolAsc = 'symbol_ASC',
  SymbolDesc = 'symbol_DESC',
  TokenIdAsc = 'token_id_ASC',
  TokenIdDesc = 'token_id_DESC',
  TokenStandardAsc = 'token_standard_ASC',
  TokenStandardDesc = 'token_standard_DESC',
  TokenUriAsc = 'token_uri_ASC',
  TokenUriDesc = 'token_uri_DESC'
}

export type Sorted_NftsResult = {
  __typename?: 'sorted_nftsResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Sorted_Nfts>>;
};

/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers = {
  __typename?: 'token_transfers';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  block_number?: Maybe<Scalars['BigInt']>;
  from_address?: Maybe<Scalars['String']>;
  is_erc20?: Maybe<Scalars['Boolean']>;
  is_erc721?: Maybe<Scalars['Boolean']>;
  is_erc1155?: Maybe<Scalars['Boolean']>;
  log_index?: Maybe<Scalars['BigInt']>;
  to_address?: Maybe<Scalars['String']>;
  token_address?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Decimal']>;
};


/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'token_transfers'. */
export type Token_Transfers_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'token_transfers'.
 * Note that 'transaction_hash', 'block_number' and 'log_index' are the fields that correspond to the table primary key.
 */
export type Token_TransfersFilterInput = {
  block_number?: InputMaybe<BigIntFilterInput>;
  from_address?: InputMaybe<StringFilterInput>;
  is_erc20?: InputMaybe<BooleanFilterInput>;
  is_erc721?: InputMaybe<BooleanFilterInput>;
  is_erc1155?: InputMaybe<BooleanFilterInput>;
  log_index?: InputMaybe<BigIntFilterInput>;
  to_address?: InputMaybe<StringFilterInput>;
  token_address?: InputMaybe<StringFilterInput>;
  transaction_hash?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<DecimalFilterInput>;
};

export type Token_TransfersGroupByInput = {
  block_number?: InputMaybe<Scalars['Boolean']>;
  log_index?: InputMaybe<Scalars['Boolean']>;
  transaction_hash?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'token_transfers'.
 * Note that 'transaction_hash', 'block_number' and 'log_index' are the fields that correspond to the table primary key.
 */
export type Token_TransfersInput = {
  block_number?: InputMaybe<Scalars['BigInt']>;
  from_address?: InputMaybe<Scalars['String']>;
  is_erc20?: InputMaybe<Scalars['Boolean']>;
  is_erc721?: InputMaybe<Scalars['Boolean']>;
  is_erc1155?: InputMaybe<Scalars['Boolean']>;
  log_index?: InputMaybe<Scalars['BigInt']>;
  to_address?: InputMaybe<Scalars['String']>;
  token_address?: InputMaybe<Scalars['String']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Decimal']>;
};

/** The type used to represent results of a mutation for the table 'token_transfers'. */
export type Token_TransfersMutationResult = {
  __typename?: 'token_transfersMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Token_Transfers>;
};

/** The enum used to order a query result based on one or more fields for the table 'token_transfers'. */
export enum Token_TransfersOrder {
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  FromAddressAsc = 'from_address_ASC',
  FromAddressDesc = 'from_address_DESC',
  IsErc20Asc = 'is_erc20_ASC',
  IsErc20Desc = 'is_erc20_DESC',
  IsErc721Asc = 'is_erc721_ASC',
  IsErc721Desc = 'is_erc721_DESC',
  IsErc1155Asc = 'is_erc1155_ASC',
  IsErc1155Desc = 'is_erc1155_DESC',
  LogIndexAsc = 'log_index_ASC',
  LogIndexDesc = 'log_index_DESC',
  ToAddressAsc = 'to_address_ASC',
  ToAddressDesc = 'to_address_DESC',
  TokenAddressAsc = 'token_address_ASC',
  TokenAddressDesc = 'token_address_DESC',
  TransactionHashAsc = 'transaction_hash_ASC',
  TransactionHashDesc = 'transaction_hash_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type Token_TransfersResult = {
  __typename?: 'token_transfersResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Token_Transfers>>;
};

/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens = {
  __typename?: 'tokens';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  address?: Maybe<Scalars['String']>;
  block_hash?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['BigInt']>;
  block_timestamp?: Maybe<Scalars['Timestamp']>;
  decimals?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  total_supply?: Maybe<Scalars['String']>;
};


/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'tokens'. */
export type Tokens_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'tokens'.
 * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
 */
export type TokensFilterInput = {
  address?: InputMaybe<StringFilterInput>;
  block_hash?: InputMaybe<StringFilterInput>;
  block_number?: InputMaybe<BigIntFilterInput>;
  block_timestamp?: InputMaybe<TimestampFilterInput>;
  decimals?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  symbol?: InputMaybe<StringFilterInput>;
  total_supply?: InputMaybe<StringFilterInput>;
};

export type TokensGroupByInput = {
  address?: InputMaybe<Scalars['Boolean']>;
  block_number?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'tokens'.
 * Note that 'address' and 'block_number' are the fields that correspond to the table primary key.
 */
export type TokensInput = {
  address?: InputMaybe<Scalars['String']>;
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['BigInt']>;
  block_timestamp?: InputMaybe<Scalars['Timestamp']>;
  decimals?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  total_supply?: InputMaybe<Scalars['String']>;
};

/** The type used to represent results of a mutation for the table 'tokens'. */
export type TokensMutationResult = {
  __typename?: 'tokensMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Tokens>;
};

/** The enum used to order a query result based on one or more fields for the table 'tokens'. */
export enum TokensOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  DecimalsAsc = 'decimals_ASC',
  DecimalsDesc = 'decimals_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SymbolAsc = 'symbol_ASC',
  SymbolDesc = 'symbol_DESC',
  TotalSupplyAsc = 'total_supply_ASC',
  TotalSupplyDesc = 'total_supply_DESC'
}

export type TokensResult = {
  __typename?: 'tokensResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Tokens>>;
};

/** The type used to represent results of a query for the table 'traces'. */
export type Traces = {
  __typename?: 'traces';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  block_hash?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['BigInt']>;
  block_timestamp?: Maybe<Scalars['Timestamp']>;
  call_type?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  from_address?: Maybe<Scalars['String']>;
  gas_limit?: Maybe<Scalars['BigInt']>;
  gas_used?: Maybe<Scalars['BigInt']>;
  input?: Maybe<Scalars['String']>;
  internal_transaction_index?: Maybe<Scalars['BigInt']>;
  output?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Decimal']>;
  to_address?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type_trace_address?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Decimal']>;
};


/** The type used to represent results of a query for the table 'traces'. */
export type Traces_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'traces'. */
export type Traces_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'traces'. */
export type Traces_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'traces'. */
export type Traces_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'traces'. */
export type Traces_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'traces'. */
export type Traces_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'traces'. */
export type Traces_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'traces'. */
export type Traces_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'traces'.
 * Note that 'block_number', 'transaction_hash' and 'internal_transaction_index' are the fields that correspond to the table primary key.
 */
export type TracesFilterInput = {
  block_hash?: InputMaybe<StringFilterInput>;
  block_number?: InputMaybe<BigIntFilterInput>;
  block_timestamp?: InputMaybe<TimestampFilterInput>;
  call_type?: InputMaybe<StringFilterInput>;
  error?: InputMaybe<StringFilterInput>;
  from_address?: InputMaybe<StringFilterInput>;
  gas_limit?: InputMaybe<BigIntFilterInput>;
  gas_used?: InputMaybe<BigIntFilterInput>;
  input?: InputMaybe<StringFilterInput>;
  internal_transaction_index?: InputMaybe<BigIntFilterInput>;
  output?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<DecimalFilterInput>;
  to_address?: InputMaybe<StringFilterInput>;
  transaction_hash?: InputMaybe<StringFilterInput>;
  type_trace_address?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<DecimalFilterInput>;
};

export type TracesGroupByInput = {
  block_number?: InputMaybe<Scalars['Boolean']>;
  internal_transaction_index?: InputMaybe<Scalars['Boolean']>;
  transaction_hash?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'traces'.
 * Note that 'block_number', 'transaction_hash' and 'internal_transaction_index' are the fields that correspond to the table primary key.
 */
export type TracesInput = {
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['BigInt']>;
  block_timestamp?: InputMaybe<Scalars['Timestamp']>;
  call_type?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<Scalars['String']>;
  from_address?: InputMaybe<Scalars['String']>;
  gas_limit?: InputMaybe<Scalars['BigInt']>;
  gas_used?: InputMaybe<Scalars['BigInt']>;
  input?: InputMaybe<Scalars['String']>;
  internal_transaction_index?: InputMaybe<Scalars['BigInt']>;
  output?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Decimal']>;
  to_address?: InputMaybe<Scalars['String']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  type_trace_address?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Decimal']>;
};

/** The type used to represent results of a mutation for the table 'traces'. */
export type TracesMutationResult = {
  __typename?: 'tracesMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Traces>;
};

/** The enum used to order a query result based on one or more fields for the table 'traces'. */
export enum TracesOrder {
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  CallTypeAsc = 'call_type_ASC',
  CallTypeDesc = 'call_type_DESC',
  ErrorAsc = 'error_ASC',
  ErrorDesc = 'error_DESC',
  FromAddressAsc = 'from_address_ASC',
  FromAddressDesc = 'from_address_DESC',
  GasLimitAsc = 'gas_limit_ASC',
  GasLimitDesc = 'gas_limit_DESC',
  GasUsedAsc = 'gas_used_ASC',
  GasUsedDesc = 'gas_used_DESC',
  InputAsc = 'input_ASC',
  InputDesc = 'input_DESC',
  InternalTransactionIndexAsc = 'internal_transaction_index_ASC',
  InternalTransactionIndexDesc = 'internal_transaction_index_DESC',
  OutputAsc = 'output_ASC',
  OutputDesc = 'output_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  ToAddressAsc = 'to_address_ASC',
  ToAddressDesc = 'to_address_DESC',
  TransactionHashAsc = 'transaction_hash_ASC',
  TransactionHashDesc = 'transaction_hash_DESC',
  TypeTraceAddressAsc = 'type_trace_address_ASC',
  TypeTraceAddressDesc = 'type_trace_address_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type TracesResult = {
  __typename?: 'tracesResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Traces>>;
};

/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions = {
  __typename?: 'transactions';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  base_fee?: Maybe<Scalars['String']>;
  block_hash?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['BigInt']>;
  block_timestamp?: Maybe<Scalars['String']>;
  burnt_fee?: Maybe<Scalars['String']>;
  from_address?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['BigInt']>;
  gas_price?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  max_fee?: Maybe<Scalars['String']>;
  max_priority_fee?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['BigInt']>;
  receipt_contract_address?: Maybe<Scalars['String']>;
  receipt_cumulative_gas_used?: Maybe<Scalars['BigInt']>;
  receipt_gas_used?: Maybe<Scalars['BigInt']>;
  receipt_root?: Maybe<Scalars['String']>;
  receipt_status?: Maybe<Scalars['BigInt']>;
  to_address?: Maybe<Scalars['String']>;
  transaction_fees?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['BigInt']>;
  txn_savings?: Maybe<Scalars['String']>;
  txn_type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Decimal']>;
};


/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions'. */
export type Transactions_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'transactions'.
 * Note that 'block_hash', 'transaction_index' and 'hash' are the fields that correspond to the table primary key.
 */
export type TransactionsFilterInput = {
  base_fee?: InputMaybe<StringFilterInput>;
  block_hash?: InputMaybe<StringFilterInput>;
  block_number?: InputMaybe<BigIntFilterInput>;
  block_timestamp?: InputMaybe<StringFilterInput>;
  burnt_fee?: InputMaybe<StringFilterInput>;
  from_address?: InputMaybe<StringFilterInput>;
  gas?: InputMaybe<BigIntFilterInput>;
  gas_price?: InputMaybe<StringFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  input?: InputMaybe<StringFilterInput>;
  max_fee?: InputMaybe<StringFilterInput>;
  max_priority_fee?: InputMaybe<StringFilterInput>;
  method?: InputMaybe<StringFilterInput>;
  nonce?: InputMaybe<BigIntFilterInput>;
  receipt_contract_address?: InputMaybe<StringFilterInput>;
  receipt_cumulative_gas_used?: InputMaybe<BigIntFilterInput>;
  receipt_gas_used?: InputMaybe<BigIntFilterInput>;
  receipt_root?: InputMaybe<StringFilterInput>;
  receipt_status?: InputMaybe<BigIntFilterInput>;
  to_address?: InputMaybe<StringFilterInput>;
  transaction_fees?: InputMaybe<StringFilterInput>;
  transaction_index?: InputMaybe<BigIntFilterInput>;
  txn_savings?: InputMaybe<StringFilterInput>;
  txn_type?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<DecimalFilterInput>;
};

export type TransactionsGroupByInput = {
  block_hash?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['Boolean']>;
  transaction_index?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'transactions'.
 * Note that 'block_hash', 'transaction_index' and 'hash' are the fields that correspond to the table primary key.
 */
export type TransactionsInput = {
  base_fee?: InputMaybe<Scalars['String']>;
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['BigInt']>;
  block_timestamp?: InputMaybe<Scalars['String']>;
  burnt_fee?: InputMaybe<Scalars['String']>;
  from_address?: InputMaybe<Scalars['String']>;
  gas?: InputMaybe<Scalars['BigInt']>;
  gas_price?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['String']>;
  max_fee?: InputMaybe<Scalars['String']>;
  max_priority_fee?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  receipt_contract_address?: InputMaybe<Scalars['String']>;
  receipt_cumulative_gas_used?: InputMaybe<Scalars['BigInt']>;
  receipt_gas_used?: InputMaybe<Scalars['BigInt']>;
  receipt_root?: InputMaybe<Scalars['String']>;
  receipt_status?: InputMaybe<Scalars['BigInt']>;
  to_address?: InputMaybe<Scalars['String']>;
  transaction_fees?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['BigInt']>;
  txn_savings?: InputMaybe<Scalars['String']>;
  txn_type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Decimal']>;
};

/** The type used to represent results of a mutation for the table 'transactions'. */
export type TransactionsMutationResult = {
  __typename?: 'transactionsMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Transactions>;
};

/** The enum used to order a query result based on one or more fields for the table 'transactions'. */
export enum TransactionsOrder {
  BaseFeeAsc = 'base_fee_ASC',
  BaseFeeDesc = 'base_fee_DESC',
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  BurntFeeAsc = 'burnt_fee_ASC',
  BurntFeeDesc = 'burnt_fee_DESC',
  FromAddressAsc = 'from_address_ASC',
  FromAddressDesc = 'from_address_DESC',
  GasAsc = 'gas_ASC',
  GasDesc = 'gas_DESC',
  GasPriceAsc = 'gas_price_ASC',
  GasPriceDesc = 'gas_price_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  InputAsc = 'input_ASC',
  InputDesc = 'input_DESC',
  MaxFeeAsc = 'max_fee_ASC',
  MaxFeeDesc = 'max_fee_DESC',
  MaxPriorityFeeAsc = 'max_priority_fee_ASC',
  MaxPriorityFeeDesc = 'max_priority_fee_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  NonceAsc = 'nonce_ASC',
  NonceDesc = 'nonce_DESC',
  ReceiptContractAddressAsc = 'receipt_contract_address_ASC',
  ReceiptContractAddressDesc = 'receipt_contract_address_DESC',
  ReceiptCumulativeGasUsedAsc = 'receipt_cumulative_gas_used_ASC',
  ReceiptCumulativeGasUsedDesc = 'receipt_cumulative_gas_used_DESC',
  ReceiptGasUsedAsc = 'receipt_gas_used_ASC',
  ReceiptGasUsedDesc = 'receipt_gas_used_DESC',
  ReceiptRootAsc = 'receipt_root_ASC',
  ReceiptRootDesc = 'receipt_root_DESC',
  ReceiptStatusAsc = 'receipt_status_ASC',
  ReceiptStatusDesc = 'receipt_status_DESC',
  ToAddressAsc = 'to_address_ASC',
  ToAddressDesc = 'to_address_DESC',
  TransactionFeesAsc = 'transaction_fees_ASC',
  TransactionFeesDesc = 'transaction_fees_DESC',
  TransactionIndexAsc = 'transaction_index_ASC',
  TransactionIndexDesc = 'transaction_index_DESC',
  TxnSavingsAsc = 'txn_savings_ASC',
  TxnSavingsDesc = 'txn_savings_DESC',
  TxnTypeAsc = 'txn_type_ASC',
  TxnTypeDesc = 'txn_type_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type TransactionsResult = {
  __typename?: 'transactionsResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Transactions>>;
};

/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash = {
  __typename?: 'transactions_by_hash';
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='BigInt', description='Represents a CQL `bigint` as an integer literal.
   * This is a 64-bit signed integer.', coercing=io.stargate.graphql.schema.scalars.BigIntCoercing@22bc54e2}.
   */
  _bigint_function?: Maybe<Scalars['BigInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Decimal', description='Represents a CQL `decimal` as a string.
   * This is a variable-precision decimal.
   * Examples: "1.5", "1e-3"', coercing=io.stargate.graphql.schema.scalars.StringCoercing$5@580b9f4}.
   */
  _decimal_function?: Maybe<Scalars['Decimal']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Float', description='Built-in Float', coercing=graphql.scalar.GraphqlFloatCoercing@79dcfd38}. */
  _double_function?: Maybe<Scalars['Float']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Float32', description='Represents a CQL `float` as a floating-point literal.
   * This is a 32-bit IEEE-754 floating point.
   * If the value cannot be represented as a float, it will be converted. This conversion can loose precision, or range (resulting in +/-Infinity).', coercing=io.stargate.graphql.schema.scalars.FloatCoercing@42432336}.
   */
  _float_function?: Maybe<Scalars['Float32']>;
  /** Invocation of an aggregate function that returns GraphQLScalarType{name='Int', description='Built-in Int', coercing=graphql.scalar.GraphqlIntCoercing@3ea25571}. */
  _int_function?: Maybe<Scalars['Int']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='SmallInt', description='Represents a CQL `smallint` as an integer.
   * This is a 16-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$2@21864d8}.
   */
  _smallint_function?: Maybe<Scalars['SmallInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='TinyInt', description='Represents a CQL `tinyint` as an integer
   * .This is an 8-bit signed int.
   * An error will be thrown if the value is out of bounds.', coercing=io.stargate.graphql.schema.scalars.IntCoercing$1@2d72276}.
   */
  _tinyint_function?: Maybe<Scalars['TinyInt']>;
  /**
   * Invocation of an aggregate function that returns GraphQLScalarType{name='Varint', description='Represents a CQL `varint` as an integer.
   * This is an arbitrary-precision integer.
   * Examples: 1, 9223372036854775808', coercing=io.stargate.graphql.schema.scalars.VarintCoercing@4ea4061e}.
   */
  _varint_function?: Maybe<Scalars['Varint']>;
  base_fee?: Maybe<Scalars['String']>;
  block_hash?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['BigInt']>;
  block_timestamp?: Maybe<Scalars['String']>;
  burnt_fee?: Maybe<Scalars['String']>;
  from_address?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['BigInt']>;
  gas_price?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  max_fee?: Maybe<Scalars['String']>;
  max_priority_fee?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['BigInt']>;
  receipt_contract_address?: Maybe<Scalars['String']>;
  receipt_cumulative_gas_used?: Maybe<Scalars['BigInt']>;
  receipt_gas_used?: Maybe<Scalars['BigInt']>;
  receipt_root?: Maybe<Scalars['String']>;
  receipt_status?: Maybe<Scalars['BigInt']>;
  to_address?: Maybe<Scalars['String']>;
  transaction_fees?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['BigInt']>;
  txn_savings?: Maybe<Scalars['String']>;
  txn_type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Decimal']>;
};


/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash_Bigint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash_Decimal_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash_Double_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash_Float_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash_Int_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash_Smallint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash_Tinyint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};


/** The type used to represent results of a query for the table 'transactions_by_hash'. */
export type Transactions_By_Hash_Varint_FunctionArgs = {
  args: Array<Scalars['String']>;
  name: Scalars['String'];
};

/**
 * The input type used for filtering with non-equality operators for the table 'transactions_by_hash'.
 * Note that 'hash', 'transaction_index' and 'block_number' are the fields that correspond to the table primary key.
 */
export type Transactions_By_HashFilterInput = {
  base_fee?: InputMaybe<StringFilterInput>;
  block_hash?: InputMaybe<StringFilterInput>;
  block_number?: InputMaybe<BigIntFilterInput>;
  block_timestamp?: InputMaybe<StringFilterInput>;
  burnt_fee?: InputMaybe<StringFilterInput>;
  from_address?: InputMaybe<StringFilterInput>;
  gas?: InputMaybe<BigIntFilterInput>;
  gas_price?: InputMaybe<StringFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  input?: InputMaybe<StringFilterInput>;
  max_fee?: InputMaybe<StringFilterInput>;
  max_priority_fee?: InputMaybe<StringFilterInput>;
  method?: InputMaybe<StringFilterInput>;
  nonce?: InputMaybe<BigIntFilterInput>;
  receipt_contract_address?: InputMaybe<StringFilterInput>;
  receipt_cumulative_gas_used?: InputMaybe<BigIntFilterInput>;
  receipt_gas_used?: InputMaybe<BigIntFilterInput>;
  receipt_root?: InputMaybe<StringFilterInput>;
  receipt_status?: InputMaybe<BigIntFilterInput>;
  to_address?: InputMaybe<StringFilterInput>;
  transaction_fees?: InputMaybe<StringFilterInput>;
  transaction_index?: InputMaybe<BigIntFilterInput>;
  txn_savings?: InputMaybe<StringFilterInput>;
  txn_type?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<DecimalFilterInput>;
};

export type Transactions_By_HashGroupByInput = {
  block_number?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['Boolean']>;
  transaction_index?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The input type for the table 'transactions_by_hash'.
 * Note that 'hash', 'transaction_index' and 'block_number' are the fields that correspond to the table primary key.
 */
export type Transactions_By_HashInput = {
  base_fee?: InputMaybe<Scalars['String']>;
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['BigInt']>;
  block_timestamp?: InputMaybe<Scalars['String']>;
  burnt_fee?: InputMaybe<Scalars['String']>;
  from_address?: InputMaybe<Scalars['String']>;
  gas?: InputMaybe<Scalars['BigInt']>;
  gas_price?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['String']>;
  max_fee?: InputMaybe<Scalars['String']>;
  max_priority_fee?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  receipt_contract_address?: InputMaybe<Scalars['String']>;
  receipt_cumulative_gas_used?: InputMaybe<Scalars['BigInt']>;
  receipt_gas_used?: InputMaybe<Scalars['BigInt']>;
  receipt_root?: InputMaybe<Scalars['String']>;
  receipt_status?: InputMaybe<Scalars['BigInt']>;
  to_address?: InputMaybe<Scalars['String']>;
  transaction_fees?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['BigInt']>;
  txn_savings?: InputMaybe<Scalars['String']>;
  txn_type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Decimal']>;
};

/** The type used to represent results of a mutation for the table 'transactions_by_hash'. */
export type Transactions_By_HashMutationResult = {
  __typename?: 'transactions_by_hashMutationResult';
  /** This field is relevant and fulfilled with data, only when used with the @async directive */
  accepted?: Maybe<Scalars['Boolean']>;
  applied?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Transactions_By_Hash>;
};

/** The enum used to order a query result based on one or more fields for the table 'transactions_by_hash'. */
export enum Transactions_By_HashOrder {
  BaseFeeAsc = 'base_fee_ASC',
  BaseFeeDesc = 'base_fee_DESC',
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockNumberAsc = 'block_number_ASC',
  BlockNumberDesc = 'block_number_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  BurntFeeAsc = 'burnt_fee_ASC',
  BurntFeeDesc = 'burnt_fee_DESC',
  FromAddressAsc = 'from_address_ASC',
  FromAddressDesc = 'from_address_DESC',
  GasAsc = 'gas_ASC',
  GasDesc = 'gas_DESC',
  GasPriceAsc = 'gas_price_ASC',
  GasPriceDesc = 'gas_price_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  InputAsc = 'input_ASC',
  InputDesc = 'input_DESC',
  MaxFeeAsc = 'max_fee_ASC',
  MaxFeeDesc = 'max_fee_DESC',
  MaxPriorityFeeAsc = 'max_priority_fee_ASC',
  MaxPriorityFeeDesc = 'max_priority_fee_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  NonceAsc = 'nonce_ASC',
  NonceDesc = 'nonce_DESC',
  ReceiptContractAddressAsc = 'receipt_contract_address_ASC',
  ReceiptContractAddressDesc = 'receipt_contract_address_DESC',
  ReceiptCumulativeGasUsedAsc = 'receipt_cumulative_gas_used_ASC',
  ReceiptCumulativeGasUsedDesc = 'receipt_cumulative_gas_used_DESC',
  ReceiptGasUsedAsc = 'receipt_gas_used_ASC',
  ReceiptGasUsedDesc = 'receipt_gas_used_DESC',
  ReceiptRootAsc = 'receipt_root_ASC',
  ReceiptRootDesc = 'receipt_root_DESC',
  ReceiptStatusAsc = 'receipt_status_ASC',
  ReceiptStatusDesc = 'receipt_status_DESC',
  ToAddressAsc = 'to_address_ASC',
  ToAddressDesc = 'to_address_DESC',
  TransactionFeesAsc = 'transaction_fees_ASC',
  TransactionFeesDesc = 'transaction_fees_DESC',
  TransactionIndexAsc = 'transaction_index_ASC',
  TransactionIndexDesc = 'transaction_index_DESC',
  TxnSavingsAsc = 'txn_savings_ASC',
  TxnSavingsDesc = 'txn_savings_DESC',
  TxnTypeAsc = 'txn_type_ASC',
  TxnTypeDesc = 'txn_type_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type Transactions_By_HashResult = {
  __typename?: 'transactions_by_hashResult';
  pageState?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Transactions_By_Hash>>;
};

export type Dashboard_AnalyticsQueryVariables = Exact<{
  filter?: InputMaybe<Dashboard_AnalyticsFilterInput>;
}>;


export type Dashboard_AnalyticsQuery = { __typename?: 'Query', dashboard_analytics?: { __typename?: 'dashboard_analyticsResult', values?: Array<{ __typename?: 'dashboard_analytics', id?: any | null, block_number?: any | null, chart_data?: string | null, difficulty?: string | null, ether_price_btc?: string | null, ether_price_usd?: string | null, hashrate?: string | null, latest_blocks_group?: any | null, market_cap_usd?: string | null, med_gas_price?: string | null, network_base_fee?: string | null, network_priority_fee?: string | null, previous_24h_block_number?: any | null, price_percentage_change?: string | null, sum_of_burnt_fees?: string | null, total_transactions?: string | null, tps?: string | null, transactions_history_chart?: string | null }> | null } | null };

export type GetEthBlocksQueryVariables = Exact<{
  filter?: InputMaybe<Eth_BlocksFilterInput>;
  options?: InputMaybe<QueryOptions>;
}>;


export type GetEthBlocksQuery = { __typename?: 'Query', eth_blocks?: { __typename?: 'eth_blocksResult', values?: Array<{ __typename?: 'eth_blocks', number?: any | null, timestamp?: string | null, miner?: string | null, transaction_count?: any | null, hash?: string | null, mine_time?: any | null, reward?: string | null }> | null } | null };

export type GetLatestEthBlockQueryVariables = Exact<{
  filter?: InputMaybe<Eth_BlocksFilterInput>;
  options?: InputMaybe<QueryOptions>;
}>;


export type GetLatestEthBlockQuery = { __typename?: 'Query', eth_blocks?: { __typename?: 'eth_blocksResult', values?: Array<{ __typename?: 'eth_blocks', number?: any | null, hash?: string | null }> | null } | null };

export type GetTransactionsOfLatestBlockQueryVariables = Exact<{
  filter?: InputMaybe<TransactionsFilterInput>;
  options?: InputMaybe<QueryOptions>;
}>;


export type GetTransactionsOfLatestBlockQuery = { __typename?: 'Query', transactions?: { __typename?: 'transactionsResult', values?: Array<{ __typename?: 'transactions', hash?: string | null, block_timestamp?: string | null, from_address?: string | null, to_address?: string | null, value?: any | null }> | null } | null };

export type GetLatestBlockGroupQueryVariables = Exact<{
  filter?: InputMaybe<Dashboard_AnalyticsFilterInput>;
}>;


export type GetLatestBlockGroupQuery = { __typename?: 'Query', dashboard_analytics?: { __typename?: 'dashboard_analyticsResult', values?: Array<{ __typename?: 'dashboard_analytics', latest_blocks_group?: any | null, sum_of_burnt_fees?: string | null }> | null } | null };

export type GetPaginatedEthBlocksQueryVariables = Exact<{
  filter?: InputMaybe<Eth_BlocksFilterInput>;
  options?: InputMaybe<QueryOptions>;
}>;


export type GetPaginatedEthBlocksQuery = { __typename?: 'Query', eth_blocks?: { __typename?: 'eth_blocksResult', pageState?: string | null, values?: Array<{ __typename?: 'eth_blocks', number?: any | null, timestamp?: string | null, transaction_count?: any | null, uncles_count?: any | null, miner?: string | null, gas_used?: any | null, gas_limit?: any | null, base_fee_per_gas?: string | null, reward?: string | null, burnt_fees?: string | null, txn_fees?: string | null, gas_used_percentage?: string | null }> | null } | null };

export type GetPaginatedEThTransactionsQueryVariables = Exact<{
  filter?: InputMaybe<TransactionsFilterInput>;
  options?: InputMaybe<QueryOptions>;
}>;


export type GetPaginatedEThTransactionsQuery = { __typename?: 'Query', transactions?: { __typename?: 'transactionsResult', pageState?: string | null, values?: Array<{ __typename?: 'transactions', hash?: string | null, method?: string | null, block_number?: any | null, block_timestamp?: string | null, from_address?: string | null, to_address?: string | null, value?: any | null, transaction_fees?: string | null, transaction_index?: any | null, block_hash?: string | null }> | null } | null };

export type GetEthBlockByNumberQueryVariables = Exact<{
  blockGroup?: InputMaybe<Scalars['BigInt']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
}>;


export type GetEthBlockByNumberQuery = { __typename?: 'Query', eth_blocks?: { __typename?: 'eth_blocksResult', values?: Array<{ __typename?: 'eth_blocks', sha3_uncles?: string | null, state_root?: string | null, hash?: string | null, parent_hash?: string | null, nonce?: string | null, int_txn_count?: any | null, number?: any | null, timestamp?: string | null, transaction_count?: any | null, miner?: string | null, miners_name?: string | null, mine_time?: any | null, reward?: string | null, txn_fees?: string | null, burnt_fees?: string | null, difficulty?: any | null, uncle_reward?: string | null, total_difficulty?: any | null, size?: any | null, gas_used?: any | null, gas_used_percentage?: string | null, gas_target_percentage?: string | null, gas_limit?: any | null, base_fee_per_gas?: string | null, extra_data?: string | null }> | null } | null };

export type GetNextBlockForTransactionQueryVariables = Exact<{
  blockGroup?: InputMaybe<Scalars['BigInt']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
}>;


export type GetNextBlockForTransactionQuery = { __typename?: 'Query', eth_blocks?: { __typename?: 'eth_blocksResult', values?: Array<{ __typename?: 'eth_blocks', hash?: string | null }> | null } | null };

export type GetPreviousBlockForTransactionQueryVariables = Exact<{
  blockGroup?: InputMaybe<Scalars['BigInt']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
}>;


export type GetPreviousBlockForTransactionQuery = { __typename?: 'Query', eth_blocks?: { __typename?: 'eth_blocksResult', values?: Array<{ __typename?: 'eth_blocks', hash?: string | null }> | null } | null };

export type GetEthTransactionByHashQueryVariables = Exact<{
  filter?: InputMaybe<Transactions_By_HashFilterInput>;
}>;


export type GetEthTransactionByHashQuery = { __typename?: 'Query', transactions_by_hash?: { __typename?: 'transactions_by_hashResult', pageState?: string | null, values?: Array<{ __typename?: 'transactions_by_hash', hash?: string | null, block_hash?: string | null, block_number?: any | null, block_timestamp?: string | null, from_address?: string | null, gas?: any | null, gas_price?: string | null, input?: string | null, nonce?: any | null, receipt_contract_address?: string | null, receipt_cumulative_gas_used?: any | null, receipt_gas_used?: any | null, receipt_root?: string | null, receipt_status?: any | null, to_address?: string | null, method?: string | null, transaction_fees?: string | null, transaction_index?: any | null, value?: any | null, base_fee?: string | null, max_fee?: string | null, max_priority_fee?: string | null, burnt_fee?: string | null, txn_savings?: string | null }> | null } | null };

export type GetLogsByEthTransactionQueryVariables = Exact<{
  filter?: InputMaybe<LogsFilterInput>;
}>;


export type GetLogsByEthTransactionQuery = { __typename?: 'Query', logs?: { __typename?: 'logsResult', values?: Array<{ __typename?: 'logs', block_number?: any | null, address?: string | null, topic0?: string | null, topic1?: string | null, topic2?: string | null, topic3?: string | null, data?: string | null, log_index?: any | null, decoded_data?: string | null, block_hash?: string | null, block_timestamp?: any | null, transaction_index?: any | null, transaction_hash?: string | null }> | null } | null };

export type GetInternalTransactionByEthBlockNumberQueryVariables = Exact<{
  filter?: InputMaybe<TracesFilterInput>;
  options?: InputMaybe<QueryOptions>;
}>;


export type GetInternalTransactionByEthBlockNumberQuery = { __typename?: 'Query', traces?: { __typename?: 'tracesResult', pageState?: string | null, values?: Array<{ __typename?: 'traces', block_number?: any | null, transaction_hash?: string | null, internal_transaction_index?: any | null, from_address?: string | null, to_address?: string | null, gas_limit?: any | null, type_trace_address?: string | null, value?: any | null }> | null } | null };

export type GetInternalTransactionByEthBlockNumber_Transaction_HashQueryVariables = Exact<{
  filter?: InputMaybe<TracesFilterInput>;
}>;


export type GetInternalTransactionByEthBlockNumber_Transaction_HashQuery = { __typename?: 'Query', traces?: { __typename?: 'tracesResult', values?: Array<{ __typename?: 'traces', block_number?: any | null, transaction_hash?: string | null, internal_transaction_index?: any | null, from_address?: string | null, to_address?: string | null, gas_limit?: any | null, type_trace_address?: string | null, value?: any | null }> | null } | null };

export type Dashboard_Analytics_HeaderQueryVariables = Exact<{
  filter?: InputMaybe<Dashboard_AnalyticsFilterInput>;
}>;


export type Dashboard_Analytics_HeaderQuery = { __typename?: 'Query', dashboard_analytics?: { __typename?: 'dashboard_analyticsResult', values?: Array<{ __typename?: 'dashboard_analytics', network_base_fee?: string | null, network_priority_fee?: string | null, price_percentage_change?: string | null, ether_price_usd?: string | null }> | null } | null };


export const Dashboard_AnalyticsDocument = gql`
    query dashboard_analytics($filter: dashboard_analyticsFilterInput) {
  dashboard_analytics(filter: $filter) {
    values {
      id
      block_number
      chart_data
      difficulty
      ether_price_btc
      ether_price_usd
      hashrate
      latest_blocks_group
      market_cap_usd
      med_gas_price
      network_base_fee
      network_priority_fee
      previous_24h_block_number
      price_percentage_change
      sum_of_burnt_fees
      total_transactions
      tps
      transactions_history_chart
    }
  }
}
    `;

/**
 * __useDashboard_AnalyticsQuery__
 *
 * To run a query within a React component, call `useDashboard_AnalyticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboard_AnalyticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboard_AnalyticsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDashboard_AnalyticsQuery(baseOptions?: Apollo.QueryHookOptions<Dashboard_AnalyticsQuery, Dashboard_AnalyticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Dashboard_AnalyticsQuery, Dashboard_AnalyticsQueryVariables>(Dashboard_AnalyticsDocument, options);
      }
export function useDashboard_AnalyticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Dashboard_AnalyticsQuery, Dashboard_AnalyticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Dashboard_AnalyticsQuery, Dashboard_AnalyticsQueryVariables>(Dashboard_AnalyticsDocument, options);
        }
export type Dashboard_AnalyticsQueryHookResult = ReturnType<typeof useDashboard_AnalyticsQuery>;
export type Dashboard_AnalyticsLazyQueryHookResult = ReturnType<typeof useDashboard_AnalyticsLazyQuery>;
export type Dashboard_AnalyticsQueryResult = Apollo.QueryResult<Dashboard_AnalyticsQuery, Dashboard_AnalyticsQueryVariables>;
export const GetEthBlocksDocument = gql`
    query getEthBlocks($filter: eth_blocksFilterInput, $options: QueryOptions) {
  eth_blocks(filter: $filter, options: $options) {
    values {
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
 * __useGetEthBlocksQuery__
 *
 * To run a query within a React component, call `useGetEthBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEthBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEthBlocksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetEthBlocksQuery(baseOptions?: Apollo.QueryHookOptions<GetEthBlocksQuery, GetEthBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEthBlocksQuery, GetEthBlocksQueryVariables>(GetEthBlocksDocument, options);
      }
export function useGetEthBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEthBlocksQuery, GetEthBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEthBlocksQuery, GetEthBlocksQueryVariables>(GetEthBlocksDocument, options);
        }
export type GetEthBlocksQueryHookResult = ReturnType<typeof useGetEthBlocksQuery>;
export type GetEthBlocksLazyQueryHookResult = ReturnType<typeof useGetEthBlocksLazyQuery>;
export type GetEthBlocksQueryResult = Apollo.QueryResult<GetEthBlocksQuery, GetEthBlocksQueryVariables>;
export const GetLatestEthBlockDocument = gql`
    query getLatestEthBlock($filter: eth_blocksFilterInput, $options: QueryOptions) {
  eth_blocks(filter: $filter, options: $options) {
    values {
      number
      hash
    }
  }
}
    `;

/**
 * __useGetLatestEthBlockQuery__
 *
 * To run a query within a React component, call `useGetLatestEthBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestEthBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestEthBlockQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetLatestEthBlockQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestEthBlockQuery, GetLatestEthBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestEthBlockQuery, GetLatestEthBlockQueryVariables>(GetLatestEthBlockDocument, options);
      }
export function useGetLatestEthBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestEthBlockQuery, GetLatestEthBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestEthBlockQuery, GetLatestEthBlockQueryVariables>(GetLatestEthBlockDocument, options);
        }
export type GetLatestEthBlockQueryHookResult = ReturnType<typeof useGetLatestEthBlockQuery>;
export type GetLatestEthBlockLazyQueryHookResult = ReturnType<typeof useGetLatestEthBlockLazyQuery>;
export type GetLatestEthBlockQueryResult = Apollo.QueryResult<GetLatestEthBlockQuery, GetLatestEthBlockQueryVariables>;
export const GetTransactionsOfLatestBlockDocument = gql`
    query getTransactionsOfLatestBlock($filter: transactionsFilterInput, $options: QueryOptions) {
  transactions(filter: $filter, options: $options) {
    values {
      hash
      block_timestamp
      from_address
      to_address
      value
    }
  }
}
    `;

/**
 * __useGetTransactionsOfLatestBlockQuery__
 *
 * To run a query within a React component, call `useGetTransactionsOfLatestBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsOfLatestBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsOfLatestBlockQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetTransactionsOfLatestBlockQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionsOfLatestBlockQuery, GetTransactionsOfLatestBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionsOfLatestBlockQuery, GetTransactionsOfLatestBlockQueryVariables>(GetTransactionsOfLatestBlockDocument, options);
      }
export function useGetTransactionsOfLatestBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionsOfLatestBlockQuery, GetTransactionsOfLatestBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionsOfLatestBlockQuery, GetTransactionsOfLatestBlockQueryVariables>(GetTransactionsOfLatestBlockDocument, options);
        }
export type GetTransactionsOfLatestBlockQueryHookResult = ReturnType<typeof useGetTransactionsOfLatestBlockQuery>;
export type GetTransactionsOfLatestBlockLazyQueryHookResult = ReturnType<typeof useGetTransactionsOfLatestBlockLazyQuery>;
export type GetTransactionsOfLatestBlockQueryResult = Apollo.QueryResult<GetTransactionsOfLatestBlockQuery, GetTransactionsOfLatestBlockQueryVariables>;
export const GetLatestBlockGroupDocument = gql`
    query getLatestBlockGroup($filter: dashboard_analyticsFilterInput) {
  dashboard_analytics(filter: $filter) {
    values {
      latest_blocks_group
      sum_of_burnt_fees
    }
  }
}
    `;

/**
 * __useGetLatestBlockGroupQuery__
 *
 * To run a query within a React component, call `useGetLatestBlockGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestBlockGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestBlockGroupQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetLatestBlockGroupQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestBlockGroupQuery, GetLatestBlockGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestBlockGroupQuery, GetLatestBlockGroupQueryVariables>(GetLatestBlockGroupDocument, options);
      }
export function useGetLatestBlockGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestBlockGroupQuery, GetLatestBlockGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestBlockGroupQuery, GetLatestBlockGroupQueryVariables>(GetLatestBlockGroupDocument, options);
        }
export type GetLatestBlockGroupQueryHookResult = ReturnType<typeof useGetLatestBlockGroupQuery>;
export type GetLatestBlockGroupLazyQueryHookResult = ReturnType<typeof useGetLatestBlockGroupLazyQuery>;
export type GetLatestBlockGroupQueryResult = Apollo.QueryResult<GetLatestBlockGroupQuery, GetLatestBlockGroupQueryVariables>;
export const GetPaginatedEthBlocksDocument = gql`
    query getPaginatedEthBlocks($filter: eth_blocksFilterInput, $options: QueryOptions) {
  eth_blocks(filter: $filter, options: $options) {
    values {
      number
      timestamp
      transaction_count
      uncles_count
      miner
      gas_used
      gas_limit
      base_fee_per_gas
      reward
      burnt_fees
      txn_fees
      gas_used_percentage
    }
    pageState
  }
}
    `;

/**
 * __useGetPaginatedEthBlocksQuery__
 *
 * To run a query within a React component, call `useGetPaginatedEthBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedEthBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedEthBlocksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetPaginatedEthBlocksQuery(baseOptions?: Apollo.QueryHookOptions<GetPaginatedEthBlocksQuery, GetPaginatedEthBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedEthBlocksQuery, GetPaginatedEthBlocksQueryVariables>(GetPaginatedEthBlocksDocument, options);
      }
export function useGetPaginatedEthBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedEthBlocksQuery, GetPaginatedEthBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedEthBlocksQuery, GetPaginatedEthBlocksQueryVariables>(GetPaginatedEthBlocksDocument, options);
        }
export type GetPaginatedEthBlocksQueryHookResult = ReturnType<typeof useGetPaginatedEthBlocksQuery>;
export type GetPaginatedEthBlocksLazyQueryHookResult = ReturnType<typeof useGetPaginatedEthBlocksLazyQuery>;
export type GetPaginatedEthBlocksQueryResult = Apollo.QueryResult<GetPaginatedEthBlocksQuery, GetPaginatedEthBlocksQueryVariables>;
export const GetPaginatedEThTransactionsDocument = gql`
    query getPaginatedEThTransactions($filter: transactionsFilterInput, $options: QueryOptions) {
  transactions(filter: $filter, options: $options) {
    values {
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
    pageState
  }
}
    `;

/**
 * __useGetPaginatedEThTransactionsQuery__
 *
 * To run a query within a React component, call `useGetPaginatedEThTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedEThTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedEThTransactionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetPaginatedEThTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetPaginatedEThTransactionsQuery, GetPaginatedEThTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedEThTransactionsQuery, GetPaginatedEThTransactionsQueryVariables>(GetPaginatedEThTransactionsDocument, options);
      }
export function useGetPaginatedEThTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedEThTransactionsQuery, GetPaginatedEThTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedEThTransactionsQuery, GetPaginatedEThTransactionsQueryVariables>(GetPaginatedEThTransactionsDocument, options);
        }
export type GetPaginatedEThTransactionsQueryHookResult = ReturnType<typeof useGetPaginatedEThTransactionsQuery>;
export type GetPaginatedEThTransactionsLazyQueryHookResult = ReturnType<typeof useGetPaginatedEThTransactionsLazyQuery>;
export type GetPaginatedEThTransactionsQueryResult = Apollo.QueryResult<GetPaginatedEThTransactionsQuery, GetPaginatedEThTransactionsQueryVariables>;
export const GetEthBlockByNumberDocument = gql`
    query getEthBlockByNumber($blockGroup: BigInt, $blockNumber: BigInt) {
  eth_blocks(
    filter: {blocks_group: {eq: $blockGroup}, number: {eq: $blockNumber}}
  ) {
    values {
      sha3_uncles
      state_root
      hash
      parent_hash
      nonce
      int_txn_count
      number
      timestamp
      transaction_count
      miner
      miners_name
      mine_time
      reward
      txn_fees
      burnt_fees
      difficulty
      uncle_reward
      total_difficulty
      size
      gas_used
      gas_used_percentage
      gas_target_percentage
      gas_limit
      base_fee_per_gas
      extra_data
    }
  }
}
    `;

/**
 * __useGetEthBlockByNumberQuery__
 *
 * To run a query within a React component, call `useGetEthBlockByNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEthBlockByNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEthBlockByNumberQuery({
 *   variables: {
 *      blockGroup: // value for 'blockGroup'
 *      blockNumber: // value for 'blockNumber'
 *   },
 * });
 */
export function useGetEthBlockByNumberQuery(baseOptions?: Apollo.QueryHookOptions<GetEthBlockByNumberQuery, GetEthBlockByNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEthBlockByNumberQuery, GetEthBlockByNumberQueryVariables>(GetEthBlockByNumberDocument, options);
      }
export function useGetEthBlockByNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEthBlockByNumberQuery, GetEthBlockByNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEthBlockByNumberQuery, GetEthBlockByNumberQueryVariables>(GetEthBlockByNumberDocument, options);
        }
export type GetEthBlockByNumberQueryHookResult = ReturnType<typeof useGetEthBlockByNumberQuery>;
export type GetEthBlockByNumberLazyQueryHookResult = ReturnType<typeof useGetEthBlockByNumberLazyQuery>;
export type GetEthBlockByNumberQueryResult = Apollo.QueryResult<GetEthBlockByNumberQuery, GetEthBlockByNumberQueryVariables>;
export const GetNextBlockForTransactionDocument = gql`
    query getNextBlockForTransaction($blockGroup: BigInt, $blockNumber: BigInt) {
  eth_blocks(
    filter: {blocks_group: {eq: $blockGroup}, number: {lt: $blockNumber}}
    options: {limit: 1}
  ) {
    values {
      hash
    }
  }
}
    `;

/**
 * __useGetNextBlockForTransactionQuery__
 *
 * To run a query within a React component, call `useGetNextBlockForTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNextBlockForTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNextBlockForTransactionQuery({
 *   variables: {
 *      blockGroup: // value for 'blockGroup'
 *      blockNumber: // value for 'blockNumber'
 *   },
 * });
 */
export function useGetNextBlockForTransactionQuery(baseOptions?: Apollo.QueryHookOptions<GetNextBlockForTransactionQuery, GetNextBlockForTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNextBlockForTransactionQuery, GetNextBlockForTransactionQueryVariables>(GetNextBlockForTransactionDocument, options);
      }
export function useGetNextBlockForTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNextBlockForTransactionQuery, GetNextBlockForTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNextBlockForTransactionQuery, GetNextBlockForTransactionQueryVariables>(GetNextBlockForTransactionDocument, options);
        }
export type GetNextBlockForTransactionQueryHookResult = ReturnType<typeof useGetNextBlockForTransactionQuery>;
export type GetNextBlockForTransactionLazyQueryHookResult = ReturnType<typeof useGetNextBlockForTransactionLazyQuery>;
export type GetNextBlockForTransactionQueryResult = Apollo.QueryResult<GetNextBlockForTransactionQuery, GetNextBlockForTransactionQueryVariables>;
export const GetPreviousBlockForTransactionDocument = gql`
    query getPreviousBlockForTransaction($blockGroup: BigInt, $blockNumber: BigInt) {
  eth_blocks(
    filter: {blocks_group: {eq: $blockGroup}, number: {gt: $blockNumber}}
    options: {limit: 1}
  ) {
    values {
      hash
    }
  }
}
    `;

/**
 * __useGetPreviousBlockForTransactionQuery__
 *
 * To run a query within a React component, call `useGetPreviousBlockForTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviousBlockForTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviousBlockForTransactionQuery({
 *   variables: {
 *      blockGroup: // value for 'blockGroup'
 *      blockNumber: // value for 'blockNumber'
 *   },
 * });
 */
export function useGetPreviousBlockForTransactionQuery(baseOptions?: Apollo.QueryHookOptions<GetPreviousBlockForTransactionQuery, GetPreviousBlockForTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPreviousBlockForTransactionQuery, GetPreviousBlockForTransactionQueryVariables>(GetPreviousBlockForTransactionDocument, options);
      }
export function useGetPreviousBlockForTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPreviousBlockForTransactionQuery, GetPreviousBlockForTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPreviousBlockForTransactionQuery, GetPreviousBlockForTransactionQueryVariables>(GetPreviousBlockForTransactionDocument, options);
        }
export type GetPreviousBlockForTransactionQueryHookResult = ReturnType<typeof useGetPreviousBlockForTransactionQuery>;
export type GetPreviousBlockForTransactionLazyQueryHookResult = ReturnType<typeof useGetPreviousBlockForTransactionLazyQuery>;
export type GetPreviousBlockForTransactionQueryResult = Apollo.QueryResult<GetPreviousBlockForTransactionQuery, GetPreviousBlockForTransactionQueryVariables>;
export const GetEthTransactionByHashDocument = gql`
    query getEthTransactionByHash($filter: transactions_by_hashFilterInput) {
  transactions_by_hash(filter: $filter) {
    values {
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
      transaction_fees
      transaction_index
      value
      transaction_fees
      base_fee
      max_fee
      max_priority_fee
      burnt_fee
      txn_savings
      input
    }
    pageState
  }
}
    `;

/**
 * __useGetEthTransactionByHashQuery__
 *
 * To run a query within a React component, call `useGetEthTransactionByHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEthTransactionByHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEthTransactionByHashQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetEthTransactionByHashQuery(baseOptions?: Apollo.QueryHookOptions<GetEthTransactionByHashQuery, GetEthTransactionByHashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEthTransactionByHashQuery, GetEthTransactionByHashQueryVariables>(GetEthTransactionByHashDocument, options);
      }
export function useGetEthTransactionByHashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEthTransactionByHashQuery, GetEthTransactionByHashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEthTransactionByHashQuery, GetEthTransactionByHashQueryVariables>(GetEthTransactionByHashDocument, options);
        }
export type GetEthTransactionByHashQueryHookResult = ReturnType<typeof useGetEthTransactionByHashQuery>;
export type GetEthTransactionByHashLazyQueryHookResult = ReturnType<typeof useGetEthTransactionByHashLazyQuery>;
export type GetEthTransactionByHashQueryResult = Apollo.QueryResult<GetEthTransactionByHashQuery, GetEthTransactionByHashQueryVariables>;
export const GetLogsByEthTransactionDocument = gql`
    query getLogsByEthTransaction($filter: logsFilterInput) {
  logs(filter: $filter) {
    values {
      block_number
      address
      topic0
      topic1
      topic2
      topic3
      data
      log_index
      decoded_data
      block_hash
      block_timestamp
      transaction_index
      transaction_hash
    }
  }
}
    `;

/**
 * __useGetLogsByEthTransactionQuery__
 *
 * To run a query within a React component, call `useGetLogsByEthTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogsByEthTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogsByEthTransactionQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetLogsByEthTransactionQuery(baseOptions?: Apollo.QueryHookOptions<GetLogsByEthTransactionQuery, GetLogsByEthTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLogsByEthTransactionQuery, GetLogsByEthTransactionQueryVariables>(GetLogsByEthTransactionDocument, options);
      }
export function useGetLogsByEthTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLogsByEthTransactionQuery, GetLogsByEthTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLogsByEthTransactionQuery, GetLogsByEthTransactionQueryVariables>(GetLogsByEthTransactionDocument, options);
        }
export type GetLogsByEthTransactionQueryHookResult = ReturnType<typeof useGetLogsByEthTransactionQuery>;
export type GetLogsByEthTransactionLazyQueryHookResult = ReturnType<typeof useGetLogsByEthTransactionLazyQuery>;
export type GetLogsByEthTransactionQueryResult = Apollo.QueryResult<GetLogsByEthTransactionQuery, GetLogsByEthTransactionQueryVariables>;
export const GetInternalTransactionByEthBlockNumberDocument = gql`
    query getInternalTransactionByEthBlockNumber($filter: tracesFilterInput, $options: QueryOptions) {
  traces(filter: $filter, options: $options) {
    values {
      block_number
      transaction_hash
      internal_transaction_index
      from_address
      to_address
      gas_limit
      type_trace_address
      value
    }
    pageState
  }
}
    `;

/**
 * __useGetInternalTransactionByEthBlockNumberQuery__
 *
 * To run a query within a React component, call `useGetInternalTransactionByEthBlockNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInternalTransactionByEthBlockNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInternalTransactionByEthBlockNumberQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetInternalTransactionByEthBlockNumberQuery(baseOptions?: Apollo.QueryHookOptions<GetInternalTransactionByEthBlockNumberQuery, GetInternalTransactionByEthBlockNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInternalTransactionByEthBlockNumberQuery, GetInternalTransactionByEthBlockNumberQueryVariables>(GetInternalTransactionByEthBlockNumberDocument, options);
      }
export function useGetInternalTransactionByEthBlockNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInternalTransactionByEthBlockNumberQuery, GetInternalTransactionByEthBlockNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInternalTransactionByEthBlockNumberQuery, GetInternalTransactionByEthBlockNumberQueryVariables>(GetInternalTransactionByEthBlockNumberDocument, options);
        }
export type GetInternalTransactionByEthBlockNumberQueryHookResult = ReturnType<typeof useGetInternalTransactionByEthBlockNumberQuery>;
export type GetInternalTransactionByEthBlockNumberLazyQueryHookResult = ReturnType<typeof useGetInternalTransactionByEthBlockNumberLazyQuery>;
export type GetInternalTransactionByEthBlockNumberQueryResult = Apollo.QueryResult<GetInternalTransactionByEthBlockNumberQuery, GetInternalTransactionByEthBlockNumberQueryVariables>;
export const GetInternalTransactionByEthBlockNumber_Transaction_HashDocument = gql`
    query getInternalTransactionByEthBlockNumber_Transaction_hash($filter: tracesFilterInput) {
  traces(filter: $filter) {
    values {
      block_number
      transaction_hash
      internal_transaction_index
      from_address
      to_address
      gas_limit
      type_trace_address
      value
    }
  }
}
    `;

/**
 * __useGetInternalTransactionByEthBlockNumber_Transaction_HashQuery__
 *
 * To run a query within a React component, call `useGetInternalTransactionByEthBlockNumber_Transaction_HashQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInternalTransactionByEthBlockNumber_Transaction_HashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInternalTransactionByEthBlockNumber_Transaction_HashQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetInternalTransactionByEthBlockNumber_Transaction_HashQuery(baseOptions?: Apollo.QueryHookOptions<GetInternalTransactionByEthBlockNumber_Transaction_HashQuery, GetInternalTransactionByEthBlockNumber_Transaction_HashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInternalTransactionByEthBlockNumber_Transaction_HashQuery, GetInternalTransactionByEthBlockNumber_Transaction_HashQueryVariables>(GetInternalTransactionByEthBlockNumber_Transaction_HashDocument, options);
      }
export function useGetInternalTransactionByEthBlockNumber_Transaction_HashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInternalTransactionByEthBlockNumber_Transaction_HashQuery, GetInternalTransactionByEthBlockNumber_Transaction_HashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInternalTransactionByEthBlockNumber_Transaction_HashQuery, GetInternalTransactionByEthBlockNumber_Transaction_HashQueryVariables>(GetInternalTransactionByEthBlockNumber_Transaction_HashDocument, options);
        }
export type GetInternalTransactionByEthBlockNumber_Transaction_HashQueryHookResult = ReturnType<typeof useGetInternalTransactionByEthBlockNumber_Transaction_HashQuery>;
export type GetInternalTransactionByEthBlockNumber_Transaction_HashLazyQueryHookResult = ReturnType<typeof useGetInternalTransactionByEthBlockNumber_Transaction_HashLazyQuery>;
export type GetInternalTransactionByEthBlockNumber_Transaction_HashQueryResult = Apollo.QueryResult<GetInternalTransactionByEthBlockNumber_Transaction_HashQuery, GetInternalTransactionByEthBlockNumber_Transaction_HashQueryVariables>;
export const Dashboard_Analytics_HeaderDocument = gql`
    query dashboard_analytics_header($filter: dashboard_analyticsFilterInput) {
  dashboard_analytics(filter: $filter) {
    values {
      network_base_fee
      network_priority_fee
      price_percentage_change
      ether_price_usd
    }
  }
}
    `;

/**
 * __useDashboard_Analytics_HeaderQuery__
 *
 * To run a query within a React component, call `useDashboard_Analytics_HeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboard_Analytics_HeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboard_Analytics_HeaderQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDashboard_Analytics_HeaderQuery(baseOptions?: Apollo.QueryHookOptions<Dashboard_Analytics_HeaderQuery, Dashboard_Analytics_HeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Dashboard_Analytics_HeaderQuery, Dashboard_Analytics_HeaderQueryVariables>(Dashboard_Analytics_HeaderDocument, options);
      }
export function useDashboard_Analytics_HeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Dashboard_Analytics_HeaderQuery, Dashboard_Analytics_HeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Dashboard_Analytics_HeaderQuery, Dashboard_Analytics_HeaderQueryVariables>(Dashboard_Analytics_HeaderDocument, options);
        }
export type Dashboard_Analytics_HeaderQueryHookResult = ReturnType<typeof useDashboard_Analytics_HeaderQuery>;
export type Dashboard_Analytics_HeaderLazyQueryHookResult = ReturnType<typeof useDashboard_Analytics_HeaderLazyQuery>;
export type Dashboard_Analytics_HeaderQueryResult = Apollo.QueryResult<Dashboard_Analytics_HeaderQuery, Dashboard_Analytics_HeaderQueryVariables>;