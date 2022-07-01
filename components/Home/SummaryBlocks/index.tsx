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
import { useGetDashboardAnalyticsLazyQuery } from 'lib/graphql/generated'
import { useEffect, useState } from 'react'
import {
  GraphData,
  SummaryBlocksDataPrice,
  SummaryBlocksDataTransactions,
} from 'types'
import { numberWithCommas } from 'utils'

const SummaryBlocks = () => {
  const [summaryBlocksDataPriceList, setSummaryBlocksDataPriceList] =
    useState<SummaryBlocksDataPrice[]>()
  const [
    summaryBlocksDataTransactionsList,
    setSummaryBlocksDataTransactionsList,
  ] = useState<SummaryBlocksDataTransactions[]>()
  const [graph, setGraph] = useState<GraphData[]>()
  const [getDashboardAnalytics, { data }] = useGetDashboardAnalyticsLazyQuery()

  useEffect(() => {
    getDashboardAnalytics()
    if (data) {
      const blocksList: SummaryBlocksDataPrice[] = summaryBlocksDataPrice.map(
        (block) => {
          return {
            icon: block.icon,
            title: block.title,
            value: `$${
              block.title === 'Ether Price'
                ? numberWithCommas(
                    parseFloat(
                      data.dashboardAnalytics.etherPriceUSD || ''
                    ).toFixed(2)
                  )
                : numberWithCommas(
                    parseFloat(
                      data.dashboardAnalytics.marketCapUSD || ''
                    ).toFixed(2)
                  )
            }`,
            stat:
              block.title === 'Ether Price'
                ? `@${parseFloat(
                    data.dashboardAnalytics.etherPriceBTC || ''
                  ).toFixed(5)} BTC`
                : undefined,
            supportingStat:
              block.title === 'Ether Price' ? block.supportingStat : undefined,
            fontSizeOfValue: block.fontSizeOfValue,
          }
        }
      )
      const transactionsList: SummaryBlocksDataTransactions[] =
        summaryBlocksDataTransactions.map((block) => {
          return {
            icon: block.icon,
            title: block.title,
            value:
              block.title === 'Difficuilty'
                ? `${numberWithCommas(
                    (
                      parseFloat(data.dashboardAnalytics.difficulty || '') /
                      10e12
                    ).toFixed(2)
                  )} TH`
                : block.value,
            stat:
              block.title === 'Transactions'
                ? `${parseFloat(data.dashboardAnalytics.tps || '').toFixed(
                    1
                  )} TPS`
                : block.stat,
            secondaryTitle: block.secondaryTitle,
            secondaryValue:
              block.secondaryTitle === 'Hash Rate'
                ? `${numberWithCommas(
                    (
                      parseFloat(data.dashboardAnalytics.hashrate || '') / 10e9
                    ).toFixed(2)
                  )} GH/s`
                : block.secondaryValue,
            fontSizeOfValue: block.fontSizeOfValue,
            secondaryStat: block.secondaryStat,
          }
        })

      const graphData: GraphData[] = data.dashboardAnalytics.chartData.map(
        (node) => {
          const date = new Date(node[0])
          const day = date.getDate()
          const month = date.toLocaleString('en-us', { month: 'long' })
          return {
            label: `${month} ${day}`,
            value: node[1],
          }
        }
      )
      setSummaryBlocksDataPriceList(blocksList)
      setSummaryBlocksDataTransactionsList(transactionsList)
      setGraph(graphData)
    }
  }, [data, getDashboardAnalytics])
  return (
    <Container>
      <CardsBox>
        <PriceStack>
          {summaryBlocksDataPriceList &&
            summaryBlocksDataPriceList.map((item, index) => (
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
          {summaryBlocksDataTransactionsList &&
            summaryBlocksDataTransactionsList.map((item, index) => (
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
        <Graph graph={graph} />
      </GraphBox>
    </Container>
  )
}

export default SummaryBlocks
