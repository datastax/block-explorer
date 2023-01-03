import BlocksList from '@components/Home/BlocksList';
import TransactionsList from '@components/Home/TransactionsList';
import { Stack, useMediaQuery } from '@mui/material';
import {
  GetEthBlocksQuery,
  GetPaginatedEThTransactionsQuery,
  GetTransactionsOfLatestBlockQuery,
} from 'lib/graphql/generated/generate';
import { useEffect, useState } from 'react';
import CustomSkeleton from '@components/shared/CustomSkeleton';
import { Container } from './styles';
import { POST, handleError } from 'utils';

interface LatestDataProps {
  latestBlocksGroup: number | undefined;
}

const PAGE_SIZE = 6;

const LatestData = ({ latestBlocksGroup }: LatestDataProps) => {
  const [latestBlocks, setLatestBlocks] = useState<GetEthBlocksQuery>();
  const [latestTransactions, setLatestTransactions] =
    useState<GetTransactionsOfLatestBlockQuery>();

  useEffect(() => {
    (async () => {
      if (latestBlocks && latestBlocks?.eth_blocks?.values?.[0]?.hash) {
        const { data: transactions, error } = await POST(
          'getLatestTransactionsList',
          {
            blockHash: latestBlocks?.eth_blocks?.values?.[1]?.hash,
            pageSize: PAGE_SIZE,
          }
        );
        if (error) {
          handleError('getLatestTransactionsList', error);
        }
        if (transactions?.transactions?.values?.length < PAGE_SIZE) {
          const { data: remainingTransactions, error } = await POST(
            'getLatestTransactionsList',
            {
              blockHash: latestBlocks?.eth_blocks?.values?.[0]?.hash,
              pageSize: PAGE_SIZE - transactions?.transactions?.values?.length,
            }
          );
          if (error) {
            handleError('getLatestTransactionsList', error);
          }
          const CombinedTransactions: GetPaginatedEThTransactionsQuery = {
            transactions: {
              pageState: remainingTransactions?.transactions?.pageState,
              values: [
                ...(transactions?.transactions?.values || []),
                ...(remainingTransactions?.transactions?.values || []),
              ],
            },
          };
          setLatestTransactions(CombinedTransactions);
        } else {
          setLatestTransactions(transactions);
        }
      }
    })();
  }, [latestBlocks]);

  useEffect(() => {
    (async () => {
      if (latestBlocksGroup) {
        const { data, error } = await POST('getLatestBlocksList', {
          blockGroup: latestBlocksGroup,
          pageSize: PAGE_SIZE,
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
