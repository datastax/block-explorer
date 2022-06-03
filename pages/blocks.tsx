import type { NextPage } from 'next'
import BlocksTable from '@components/Blocks/Table'
import Hero from '@components/Blocks/Hero'
const Blocks: NextPage = () => {
  return (
    <>
      <Hero />
      <BlocksTable />
    </>
  )
}

export default Blocks
