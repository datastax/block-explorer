import Graph from '@components/Home/Graph';
import SummaryBlock from '@components/Home/SummaryBlock';
import {
  CardsBox,
  Container,
  GraphBox,
  PriceStack,
  TransactionStack,
  SkeletonWrapper,
} from './styles';
import { Dashboard_AnalyticsQuery } from 'lib/graphql/generated/generate';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  GraphData,
  SummaryBlocksDataPrice,
  SummaryBlocksDataTransactions,
} from 'types';
import {
  GET,
  handleError,
  mapRawDataToGraphData,
  mapRawDataToSummaryBlocks,
  mapRawDataToSummaryTransactions,
} from 'utils';
import CustomSkeleton from '@components/shared/CustomSkeleton';

interface SummaryBlocksInterfce {
  setLatestBlocksGroup: Dispatch<SetStateAction<number | undefined>>;
}

const SummaryBlocks = ({ setLatestBlocksGroup }: SummaryBlocksInterfce) => {
  const [graph, setGraph] = useState<GraphData[]>();
  const [dashboardAnalytics, setDashboardAnalytics] =
    useState<Dashboard_AnalyticsQuery>();
  const [summaryBlocksDataPriceList, setSummaryBlocksDataPriceList] =
    useState<SummaryBlocksDataPrice[]>();
  const [
    summaryBlocksDataTransactionsList,
    setSummaryBlocksDataTransactionsList,
  ] = useState<SummaryBlocksDataTransactions[]>();

  useEffect(() => {
    (async () => {
      const { data, error } = await GET('getDashboardAnalytics');
      setDashboardAnalytics(data);

      if (error) {
        handleError('getDashboardAnalytics', error);
      }
    })();
  }, []);

  useEffect(() => {
    if (dashboardAnalytics) {
      const blocksList: SummaryBlocksDataPrice[] =
        mapRawDataToSummaryBlocks(dashboardAnalytics);

      const transactionsList: SummaryBlocksDataTransactions[] =
        mapRawDataToSummaryTransactions(dashboardAnalytics);

      const graphData: GraphData[] = mapRawDataToGraphData(dashboardAnalytics);

      setSummaryBlocksDataPriceList(blocksList);
      setSummaryBlocksDataTransactionsList(transactionsList);
      setGraph(graphData);
      setLatestBlocksGroup(
        dashboardAnalytics?.dashboard_analytics?.values?.[0]
          ?.latest_blocks_group
      );
    }
  }, [dashboardAnalytics, setLatestBlocksGroup]);

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
  );
};

export default SummaryBlocks;
