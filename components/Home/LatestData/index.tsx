import BlocksList from '@components/Home/BlocksList';
import TransactionsList from '@components/Home/TransactionsList';
import { Stack, useMediaQuery } from '@mui/material';
import {
  GetEthBlocksQuery,
  GetTransactionsOfLatestBlockQuery,
} from 'lib/graphql/generated/generate';
import { useEffect, useState } from 'react';
import CustomSkeleton from '@components/shared/CustomSkeleton';
import { Container } from './styles';
import { POST, handleError } from 'utils';

interface LatestDataProps {
  latestBlocksGroup: number | undefined;
}

const LatestData = ({ latestBlocksGroup }: LatestDataProps) => {
  const [latestBlocks, setLatestBlocks] = useState<GetEthBlocksQuery>();
  const [latestTransactions, setLatestTransactions] =
    useState<GetTransactionsOfLatestBlockQuery>();

  useEffect(() => {
    (async () => {
      if (latestBlocks && latestBlocks?.eth_blocks?.values?.[0]?.hash) {
        const { data, error } = await POST('getLatestTransactionsList', {
          blockHash: latestBlocks?.eth_blocks?.values?.[0]?.hash,
          pageSize: 6,
        });
        setLatestTransactions(data);
        if (error) {
          handleError('getLatestTransactionsList', error);
        }
      }
    })();
  }, [latestBlocks]);

  useEffect(() => {
    (async () => {
      if (latestBlocksGroup) {
        const { data, error } = await POST('getLatestBlocksList', {
          blockGroup: latestBlocksGroup,
          pageSize: 6,
        });
        setLatestBlocks(data);
        if (error) {
          handleError('getLatestBlocksList', error);
        }
      }
    })();
  }, [latestBlocksGroup]);

  const tabScreen = useMediaQuery('(max-width:1000px)');
  return (
    <Stack spacing={'24px'} direction={tabScreen ? 'column' : 'row'}>
      {latestBlocks?.eth_blocks?.values?.length ? (
        <BlocksList title={'Latest Blocks'} blocks={latestBlocks} />
      ) : (
        <Container>
          <CustomSkeleton rows={10} />
        </Container>
      )}
      {latestTransactions?.transactions?.values?.length ? (
        <TransactionsList
          title={'Latest Transactions'}
          transactionsList={latestTransactions}
        />
      ) : (
        <Container>
          <CustomSkeleton rows={10} />
        </Container>
      )}
    </Stack>
  );
};

export default LatestData;
