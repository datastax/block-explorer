import type { NextPage } from 'next';
import Hero from '@components/shared/Hero';
import BlocksDetail from '@components/BlocksDetail';
import { BlockDetails } from '@types';
import { useGetEthBlockByNumberLazyQuery } from 'lib/graphql/generated/generate';
import { useEffect, useState } from 'react';
import {
  getBlockGroupFromBlockNumber,
  isNumber,
  mapRawDataToBlockDetails,
  redirect,
} from 'utils';
import { Box } from '@mui/material';
import CustomSkeleton from '@components/shared/CustomSkeleton';
import { useRouter } from 'next/router';

const Block: NextPage = () => {
  const Router = useRouter();
  const { block } = Router.query;

  const blockKey = block as string;
  const [blockDetailsData, setBlockDetailsData] = useState<BlockDetails>();

  const [getBlockDetailsByNumber, { data: blockDetails, error: blocksError }] =
    useGetEthBlockByNumberLazyQuery();
  useEffect(() => {
    if (isNumber(blockKey))
      getBlockDetailsByNumber({
        variables: {
          blockGroup: getBlockGroupFromBlockNumber(Number(blockKey)),
          blockNumber: Number(blockKey),
        },
      });
  }, [blockKey, getBlockDetailsByNumber]);

  useEffect(() => {
    if (blockDetails) {
      if (blockDetails?.eth_blocks?.values?.length === 0) redirect('/404');
      setBlockDetailsData(mapRawDataToBlockDetails(blockDetails, blockKey));
    }
  }, [blockDetails, blockKey]);

  if (blocksError) {
    console.error(blocksError);
    redirect('/404');
  }

  return (
    <>
      {block && (
        <Hero title="Block" blockNumber={`#${blockKey}`} showChips={false} />
      )}
      {blockDetailsData ? (
        <BlocksDetail BlocksDetailsData={blockDetailsData} />
      ) : (
        <Box sx={{ width: '100%' }}>
          <CustomSkeleton rows={10} />
        </Box>
      )}
    </>
  );
};

export default Block;
