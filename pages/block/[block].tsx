import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import BlocksDetail from '@components/BlocksDetail'
import { useRouter } from 'next/router'
import { BlockDetails } from '@types'
import { useGetBlockByNumberQuery } from 'lib/graphql/generated'
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

  const [blockDetailsData, setBlockDetailsData] = useState<BlockDetails>()

  const { data: blockDetails, error: blocksError } = useGetBlockByNumberQuery({
    variables: {
      data: parseInt(block as string),
    },
  })

  if (blocksError) {
    console.error(blocksError)
  }

  useEffect(() => {
    if (blockDetails) {
      setBlockDetailsData({
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
  }, [block, blockDetails])

  return (
    <>
      <Hero title="Blocks" blockNumber={`#${block}`} showChips={false} />
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
