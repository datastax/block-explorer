import colors from 'styles/ThemeProvider/colors';
import { Table, TableBody, TableRow, Typography } from '@mui/material';
import Chip from '@components/shared/Chip';
import {
  ColumnBox,
  CustomTableCell,
  StyledCard,
  StyledButton,
  ChipWrapper,
} from './styles';
import { useRouter } from 'next/router';
import { GetEthBlocksQuery } from 'lib/graphql/generated/generate';
import { fixed, formatAddress, getDifference } from '@utils';

interface BlockListProps {
  title: string;
  blocks: GetEthBlocksQuery | undefined;
}

const BlocksList = ({ title, blocks }: BlockListProps) => {
  const router = useRouter();
  return (
    <StyledCard>
      <Typography
        fontWeight={500}
        fontSize={'24px'}
        lineHeight={'28px'}
        color={colors.neutral100}
      >
        {title}
      </Typography>

      <Table>
        <TableBody>
          {blocks?.eth_blocks?.values?.map((Block, index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={index}
            >
              <CustomTableCell
                color={colors.actionSecondary}
                border={`1px solid ${colors.neutral300}`}
                fontWeight="400"
                lineheight="24px"
              >
                <ColumnBox
                  flexValue="flex-start"
                  onClick={() => {
                    router.push(`/block/${Block.number}`);
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {Block.number}
                  <strong>
                    {getDifference(parseInt(Block?.timestamp || ''))} ago
                  </strong>
                </ColumnBox>
              </CustomTableCell>
              <CustomTableCell
                color={colors.actionSecondary}
                border={`1px solid ${colors.neutral300}`}
                fontWeight="400"
                lineheight="24px"
              >
                <ColumnBox flexValue="flex-start">
                  <div>
                    <span>Miner </span>
                    {formatAddress(Block.miner)}
                  </div>
                  <div>
                    <span>
                      <strong>
                        {Block.transaction_count} txns in {Block.mine_time} secs
                      </strong>
                    </span>
                  </div>
                </ColumnBox>
              </CustomTableCell>
              <CustomTableCell
                color={''}
                border={`1px solid ${colors.neutral300}`}
              >
                <ChipWrapper>
                  <Chip
                    bgcolor={colors.nordic}
                    border={`1px solid ${colors.actionPrimary}`}
                    titlecolor={colors.neutral100}
                    label={`${fixed(Block?.reward, 4)} Ether`}
                  />
                </ChipWrapper>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <StyledButton onClick={() => router.push('/blocks')}>
        VIEW All BLOCKS
      </StyledButton>
    </StyledCard>
  );
};

export default BlocksList;
