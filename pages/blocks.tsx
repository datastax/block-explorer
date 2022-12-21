import type { NextPage } from 'next'
import BlocksTable from '@components/Blocks/Table'
import Hero from '@components/shared/Hero'
import { BlocksTitle } from '@constants'
import {
  useGetDashboardBurntFeeSumQuery,
  useGetPaginatedBlocksQuery,
} from 'lib/graphql/generated'
import { useState } from 'react'

const Blocks: NextPage = () => {
  const [pageSize, setPageSize] = useState(10)
  const [next, setNext] = useState<number>()
  const [previous, setPrevious] = useState<number>()
  const {
    data: latestBlocks,
    error: blocksError,
    loading: loadingBlocks,
  } = useGetPaginatedBlocksQuery({
    variables: {
      data: {
        pageSize: pageSize,
        next: next,
        previous: previous,
      },
    },
    onError: () => {
      setNext(undefined)
      setPrevious(undefined)
    },
  })

  const { data: burntFeeSum, error: burntFeeSumError } =
    useGetDashboardBurntFeeSumQuery()
  if (blocksError) {
    console.error(blocksError)
  }

  if (burntFeeSumError) {
    console.error(burntFeeSumError)
  }

  return (
    <>
      <Hero
        title="Blocks"
        showChips={true}
        networkUtilization={latestBlocks?.getBlocks?.networkUtilization}
        burntFeeSum={burntFeeSum?.dashboardAnalytics?.burntFeeSum}
      />
      <BlocksTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        Data={latestBlocks}
        titles={BlocksTitle}
        setNext={setNext}
        setPrevious={setPrevious}
        loading={loadingBlocks}
      />
    </>
  )
}

export default Blocks
