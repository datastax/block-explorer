import Chart from '@components/shared/Chart';
import { useEffect, useState } from 'react';
import { GraphData } from 'types';
import { StyledTypograph, Container, ToolTip } from './styles';

const renderTooltip = ({ label, value }: GraphData) => (
  <ToolTip>
    <h6>ETH Stats</h6>
    <p>Date : {label}</p>
    <span>Transactions : {(value / 1000).toFixed(2)}k</span>
  </ToolTip>
);

interface GraphProps {
  graph: GraphData[] | undefined;
}

const Graph = ({ graph }: GraphProps) => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  useEffect(() => {
    if (graph) {
      let mini = graph[0].value;
      let maxi = graph[0].value;
      for (let i = 0; i < graph?.length; i += 1) {
        if (mini > graph[i].value) mini = graph[i].value;
        if (maxi < graph[i].value) maxi = graph[i].value;
      }
      // TO PLOT GRAPH IN CENTER ADDING MARGINS ON MIN AND MAX
      const marginMin = mini - 200000 < 0 ? 0 : min - 200000;
      const marginMax = mini + 200000;
      setMin(marginMin);
      setMax(marginMax);
    }
  }, [graph, max, min]);

  return (
    <Container>
      <StyledTypograph>
        <div>
          Ethereum Transaction History <span>14 days</span>
        </div>
        {/* HIDE OPTIONS FOR NOW */}
        {/* <Options /> */}
      </StyledTypograph>

      <Chart
        data={graph || []}
        hideZero
        tooltip={renderTooltip}
        domain={[min, max]}
      />
    </Container>
  );
};
export default Graph;
