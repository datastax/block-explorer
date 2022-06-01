import { Box, Grid } from '@mui/material'
import Graph from '@components/Home/Graph'
import SummaryBlock from '@components/Home/SummaryBlock'
import { Container } from './styles'
import { summaryBlocksData } from '@constants/seeds'

const SummaryBlocks = () => {
  return (
    <Container>
      <Box>
        <Grid container rowSpacing={2.5} columnSpacing={2.5}>
          {summaryBlocksData.map((element, index) => (
            <Grid item key={index}>
              <SummaryBlock
                width={element.width}
                icon={element.icon}
                title={element.title}
                value={element.value}
                stat={element.stat}
                supportingStat={element.supportingStat}
                secondaryTitle={element.secondaryTitle}
                secondaryValue={element.secondaryValue}
                fontSizeOfValue={element.fontSizeOfValue}
                secondayStat={element.secondaryStat}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Graph />
      </Box>
    </Container>
  )
}

export default SummaryBlocks
