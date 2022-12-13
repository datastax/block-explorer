import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import BlocksDetail from '@components/BlocksDetail'
import { useRouter } from 'next/router'
import { BlockDetails } from '@types'
import {
  useGetEthBlockByNumberLazyQuery,
  useGetLatestBlockGroupQuery,
} from 'lib/graphql/generated/generate'
import { useEffect, useState } from 'react'
import { isNumber, mapRawDataToBlockDetails } from 'utils'
import { Box } from '@mui/material'
import CustomSkeleton from '@components/shared/CustomSkeleton'

const Block: NextPage = () => {
  const router = useRouter()
  const { block } = router.query
  const blockKey = block as string
  const [blockDetailsData, setBlockDetailsData] = useState<BlockDetails>()

  const { data: latestBlockGroup } = useGetLatestBlockGroupQuery()

  const [getBlockDetailsByNumber, { data: blockDetails, error: blocksError }] =
    useGetEthBlockByNumberLazyQuery()
  useEffect(() => {
    if (isNumber(blockKey))
      getBlockDetailsByNumber({
        variables: {
          blockGroup:
            latestBlockGroup?.dashboard_analytics?.values?.[0]
              ?.latest_blocks_group,
          blockNumber: Number(blockKey),
        },
      })
  }, [
    blockKey,
    getBlockDetailsByNumber,
    latestBlockGroup?.dashboard_analytics?.values,
  ])

  useEffect(() => {
    console.log(
      '🚀 ~ file: [block].tsx:54 ~ useEffect ~ blockDetails',
      blockDetails
    )
    if (blockDetails) {
      console.log(
        'mapRawDataToBlockDetails(blockDetails, blockKey)',
        mapRawDataToBlockDetails(blockDetails, blockKey)
      )
      setBlockDetailsData(mapRawDataToBlockDetails(blockDetails, blockKey))
    }
  }, [blockDetails, blockKey])

  if (blocksError) {
    console.error(blocksError)
  }

  return (
    <>
      {block && (
        <Hero title="Block" blockNumber={`#${blockKey}`} showChips={false} />
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
