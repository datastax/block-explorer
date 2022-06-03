import type { NextPage } from 'next'
import Hero from '@components/Blocks/Hero'
import BlocksDetail from '@components/BlocksDetail'
const Block: NextPage = () => {
  return (
    <>
      <Hero title="Blocks" blockNumber=" #14850076" showChips={false} />
      <BlocksDetail />
    </>
  )
}

export default Block
