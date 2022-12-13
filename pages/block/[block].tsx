import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import BlocksDetail from '@components/BlocksDetail'
import { BlockDetails } from '@types'
import {
  useGetEthBlockByNumberLazyQuery,
  useGetLatestBlockGroupQuery,
} from 'lib/graphql/generated/generate'
import { useCallback, useEffect, useState } from 'react'
import { isNumber, mapRawDataToBlockDetails } from 'utils'
import { Box } from '@mui/material'
import CustomSkeleton from '@components/shared/CustomSkeleton'
import { useRouter } from 'next/router'

const Block: NextPage = () => {
  const Router = useRouter()
  const { block } = Router.query

  const blockKey = block as string
  const [blockDetailsData, setBlockDetailsData] = useState<BlockDetails>()
  const { data: latestBlockGroup } = useGetLatestBlockGroupQuery()

  const goTo404 = useCallback(() => {
    Router.push(`/404`)
  }, [Router])

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
    if (blockDetails) {
      if (blockDetails?.eth_blocks?.values?.length === 0) goTo404()
      setBlockDetailsData(mapRawDataToBlockDetails(blockDetails, blockKey))
    }
  }, [blockDetails, blockKey, goTo404])

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
