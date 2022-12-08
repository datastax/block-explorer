import type { NextPage } from 'next'
import BlocksTable from '@components/Blocks/Table'
import Hero from '@components/shared/Hero'
import { BlocksTitle, PAGINATION_EVENT } from '@constants'
import {
  useGetLatestBlockGroupQuery,
  useGetPaginatedEthBlocksLazyQuery,
} from 'lib/graphql/generated'
import { useEffect, useState } from 'react'
import { getNetworkUtilization } from 'utils'

const Blocks: NextPage = () => {
  const [pageSize, setPageSize] = useState(10)
  const [pageStateArray, setPageStateArray] = useState<string[]>([''])
  const [networkUtilization, setNetworkutilization] = useState<number>()
  const {
    data: latestBlockGroup,
    error: latestBlockGroupError,
    loading: latestBlockGroupLoading,
  } = useGetLatestBlockGroupQuery()

  const [
    getPagintedEthBlocks,
    { data: latestBlocks, error: blocksError, loading: loadingBlocks },
  ] = useGetPaginatedEthBlocksLazyQuery()

  const handlePagination = (paginationEvent: PAGINATION_EVENT) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT)
      getPagintedEthBlocks({
        variables: {
          filter: {
            blocks_group: {
              eq: latestBlockGroup?.dashboard_analytics?.values?.[0]
                ?.latest_blocks_group,
            },
          },
          options: {
            pageState: pageStateArray[pageStateArray.length - 1],
            pageSize: pageSize,
          },
        },
        onError: () => {
          setPageStateArray([''])
        },
      })

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      getPagintedEthBlocks({
        variables: {
          filter: {
            blocks_group: {
              eq: latestBlockGroup?.dashboard_analytics?.values?.[0]
                ?.latest_blocks_group,
            },
          },
          options: {
            pageState: pageStateArray[pageStateArray.length - 3] || null,
            pageSize: pageSize,
          },
        },
        onError: () => {
          setPageStateArray([''])
        },
      })
      setPageStateArray((prev) => prev.slice(0, -2))
    }
  }

  useEffect(() => {
    setPageStateArray([''])
  }, [pageSize])

  useEffect(() => {
    if (latestBlockGroup) {
      getPagintedEthBlocks({
        variables: {
          filter: {
            blocks_group: {
              eq: latestBlockGroup?.dashboard_analytics?.values?.[0]
                ?.latest_blocks_group,
            },
          },
          options: {
            pageState: null,
            pageSize: pageSize,
          },
        },
        onError: () => {
          setPageStateArray([''])
        },
      })
    }
  }, [getPagintedEthBlocks, latestBlockGroup, pageSize])

  useEffect(() => {
    if (latestBlocks) {
      setNetworkutilization(getNetworkUtilization(latestBlocks))
      if (latestBlocks?.eth_blocks?.pageState) {
        setPageStateArray((prevState) => [
          ...prevState,
          String(latestBlocks?.eth_blocks?.pageState),
        ])
      }
    }
  }, [latestBlocks])

  if (blocksError) {
    console.error(blocksError)
  }

  if (latestBlockGroupError) {
    console.error(latestBlockGroupError)
  }

  return (
    <>
      <Hero
        title="Blocks"
        showChips={true}
        networkUtilization={networkUtilization}
        burntFeeSum={
          latestBlockGroup?.dashboard_analytics?.values?.[0]?.sum_of_burnt_fees
        }
      />
      <BlocksTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        Data={latestBlocks}
        titles={BlocksTitle}
        loading={latestBlockGroupLoading || loadingBlocks}
        handlePagination={handlePagination}
      />
    </>
  )
}

export default Blocks
