import type { NextPage } from 'next'
import BlocksTable from '@components/Blocks/Table'
import Hero from '@components/shared/Hero'
import { BlocksTitle } from '@constants/stubs'
import { useGetPaginatedBlocksQuery } from 'lib/graphql/generated'
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

  if (blocksError) {
    console.error(blocksError)
  }

  return (
    <>
      <Hero title="Blocks" showChips={true} />
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
