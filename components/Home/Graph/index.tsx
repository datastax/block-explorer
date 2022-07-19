import Chart from '@components/shared/Chart'
import { Options } from '@components/shared/Icons'
import { GraphData } from 'types'
import { StyledTypograph, Container, ToolTip } from './styles'

interface GraphProps {
  graph: GraphData[] | undefined
}
const Graph = ({ graph }: GraphProps) => {
  const renderTooltip = ({label, value}: GraphData) => (
    <ToolTip>
      <h6>ETH Stats</h6>
      <p>Date : {label}</p>
      <span>Price : {value}</span>
    </ToolTip>
  )

  return (
    <Container>
      <StyledTypograph>
        <div>
          Ethereum Transaction History <span>14 days</span>
        </div>
        <Options />
      </StyledTypograph>
      <Chart data={graph || []} hideZero tooltip={renderTooltip} />
    </Container>
  )
}
export default Graph
