import Chart from '@components/shared/Chart'
import { Options } from '@components/shared/Icons'
import { graphData } from '@constants/seeds'
import { StyledTypograph, Container } from './styles'

const Graph = () => {
  return (
    <Container>
      <StyledTypograph>
        <div>
          Ethereum Transaction History <span>14 days</span>
        </div>
        <Options />
      </StyledTypograph>
      <Chart data={graphData} hideZero />
    </Container>
  )
}
export default Graph
