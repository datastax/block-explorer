import Chart from '@components/shared/Chart'
import { Options } from '@components/shared/Icons'
import { graphData } from '@constants/seeds'
import { Box } from '@mui/material'
import { StyledTypograph, Container } from './styles'

const Graph = () => {
  return (
    <Container>
      <StyledTypograph>
        Ethereum Transaction History <span>14 days</span>
        <Options />
      </StyledTypograph>
      <Chart data={graphData} hideZero />
    </Container>
  )
}
export default Graph
