import Hero from '@components/Home/Hero'
import SummaryBlocks from '@components/Home/SummaryBlocks'
import type { NextPage } from 'next'
import LatestData from '@components/Home/LatestData'
import { useState } from 'react'

const Home: NextPage = () => {
  const [latestBlocksGroup, setLatestBlocksGroup] = useState<number>()
  return (
    <>
      <Hero />
      <SummaryBlocks setLatestBlocksGroup={setLatestBlocksGroup} />
      <LatestData latestBlocksGroup={latestBlocksGroup} />
    </>
  )
}

export default Home
