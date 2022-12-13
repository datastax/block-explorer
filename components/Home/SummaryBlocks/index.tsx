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
} from '@constants'
import { useDashboard_AnalyticsLazyQuery } from 'lib/graphql/generated/generate'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  GraphData,
  SummaryBlocksDataPrice,
  SummaryBlocksDataTransactions,
} from 'types'
import { convertToMillion, numberWithCommas } from 'utils'
import CustomSkeleton from '@components/shared/CustomSkeleton'

interface SummaryBlocksInterfce {
  setLatestBlocksGroup: Dispatch<SetStateAction<number | undefined>>
}
const SummaryBlocks = ({ setLatestBlocksGroup }: SummaryBlocksInterfce) => {
  const [summaryBlocksDataPriceList, setSummaryBlocksDataPriceList] =
    useState<SummaryBlocksDataPrice[]>()
  const [
    summaryBlocksDataTransactionsList,
    setSummaryBlocksDataTransactionsList,
  ] = useState<SummaryBlocksDataTransactions[]>()
  const [graph, setGraph] = useState<GraphData[]>()
  const [getDashboardAnalytics, { data }] = useDashboard_AnalyticsLazyQuery()

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
                      data?.dashboard_analytics?.values?.[0]?.ether_price_usd ||
                        ''
                    ).toFixed(2)
                  )
                : numberWithCommas(
                    parseFloat(
                      data?.dashboard_analytics?.values?.[0]?.market_cap_usd ||
                        ''
                    ).toFixed(2)
                  )
            }`,
            stat:
              block.title === 'Ether Price'
                ? `@${parseFloat(
                    data?.dashboard_analytics?.values?.[0]?.ether_price_btc ||
                      ''
                  ).toFixed(5)} BTC`
                : undefined,
            supportingStat:
              block.title === 'Ether Price'
                ? `${parseFloat(
                    data?.dashboard_analytics?.values?.[0]
                      ?.price_percentage_change || ''
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
                      parseFloat(
                        data?.dashboard_analytics?.values?.[0]?.difficulty || ''
                      ) / 10e12
                    ).toFixed(2)
                  )} TH`
                : `${convertToMillion(
                    parseInt(
                      data?.dashboard_analytics?.values?.[0]
                        ?.total_transactions || ''
                    )
                  )}`,
            stat:
              block.title === 'Transactions'
                ? `${parseFloat(
                    data?.dashboard_analytics?.values?.[0]?.tps || ''
                  ).toFixed(1)} TPS`
                : block.stat,
            secondaryTitle: block.secondaryTitle,
            secondaryValue:
              block.secondaryTitle === 'Hash Rate'
                ? `${numberWithCommas(
                    (
                      parseFloat(
                        data?.dashboard_analytics?.values?.[0]?.hashrate || ''
                      ) / 10e9
                    ).toFixed(2)
                  )} GH/s`
                : `${parseFloat(
                    data?.dashboard_analytics?.values?.[0]?.med_gas_price || ''
                  ).toFixed(2)} Gwei`,
            fontSizeOfValue: block.fontSizeOfValue,
            secondaryStat: block.secondaryStat,
          }
        })
      let count = 1
      const graphData: GraphData[] = JSON.parse(
        data?.dashboard_analytics?.values?.[0]?.transactions_history_chart || ''
      )
        ?.map((node: string) => {
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
      setLatestBlocksGroup(
        data?.dashboard_analytics?.values?.[0]?.latest_blocks_group
      )
    }
  }, [data, getDashboardAnalytics, setLatestBlocksGroup])

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
