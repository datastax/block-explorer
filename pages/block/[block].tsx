import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import BlocksDetail from '@components/BlocksDetail'
import { useRouter } from 'next/router'
import { BlockDetails } from '@types'
import {
  useGetBlockByHashLazyQuery,
  useEth_BlockLazyQuery,
  useGetLatestBlockGroupQuery,
} from 'lib/graphql/generated'
import { useEffect, useState } from 'react'
import { formatAddress, isNumber, mapRawDataToBlockDetails } from 'utils'
import { Box } from '@mui/material'
import CustomSkeleton from '@components/shared/CustomSkeleton'

const Block: NextPage = () => {
  const router = useRouter()
  const { block } = router.query
  const blockKey = block as string
  const [blockDetailsData, setBlockDetailsData] = useState<BlockDetails>()

  const { data: latestBlockGroup } = useGetLatestBlockGroupQuery()

  const [getBlockDetailsByNumber, { data: blockDetails, error: blocksError }] =
    useEth_BlockLazyQuery()

  const [
    getBlockDetailsByHash,
    { data: blockDetailsHash, error: blocksErrorhash },
  ] = useGetBlockByHashLazyQuery()

  useEffect(() => {
    if (isNumber(blockKey))
      getBlockDetailsByNumber({
        variables: {
          blockGroup: latestBlockGroup,
          blockNumber: Number(blockKey),
        },
      })
    // if (!isNumber(blockKey))
    //   getBlockDetailsByHash({
    //     variables: {
    //       data: blockKey,
    //     },
    //   })
  }, [blockKey, getBlockDetailsByHash, getBlockDetailsByNumber, latestBlockGroup])
  if (blocksError || blocksErrorhash) {
    console.error(blocksError + ' ' + blocksErrorhash)
  }

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
    // if (blockDetailsHash) {
    //   setBlockDetailsData(
    //     mapRawDataToBlockDetails(blockDetailsHash?.getBlockByHash, blockKey)
    //   )
    // }
  }, [block, blockDetails, blockDetailsHash, blockKey])

  return (
    <>
      {block && (
        <Hero
          title="Block"
          blockNumber={`#${formatAddress(blockKey)}`}
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
