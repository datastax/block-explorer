import Hero from '@components/Home/Hero'
import SummaryBlocks from '@components/Home/SummaryBlocks'
import type { NextPage } from 'next'
import LatestData from '@components/Home/LatestData'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SummaryBlocks />
      <LatestData />
    </>
  )
}

export default Home
