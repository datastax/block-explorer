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
import { formatAddress, isNumber, mapRawDataToBlockDetails } from 'utils'
import { Box } from '@mui/material'
import CustomSkeleton from '@components/shared/CustomSkeleton'

const Block: NextPage = () => {
  const router = useRouter()
  const { block } = router.query
  const blockKey = block as string
  const [blockDetailsData, setBlockDetailsData] = useState<BlockDetails>()

  const [getBlockDetailsByNumber, { data: blockDetails, error: blocksError }] =
    useGetBlockByNumberLazyQuery()

  const [
    getBlockDetailsByHash,
    { data: blockDetailsHash, error: blocksErrorhash },
  ] = useGetBlockByHashLazyQuery()

  useEffect(() => {
    if (isNumber(blockKey))
      getBlockDetailsByNumber({
        variables: {
          data: Number(blockKey),
        },
      })
    if (!isNumber(blockKey))
      getBlockDetailsByHash({
        variables: {
          data: blockKey,
        },
      })
  }, [blockKey, getBlockDetailsByHash, getBlockDetailsByNumber])

  if (blocksError || blocksErrorhash) {
    console.error(blocksError + ' ' + blocksErrorhash)
  }

  useEffect(() => {
    if (blockDetails) {
      setBlockDetailsData(
        mapRawDataToBlockDetails(blockDetails?.getBlockByNumber, blockKey)
      )
    }
    if (blockDetailsHash) {
      setBlockDetailsData(
        mapRawDataToBlockDetails(blockDetailsHash?.getBlockByHash, blockKey)
      )
    }
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
