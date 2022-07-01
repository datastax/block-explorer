import Graph from '@components/Home/Graph'
import SummaryBlock from '@components/Home/SummaryBlock'
import {
  CardsBox,
  Container,
  GraphBox,
  PriceStack,
  TransactionStack,
} from './styles'
import {
  summaryBlocksDataPrice,
  summaryBlocksDataTransactions,
} from '@constants/seeds'

const SummaryBlocks = () => {
  return (
    <Container>
      <CardsBox>
        <PriceStack>
          {summaryBlocksDataPrice.map((item, index) => (
            <SummaryBlock
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              stat={item.stat}
              supportingStat={item.supportingStat}
              fontSizeOfValue={item.fontSizeOfValue}
            />
          ))}
        </PriceStack>
        <TransactionStack>
          {summaryBlocksDataTransactions.map((item, index) => (
            <SummaryBlock
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              stat={item.stat}
              secondaryTitle={item.secondaryTitle}
              secondaryValue={item.secondaryValue}
              fontSizeOfValue={item.fontSizeOfValue}
              secondayStat={item.secondaryStat}
            />
          ))}
        </TransactionStack>
      </CardsBox>
      <GraphBox>
        <Graph />
      </GraphBox>
    </Container>
  )
}

export default SummaryBlocks
