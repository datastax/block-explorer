import type { NextPage } from 'next'
import BlocksTable from '@components/Blocks/Table'
import Hero from '@components/shared/Hero'
import { BlocksData, BlocksTitle } from '@constants/blocksData'
const Blocks: NextPage = () => {
  return (
    <>
      <Hero title="Blocks" showChips={true} />
      <BlocksTable BlocksDataToMap={BlocksData} titles={BlocksTitle} />
    </>
  )
}

export default Blocks
