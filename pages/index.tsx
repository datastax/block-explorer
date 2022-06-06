import Hero from '@components/Home/Hero'
import SummaryBlocks from '@components/Home/SummaryBlocks'
import type { NextPage } from 'next'
import LatestData from '@components/Home/LatestData'
import { useQuery } from '@apollo/client'
import { TestQuery } from 'lib/graphql'

const Home: NextPage = () => {
  const { data, error } = useQuery(TestQuery)

  if (error) {
    console.error(error)
    return null
  }

  if (data) {
    console.log(data)
  }

  return (
    <>
      <Hero />
      <SummaryBlocks />
      <LatestData />
    </>
  )
}

export default Home
