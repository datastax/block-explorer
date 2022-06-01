import DataList from '@components/Home/DataList'
import { blocksData, transactionsData } from '@constants/seeds'
import { Stack } from '@mui/material'

const LatestData = () => {
  return (
    <Stack spacing={'24px'} direction={'row'}>
      <DataList title={blocksData.title} blocksData={blocksData.data} miner />
      <DataList
        title={transactionsData.title}
        blocksData={transactionsData.data}
      />
    </Stack>
  )
}

export default LatestData
