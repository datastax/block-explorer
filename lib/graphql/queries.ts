const Get_PAGINATED_BLOCKS_QUERY = `
query getPaginatedEthBlocks(
  $filter: eth_blocksFilterInput
  $options: QueryOptions
) {
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

const GET_LATEST_BLOCKS_GROUP = `
query getLatestBlockGroup($filter: dashboard_analyticsFilterInput) {
  dashboard_analytics(filter: $filter) {
    values {
      latest_blocks_group
      sum_of_burnt_fees
    }
  }
}`;

const GET_DASHBOARD_ANALYTICS = `
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
}`;

const GET_LATEST_ETH_BLOCKS = `
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
}`;

const GET_LATEST_TRANSACTIONS = `
query getTransactionsOfLatestBlock(
  $filter: transactionsFilterInput
  $options: QueryOptions
) {
  transactions(filter: $filter, options: $options) {
    values {
      hash
      block_timestamp
      from_address
      to_address
      value
    }
  }
}`;

const GET_PAGINATED_ETH_TRANSACTIONS = `
query getPaginatedEThTransactions(
  $filter: transactionsFilterInput
  $options: QueryOptions
) {
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
}`;

const GET_ETH_BLOCK_BY_NUMBER = `
query getEthBlockByNumber($blockGroup: BigInt, $blockNumber: BigInt) {
  eth_blocks(
    filter: { blocks_group: { eq: $blockGroup }, number: { eq: $blockNumber } }
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
}`;

const GET_NEXT_BLOCK = `
query getNextBlockForTransaction($blockGroup: BigInt, $blockNumber: BigInt) {
  eth_blocks(
    filter: { blocks_group: { eq: $blockGroup }, number: { lt: $blockNumber } }
    options: { limit: 1 }
  ) {
    values {
      hash
    }
  }
}`;

const GET_PREVIOUS_BLOCK = `
query getPreviousBlockForTransaction(
  $blockGroup: BigInt
  $blockNumber: BigInt
) {
  eth_blocks(
    filter: { blocks_group: { eq: $blockGroup }, number: { gt: $blockNumber } }
    options: { limit: 1 }
  ) {
    values {
      hash
    }
  }
}`;

const GET_ETH_TRANSACTION_BY_HASH = `
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
}`;

const GET_LOGS_OF_TRANSACTION = `
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
}`;

const GET_INTERNAL_TRANSACTIONS_OF_BLOCK = `
query getInternalTransactionByEthBlockNumber(
  $filter: tracesFilterInput
  $options: QueryOptions
) {
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
}`;

const GET_INTERNAL_TRANSACTIONS_OF_TRANSACTION = `
query getInternalTransactionByEthBlockNumber_Transaction_hash(
  $filter: tracesFilterInput
) {
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
}`;

const GET_DASHBOARD_ANALYTICS_HEADER = `
query dashboard_analytics_header($filter: dashboard_analyticsFilterInput) {
  dashboard_analytics(filter: $filter) {
    values {
      network_base_fee
      network_priority_fee
      price_percentage_change
      ether_price_usd
    }
  }
}`;

const GET_LATEST_ETH_BLOCK = `
query getLatestEthBlock(
  $filter: eth_blocksFilterInput
  $options: QueryOptions
) {
  eth_blocks(filter: $filter, options: $options) {
    values {
      number
      hash
    }
  }
}`;

const GET_TRANSACTIONS_BY_DATE = `
query getTransactionsByDate($filter:transactions_by_dateFilterInput, $options:QueryOptions){
  transactions_by_date(
    filter: $filter 
    options: $options
  ) {
    values {
      hash
      block_number
      block_timestamp
    }
  }
}`;

export {
  Get_PAGINATED_BLOCKS_QUERY,
  GET_LATEST_BLOCKS_GROUP,
  GET_DASHBOARD_ANALYTICS,
  GET_LATEST_ETH_BLOCKS,
  GET_LATEST_TRANSACTIONS,
  GET_PAGINATED_ETH_TRANSACTIONS,
  GET_ETH_BLOCK_BY_NUMBER,
  GET_NEXT_BLOCK,
  GET_PREVIOUS_BLOCK,
  GET_ETH_TRANSACTION_BY_HASH,
  GET_LOGS_OF_TRANSACTION,
  GET_INTERNAL_TRANSACTIONS_OF_BLOCK,
  GET_INTERNAL_TRANSACTIONS_OF_TRANSACTION,
  GET_DASHBOARD_ANALYTICS_HEADER,
  GET_LATEST_ETH_BLOCK,
  GET_TRANSACTIONS_BY_DATE,
};
