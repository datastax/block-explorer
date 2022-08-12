import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import BlocksDetail from '@components/BlocksDetail'
import { useRouter } from 'next/router'
import { BlockDetails } from '@types'
import {
  useGetBlockByHashLazyQuery,
  useGetBlockByNumberLazyQuery,
} from 'lib/graphql/generated'
import { useEffect, useState } from 'react'
import {
  getDifference,
  formatAddress,
  numberWithCommas,
  etherToGwei,
  calculateStaticBlockReward,
} from 'utils'
import { Box } from '@mui/material'
import CustomSkeleton from '@components/shared/CustomSkeleton'

const Block: NextPage = () => {
  const router = useRouter()
  const { block } = router.query
  const blockValue = block as string
  const [blockDetailsData, setBlockDetailsData] = useState<BlockDetails>()

  const [getBlockDetailsByNumber, { data: blockDetails, error: blocksError }] =
    useGetBlockByNumberLazyQuery()

  const [
    getBlockDetailsByHash,
    { data: blockDetailsHash, error: blocksErrorhash },
  ] = useGetBlockByHashLazyQuery()

  useEffect(() => {
    if (blockValue?.length < 10)
      getBlockDetailsByNumber({
        variables: {
          data: Number(blockValue),
        },
      })
    if (blockValue?.length > 10)
      getBlockDetailsByHash({
        variables: {
          data: blockValue,
        },
      })
  }, [blockValue, getBlockDetailsByHash, getBlockDetailsByNumber])

  if (blocksError || blocksErrorhash) {
    console.error(blocksError + ' ' + blocksErrorhash)
  }

  useEffect(() => {
    if (blockDetails) {
      setBlockDetailsData({
        Sha3Uncles: blockDetails?.getBlockByNumber?.sha3_uncles,
        StateRoot: blockDetails?.getBlockByNumber?.state_root,
        Hash: blockDetails?.getBlockByNumber?.hash || '',
        ParentHash: blockDetails?.getBlockByNumber?.parent_hash || '',
        Nonce: blockDetails?.getBlockByNumber?.nonce,
        internalTransaction: 0,
        BlockHeight: blockDetails?.getBlockByNumber?.number.toString() || '',
        Timestamp: {
          time: `${getDifference(
            parseInt(blockDetails?.getBlockByNumber?.timestamp || '')
          )} ago`,
          Date: `(${new Date(
            parseInt(blockDetails?.getBlockByNumber?.timestamp || '') * 1000
          ).toUTCString()})`,
        },
        Transactions: `${blockDetails?.getBlockByNumber?.transaction_count}`,
        MinedBy: {
          address: blockDetails?.getBlockByNumber?.miner || '',
          miner: `(Miner: ${formatAddress(
            blockDetails?.getBlockByNumber?.miner
          )})`,
          time: `in ${blockDetails?.getBlockByNumber?.mine_time} secs`,
        },
        BlockReward: `${
          blockDetails?.getBlockByNumber?.reward
        } Ether (${calculateStaticBlockReward(block as string)} + ${
          blockDetails.getBlockByNumber?.txn_fees
        } - ${blockDetails?.getBlockByNumber?.burnt_fee})`,
        UnclesReward: blockDetails?.getBlockByNumber?.uncle_reward || '',
        Difficulty:
          numberWithCommas(blockDetails?.getBlockByNumber?.difficulty || 0) ||
          '',
        TotalDifficulty:
          numberWithCommas(
            blockDetails?.getBlockByNumber?.total_difficulty || 0
          ) || '',
        Size:
          numberWithCommas(blockDetails?.getBlockByNumber?.size || 0) +
          ' bytes',
        GasUsed: numberWithCommas(
          blockDetails?.getBlockByNumber?.gas_used || 0
        ),
        GasUsedPercetge: parseFloat(
          blockDetails?.getBlockByNumber?.gas_used_percentage || ''
        ),
        GasTargetPercentage: parseFloat(
          blockDetails?.getBlockByNumber?.gas_target_percentage || ''
        ),
        GasLimit: numberWithCommas(
          blockDetails?.getBlockByNumber?.gas_limit || 0
        ),
        BaseFeePerGas: blockDetails?.getBlockByNumber?.base_fee_per_gas
          ? `${
              blockDetails?.getBlockByNumber?.base_fee_per_gas
            } Ether (${etherToGwei(
              parseFloat(blockDetails?.getBlockByNumber?.base_fee_per_gas || '')
            )} Gwei)`
          : null,
        BurntFees: parseFloat(blockDetails?.getBlockByNumber?.burnt_fee || '')
          ? `🔥 ${blockDetails?.getBlockByNumber?.burnt_fee} Ether`
          : null,
        ExtraData: `speth03�0\`' (Hex:${blockDetails?.getBlockByNumber?.extra_data})`,
      })
    }
    if (blockDetailsHash) {
      setBlockDetailsData({
        Sha3Uncles: blockDetailsHash?.getBlockByHash?.sha3_uncles,
        StateRoot: blockDetailsHash?.getBlockByHash?.state_root,
        Hash: blockDetailsHash?.getBlockByHash?.hash || '',
        ParentHash: blockDetailsHash?.getBlockByHash?.parent_hash || '',
        Nonce: blockDetailsHash?.getBlockByHash?.nonce,
        internalTransaction: 0,
        BlockHeight: blockDetailsHash?.getBlockByHash?.number.toString() || '',
        Timestamp: {
          time: `${getDifference(
            parseInt(blockDetailsHash?.getBlockByHash?.timestamp || '')
          )} ago`,
          Date: `(${new Date(
            parseInt(blockDetailsHash?.getBlockByHash?.timestamp || '') * 1000
          ).toUTCString()})`,
        },
        Transactions: `${blockDetailsHash?.getBlockByHash?.transaction_count}`,
        MinedBy: {
          address: blockDetailsHash?.getBlockByHash?.miner || '',
          miner: `(Miner: ${formatAddress(
            blockDetailsHash?.getBlockByHash?.miner
          )})`,
          time: `in ${blockDetailsHash?.getBlockByHash?.mine_time} secs`,
        },
        BlockReward: `${
          blockDetailsHash?.getBlockByHash?.reward
        } Ether (${calculateStaticBlockReward(block as string)} + ${
          blockDetailsHash?.getBlockByHash?.txn_fees
        } - ${blockDetailsHash?.getBlockByHash?.burnt_fee})`,
        UnclesReward: blockDetailsHash?.getBlockByHash?.uncle_reward || '',
        Difficulty:
          numberWithCommas(blockDetailsHash?.getBlockByHash?.difficulty || 0) ||
          '',
        TotalDifficulty:
          numberWithCommas(
            blockDetailsHash?.getBlockByHash?.total_difficulty || 0
          ) || '',
        Size:
          numberWithCommas(blockDetailsHash?.getBlockByHash?.size || 0) +
          ' bytes',
        GasUsed: numberWithCommas(
          blockDetailsHash?.getBlockByHash?.gas_used || 0
        ),
        GasUsedPercetge: parseFloat(
          blockDetailsHash?.getBlockByHash?.gas_used_percentage || ''
        ),
        GasTargetPercentage: parseFloat(
          blockDetailsHash?.getBlockByHash?.gas_target_percentage || ''
        ),
        GasLimit: numberWithCommas(
          blockDetailsHash?.getBlockByHash?.gas_limit || 0
        ),
        BaseFeePerGas: blockDetailsHash?.getBlockByHash?.base_fee_per_gas
          ? `${
              blockDetailsHash?.getBlockByHash?.base_fee_per_gas
            } Ether (${etherToGwei(
              parseFloat(
                blockDetailsHash?.getBlockByHash?.base_fee_per_gas || ''
              )
            )} Gwei)`
          : null,
        BurntFees: parseFloat(blockDetailsHash?.getBlockByHash?.burnt_fee || '')
          ? `🔥 ${blockDetailsHash?.getBlockByHash?.burnt_fee} Ether`
          : null,
        ExtraData: `speth03�0\`' (Hex:${blockDetailsHash?.getBlockByHash?.extra_data})`,
      })
    }
  }, [block, blockDetails, blockDetailsHash])

  return (
    <>
      {block && (
        <Hero
          title="Block"
          blockNumber={`#${formatAddress(blockValue)}`}
          showChips={false}
        />
      )}
      {blockDetailsData ? (
        <BlocksDetail BlocksDetailsData={blockDetailsData} />
      ) : (
        <Box sx={{ width: '100%' }}>
          <CustomSkeleton rows={10} />
        </Box>
      )}
    </>
  )
}

export default Block
