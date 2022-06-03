import type { NextPage } from 'next'
import BlocksTable from '@components/Blocks/Table'
import Hero from '@components/Blocks/Hero'
import { BlocksData, BlocksTitle } from '@constants/blocksData'
const Blocks: NextPage = () => {
  return (
    <>
      <Hero title='Blocks' />
      <BlocksTable BlocksDataToMap={BlocksData} titles={BlocksTitle}/>
    </>
  )
}

export default Blocks
