import type { NextPage } from 'next';
import BlocksTable from '@components/Blocks/Table';
import Hero from '@components/shared/Hero';
import { BlocksTitle, PAGINATION_EVENT } from '@constants';
import {
  GetLatestBlockGroupQuery,
  GetPaginatedEthBlocksQuery,
} from 'lib/graphql/generated/generate';
import { useEffect, useState } from 'react';
import { GET, getNetworkUtilization, handleError, POST } from 'utils';

const Blocks: NextPage = () => {
  const [pageSize, setPageSize] = useState(10);
  const [pageStateArray, setPageStateArray] = useState<string[]>(['']);
  const [networkUtilization, setNetworkutilization] = useState<number>();

  const [latestBlockGroupLoading, setlatestBlockGroupLoading] =
    useState<boolean>(false);
  const [latestBlockGroup, setLatestBlockGroup] =
    useState<GetLatestBlockGroupQuery>();

  const [loadingBlocks, setloadingBlocks] = useState<boolean>(false);
  const [latestBlocks, setLatestBlocks] =
    useState<GetPaginatedEthBlocksQuery>();

  const handlePagination = async (paginationEvent: PAGINATION_EVENT) => {
    if (paginationEvent === PAGINATION_EVENT.NEXT) {
      setloadingBlocks(true);
      const { data, error } = await POST('getPaginatedBlocks', {
        blockGroup:
          latestBlockGroup?.dashboard_analytics?.values?.[0]
            ?.latest_blocks_group,
        pageState: pageStateArray[pageStateArray.length - 1],
        pageSize,
      });
      setLatestBlocks(data);
      setloadingBlocks(false);
      if (error) {
        handleError('getPaginatedBlocks', error);
        setPageStateArray(['']);
      }
    }

    if (paginationEvent === PAGINATION_EVENT.PREV) {
      setloadingBlocks(true);
      const { data, error } = await POST('getPaginatedBlocks', {
        blockGroup:
          latestBlockGroup?.dashboard_analytics?.values?.[0]
            ?.latest_blocks_group,
        pageState: pageStateArray[pageStateArray.length - 3] || null,
        pageSize,
      });
      setLatestBlocks(data);
      setPageStateArray((prev) => prev.slice(0, -2));
      setloadingBlocks(false);
      if (error) {
        handleError('getPaginatedBlocks', error);
        setPageStateArray(['']);
      }
    }
  };

  useEffect(() => {
    (async () => {
      setlatestBlockGroupLoading(true);
      const { data, error } = await GET('getLatestBlockGroup');
      setLatestBlockGroup(data);
      setlatestBlockGroupLoading(false);

      if (error) {
        handleError('getLatestBlockGroup', error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (latestBlockGroup) {
        setloadingBlocks(true);
        const { data, error } = await POST('getPaginatedBlocks', {
          blockGroup:
            latestBlockGroup?.dashboard_analytics?.values?.[0]
              ?.latest_blocks_group,
          pageState: null,
          pageSize,
        });
        setLatestBlocks(data);
        setloadingBlocks(false);
        if (error) {
          handleError('getPaginatedBlocks', error);
        }
      }
    })();
  }, [latestBlockGroup, pageSize]);

  useEffect(() => {
    if (latestBlocks) {
      setNetworkutilization(getNetworkUtilization(latestBlocks));
      if (latestBlocks?.eth_blocks?.pageState) {
        setPageStateArray((prevState) => [
          ...prevState,
          String(latestBlocks?.eth_blocks?.pageState),
        ]);
      }
    }
  }, [latestBlocks]);

  useEffect(() => {
    setPageStateArray(['']);
  }, [pageSize]);

  return (
    <>
      <Hero
        title="Blocks"
        showChips={true}
        networkUtilization={networkUtilization}
        burntFeeSum={
          latestBlockGroup?.dashboard_analytics?.values?.[0]?.sum_of_burnt_fees
        }
      />
      <BlocksTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        Data={latestBlocks}
        titles={BlocksTitle}
        loading={latestBlockGroupLoading || loadingBlocks}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default Blocks;
