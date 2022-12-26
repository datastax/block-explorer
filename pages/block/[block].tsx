import type { NextPage, NextPageContext } from 'next';
import Hero from '@components/shared/Hero';
import BlocksDetail from '@components/BlocksDetail';
import { BlockDetails } from '@types';
import { Query } from 'lib/graphql/generated/generate';
import {
  getBlockGroupFromBlockNumber,
  isNumber,
  mapRawDataToBlockDetails,
} from 'utils';
import { Box } from '@mui/material';
import CustomSkeleton from '@components/shared/CustomSkeleton';
import { useRouter } from 'next/router';
import { GET_ETH_BLOCK_BY_NUMBER } from 'lib/graphql/queries';
import { gql } from '@apollo/client';
import client from 'lib/graphql/apolloClient';

interface BlockDetailProps {
  blockDetailsData: BlockDetails;
}

const Block: NextPage<BlockDetailProps> = ({
  blockDetailsData,
}: BlockDetailProps) => {
  const Router = useRouter();
  const { block } = Router.query;
  const blockKey = block as string;

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

export async function getServerSideProps(context: NextPageContext) {
  const { block } = context.query;

  let blockDetailsData = null;
  const blocksError = null;

  if (block && isNumber(String(block))) {
    const { data, error } = await client.query<Query>({
      query: gql`
        ${GET_ETH_BLOCK_BY_NUMBER}
      `,
      variables: {
        blockGroup: getBlockGroupFromBlockNumber(Number(block)),
        blockNumber: Number(block),
      },
    });
    if (error || !data?.eth_blocks?.values?.[0]?.hash)
      return {
        redirect: {
          permanent: false,
          destination: '/404',
        },
      };

    if (data) blockDetailsData = mapRawDataToBlockDetails(data, String(block));
  }
  if (blocksError || !blockDetailsData)
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  return {
    props: {
      blockDetailsData,
      blocksError: blocksError,
    },
  };
}
