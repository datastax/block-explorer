import Graph from '@components/Home/Graph'
import SummaryBlock from '@components/Home/SummaryBlock'
import {
  CardsBox,
  Container,
  GraphBox,
  PriceStack,
  TransactionStack,
  SkeletonWrapper,
} from './styles'
import {
  summaryBlocksDataPrice,
  summaryBlocksDataTransactions,
} from '@constants/stubs'
import { useGetDashboardAnalyticsLazyQuery } from 'lib/graphql/generated'
import { useEffect, useState } from 'react'
import {
  GraphData,
  SummaryBlocksDataPrice,
  SummaryBlocksDataTransactions,
} from 'types'
import { convertToMillion, numberWithCommas } from 'utils'
import CustomSkeleton from '@components/shared/CustomSkeleton'

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
              block.title === 'Ether Price'
                ? `${parseFloat(
                    data.dashboardAnalytics.pricePercentageChange || ''
                  ).toFixed(2)}%`
                : undefined,
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
                : `${convertToMillion(
                    parseInt(data.dashboardAnalytics.totalTransactions || '')
                  )}`,
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
                : `${parseFloat(
                    data.dashboardAnalytics.medGasPrice || ''
                  ).toFixed(2)} Gwei`,
            fontSizeOfValue: block.fontSizeOfValue,
            secondaryStat: block.secondaryStat,
          }
        })
      let count = 1
      const graphData: GraphData[] =
        data.dashboardAnalytics?.transactionHistoryChart
          .map((node) => {
            const date = new Date()
            date.setDate(date.getDate() - count)
            const day = date.getDate()
            const month = date.toLocaleString('en-us', { month: 'long' })
            count += 1
            return {
              label: `${month} ${day}`,
              value: node,
            }
          })
          .reverse()
      setSummaryBlocksDataPriceList(blocksList)
      setSummaryBlocksDataTransactionsList(transactionsList)
      setGraph(graphData)
    }
  }, [data, getDashboardAnalytics])
  return (
    <Container>
      <CardsBox>
        <PriceStack>
          {summaryBlocksDataPriceList ? (
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
            ))
          ) : (
            <SkeletonWrapper>
              <CustomSkeleton rows={5} />
            </SkeletonWrapper>
          )}
        </PriceStack>
        <TransactionStack>
          {summaryBlocksDataTransactionsList ? (
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
            ))
          ) : (
            <SkeletonWrapper>
              <CustomSkeleton rows={5} />
            </SkeletonWrapper>
          )}
        </TransactionStack>
      </CardsBox>
      <GraphBox>
        {graph ? (
          <Graph graph={graph} />
        ) : (
          <SkeletonWrapper>
            <CustomSkeleton rows={5} />
          </SkeletonWrapper>
        )}
      </GraphBox>
    </Container>
  )
}

export default SummaryBlocks
