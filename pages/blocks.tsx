import type { NextPage } from 'next'
import BlocksTable from '@components/Blocks/Table'
import Hero from '@components/shared/Hero'
import { BlocksTitle } from '@constants/blocksData'
import { useGetPaginatedBlocksQuery } from 'lib/graphql/generated'
import { useState } from 'react'
const Blocks: NextPage = () => {
  const [pageSize, setPageSize] = useState(10)

  const { data: latestBlocks, error: blocksError } = useGetPaginatedBlocksQuery(
    {
      variables: {
        data: {
          pageSize: pageSize,
        },
      },
    }
  )

  if (blocksError) {
    console.error(blocksError)
  }

  return (
    <>
      <Hero title="Blocks" showChips={true} />
      <BlocksTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        Data={latestBlocks || undefined}
        titles={BlocksTitle}
      />
    </>
  )
}

export default Blocks
