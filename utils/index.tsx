import colors from '@styles/ThemeProvider/colors'
import {
  Eth_BlockQuery,
  GetInternalTransactionByBlockNumberQuery,
  GetPaginatedEthBlocksQuery,
  GetTransactionByHashQuery,
} from 'lib/graphql/generated'
import {
  BlockDetails,
  InternalTransactionData,
  InternalTxnsTabData,
  LogEvent,
  TransactionDetails,
} from 'types'

const numberRegex = /^[0-9]+$/

const formatAddress = (
  address: string | null | undefined,
  start = 7,
  end = 5
) => {
  if (!address) {
    return ''
  }
  if (address.length < 15) return address
  return address.slice(0, start) + '....' + address.slice(address.length - end)
}

function numberWithCommas(value: number | string | null | undefined) {
  if (!value) return '0'
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const getDifference = (timestamp: number | undefined | null) => {
  if (!timestamp) return 0
  const currentDate = new Date().getTime()
  const time = new Date(timestamp * 1000).getTime()

  let delta = Math.abs(currentDate - time) / 1000

  const days = Math.floor(delta / 86400)
  delta -= days * 86400

  const hours = Math.floor(delta / 3600) % 24
  delta -= hours * 3600

  const minutes = Math.floor(delta / 60) % 60
  delta -= minutes * 60

  const seconds = Math.floor(delta % 60)

  let templateString = [days, hours, minutes, seconds]
    .map((a, index) => {
      switch (index) {
        case 0:
          return a > 0 ? `${a} Days, ` : ''
        case 1:
          return a > 0 ? `${a} Hours, ` : ''
        case 2:
          return a > 0 ? `${a} Mins, ` : ''
        case 3:
          return a > 0 ? `${a} Secs` : ''
      }
    })
    .join('  ')
    .replaceAll('  ', ' ')

  if (templateString.split(', ').length > 2) {
    templateString = templateString.split(', ').splice(0, 2).join(', ')
  }
  return templateString
}

const etherToGwei = (num: number | string | null | undefined) => {
  if (!num) return 0
  if (typeof num === 'string') return (Number(num) * 1000000000).toFixed(2)
  if (num) return (num * 1000000000).toFixed(2)
  return 0
}

const calculateStaticBlockReward = (block: string) => {
  const blockNumber = parseInt(block)
  if (0 < blockNumber && blockNumber < 4369999) {
    return 5
  } else if (4369999 < blockNumber && blockNumber < 7279999) {
    return 3
  } else if (7279999 < blockNumber) {
    return 2
  }
}

const convertToMillion = (num: number) => {
  return `${(num / 1e6).toFixed(2)} M`
}

const weiToEther = (
  num: number | undefined | null | string,
  fixed?: number
) => {
  if (!num) return 0

  if (typeof num === 'string') return (Number(num) / 1e18).toFixed(fixed)

  if (fixed) return (num / 1e18).toFixed(fixed)
  return num / 1e18
}

const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value)
}

const fixed = (number: number | undefined | null | string, fixed: number) => {
  if (!number) return 0
  if (typeof number === 'string') return parseFloat(number).toFixed(fixed)
  return number.toFixed(fixed)
}

const getBurntFee = (burntFeeSum: string | null | undefined) => {
  return numberWithCommas(weiToEther(burntFeeSum, 2))
}

const getGasFeesPercentage = (
  usageTxn: number | null | undefined,
  gasLimit: number | null | undefined
) => {
  if (!usageTxn || !gasLimit) return 0
  return ((usageTxn / gasLimit) * 100).toFixed(2)
}

const isNumber = (value: string) => {
  return numberRegex.test(value)
}

const mapRawDataToBlockDetails = (
  data: Eth_BlockQuery,
  block: string
): BlockDetails => {
  const { values } = data?.eth_blocks || {}
  return {
    Sha3Uncles: values?.[0]?.sha3_uncles,
    StateRoot: values?.[0]?.state_root,
    Hash: values?.[0]?.hash || '',
    ParentHash: values?.[0]?.parent_hash || '',
    Nonce: values?.[0]?.nonce,
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
  }
}

const mapRawDataToIntTransactions = (
  internalTransactions: GetInternalTransactionByBlockNumberQuery
): InternalTransactionData[] => {
  const data =
    internalTransactions.getInternalTransactionByBlockNumber.map(
      (transaction) => {
        return {
          parentTxnHash: transaction?.transactionHash,
          type: 'call',
          from: transaction?.from ?? '',
          to: transaction?.to ?? '',
          value: String(transaction?.value?.toFixed(4)),
        }
      }
    ) || []
  return data
}

const mapRawDataToInternalTransactions = (
  transactionDetails: GetTransactionByHashQuery
): InternalTxnsTabData[] => {
  const data =
    transactionDetails?.getTransactionByHash?.internalTxn?.map(
      (transaction) => {
        return {
          typeTraceAddress: transaction?.typeTraceAddress,
          from: transaction?.from || '',
          to: transaction?.to || '',
          value: String(transaction?.value),
          gasLimit: numberWithCommas(transaction?.gasLimit),
        }
      }
    ) || []
  return data
}

const mapRawDataToTransactionDetails = (
  transactionDetails: GetTransactionByHashQuery,
  blockConfirmation: number
): TransactionDetails => {
  return {
    Nonce: transactionDetails?.getTransactionByHash?.nonce,
    TransactionIndex:
      transactionDetails?.getTransactionByHash?.transaction_index,
    TransactionHash: transactionDetails?.getTransactionByHash.hash || '',
    Status: transactionDetails?.getTransactionByHash.receipt_status,
    Block: transactionDetails?.getTransactionByHash?.block_number,
    BlockConfirmation:
      blockConfirmation -
      Number(transactionDetails?.getTransactionByHash?.block_number),
    Timestamp: {
      time: `${getDifference(
        parseInt(transactionDetails?.getTransactionByHash.block_timestamp || '')
      )} ago`,
      Date: `(${new Date(
        parseInt(
          transactionDetails?.getTransactionByHash.block_timestamp || ''
        ) * 1000
      ).toUTCString()})`,
    },
    Gas_limit: transactionDetails.getTransactionByHash.gas,
    Usage_Txn: transactionDetails.getTransactionByHash.receipt_gas_used,
    TransactionAction: {
      approved: 'Approved',
      kuno: 'KUNO',
      trade: 'For Trade On',
      router: 'Uniswap V3: Router 2',
      checkIn: 'Check in',
      token: 'Token Approvals',
    },
    From: transactionDetails?.getTransactionByHash.from_address || '',
    To: transactionDetails?.getTransactionByHash.to_address || '',
    Value: `${transactionDetails?.getTransactionByHash.value} Ether`,
    Value_usd: `($${parseFloat(
      transactionDetails?.getTransactionByHash?.value_usd || ''
    ).toFixed(2)})`,
    TransactionFee: `${
      transactionDetails?.getTransactionByHash.transaction_fees
    } Ether ($${parseFloat(
      transactionDetails?.getTransactionByHash?.transaction_fees_usd || ''
    ).toFixed(2)})`,
    GasPrice: `${
      transactionDetails?.getTransactionByHash.gas_price
    } Ether (${etherToGwei(
      transactionDetails?.getTransactionByHash.gas_price
    )} Gwei)`,
    BaseFee: transactionDetails?.getTransactionByHash?.baseFee,
    MaxFee: transactionDetails?.getTransactionByHash?.maxFee,
    MaxPriorityFee: transactionDetails?.getTransactionByHash?.maxPriorityFee,
    TxnBurntFee: transactionDetails?.getTransactionByHash?.txnBurntFee,
    TxnSavingFee: transactionDetails?.getTransactionByHash?.txnSavingFee,
    input: transactionDetails?.getTransactionByHash?.input,
  }
}

const getEventNameFromRawData = (
  name: string | undefined | null,
  events: string | undefined | null
) => {
  if (!name) return ''

  const uniformString = name?.replace('(', ',').replace(')', '')
  const params = uniformString?.split(',')
  if (params?.length > 1) {
    let NameWithParams = `<ColouredText color={${colors.actionSecondary}}>${params[0]}</ColouredText>(`
    params.map((param: string, index) => {
      if (index !== 0)
        NameWithParams =
          NameWithParams +
          `<ColouredText color={${colors.actionPrimary}}>${param}</ColouredText>,&nbsp;`
    })
    NameWithParams += `<ColouredText color={${colors.actionSecondary}}>)</ColouredText>`
    return NameWithParams
  }

  if (!events) return `${name}`

  const parsedEvents = JSON.parse(events)
  let FullEventName = ``
  let count = 0
  parsedEvents.map((event: LogEvent) => {
    if (event['indexed']) {
      FullEventName =
        FullEventName +
        `&nbsp;index_topic_${count}&nbsp;<ColouredText color={${colors.actionPrimary}}>${event['type']}</ColouredText>&nbsp;<ColouredText color={${colors.semanticRed}}>${event['name']}</ColouredText>,&nbsp;`
    } else {
      FullEventName =
        FullEventName +
        `&nbsp;<ColouredText color={${colors.actionPrimary}}>${event['type']}</ColouredText>&nbsp;<ColouredText color={${colors.semanticRed}}>${event['name']}</ColouredText>,&nbsp;`
    }
    count = count + 1
  })

  return `${name} ( ${FullEventName} )`
}

const timeLapseInSeconds = (timeInMinutes: number) => {
  const timeInSeconds = timeInMinutes * 60
  return Math.round(new Date().getTime() / 1000 + timeInSeconds)
}

const getNetworkUtilization = (blocks: GetPaginatedEthBlocksQuery) => {
  const { values } = blocks?.eth_blocks || {}
  const PageSize = values?.length || 0
  let gasUsedSum = 0
  values?.map((block) => {
    gasUsedSum = gasUsedSum + Number(block.gas_used_percentage)
  })
  return gasUsedSum / PageSize
}

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
}
export { default as createEmotionCache } from './createEmotionCache'
