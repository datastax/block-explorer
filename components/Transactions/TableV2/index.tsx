/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import colors from '@styles/ThemeProvider/colors';
import {
  BlockTableContainer,
  CustomTableCell,
  CustomTableContainer,
  CustomTableCellHeder,
  HeaderBox,
  CustomTableCellBox,
  IconWrapper,
} from './styles';
import { GetPaginatedEThTransactionsQuery } from 'lib/graphql/generated/generate';
import { Exchange, Eye } from '@components/shared/Icons';
import Chip from '@components/shared/Chip';
import { formatAddress, weiToEther, getDifferenceV2 } from 'utils';
import router from 'next/router';
import CustomSkeleton from '@components/shared/CustomSkeleton';
import { Box } from '@mui/material';
import NotFound from '@pages/404';

interface TransactionsTableProps {
  titles: string[];
  transactions: GetPaginatedEThTransactionsQuery | undefined;
  loading: boolean;
}

interface Transaction {
  hash?: string | null;
  method?: string | null;
  block_number?: any | null;
  block_timestamp?: string | null;
  from_address?: string | null;
  to_address?: string | null;
  value?: any | null;
  transaction_fees?: string | null;
  transaction_index?: any | null;
  block_hash?: string | null;
}

const TransactionsTableV2 = ({
  titles,
  transactions,
  loading,
}: TransactionsTableProps) => {
  const getUIValue = (
    keys: string[],
    values: (string | number | null | [])[],
    index: number
  ) => {
    if (index > 7) return;

    if (keys[index] === 'transaction_fees')
      return parseFloat(values[index]?.toString() || '').toFixed(8);
    else if (keys[index] === 'block_timestamp')
      return `${getDifferenceV2(String(values[index]))}`;
    else if (keys[index] !== 'value')
      return formatAddress(values[index]?.toString());
    else
      return `${weiToEther(
        parseFloat(values[index]?.toString() || ''),
        4
      )} Ether`;
  };

  const getTransactionMethod = (
    transactionMethod: string | null | number | []
  ) => {
    if (!transactionMethod) return 'transfer';
    if (typeof transactionMethod === 'number') return transactionMethod;
    if (typeof transactionMethod === 'string')
      return transactionMethod.split('(')[0].substring(0, 10);
  };

  function transformData(data: any): Transaction {
    return {
      hash: data.hash || null,
      method: data.method || null,
      block_number: data.block_number || null,
      block_timestamp: data.block_timestamp || null,
      from_address: data.from_address || null,
      to_address: data.to_address || null,
      value: data.value || null,
      transaction_fees: data.transaction_fees || null,
      transaction_index: data.transaction_index || null,
      block_hash: data.block_hash || null,
    };
  }

  if (!transactions?.transactions?.values && !loading) return <NotFound />;

  return (
    <BlockTableContainer>
      <CustomTableContainer>
        {!loading ? (
          <>
            <Table>
              <TableHead>
                <TableRow>
                  {titles.map((title, index) => (
                    <CustomTableCellHeder
                      key={index}
                      align="center"
                      color={title}
                      border={`1px solid ${colors.neutral500}`}
                      fontWeight="500"
                      lineheight="157%"
                      $istransaction={true}
                    >
                      <HeaderBox
                        sx={{
                          marginLeft:
                            transactions && index === 0 ? '21%' : '0px',
                        }}
                      >
                        {title}
                      </HeaderBox>
                    </CustomTableCellHeder>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(transactions?.transactions?.values) &&
                  transactions?.transactions?.values?.map(
                    (transaction, index) => {
                      const transactionData: Transaction =
                        transformData(transaction);
                      return (
                        <TableRow
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                          key={index}
                        >
                          <>
                            {[
                              ...Array(Object.keys(transactionData).length),
                            ].map((_, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <>
                                    {transactionData && index == 5 && (
                                      <CustomTableCell
                                        color={''}
                                        border={`1px solid ${colors.neutral500}`}
                                      >
                                        <Exchange />
                                      </CustomTableCell>
                                    )}
                                  </>
                                  <CustomTableCell
                                    key={index}
                                    align="center"
                                    color={Object.keys(transactionData)[index]}
                                    border={`1px solid ${colors.neutral500}`}
                                    fontWeight="400"
                                    lineheight="143%"
                                    padding={index > 7 ? 'none' : 'normal'}
                                  >
                                    <CustomTableCellBox
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      {transactions && index == 0 && (
                                        <IconWrapper>
                                          <Eye />
                                        </IconWrapper>
                                      )}
                                      {Object.keys(transactionData)[index] !==
                                      'method' ? (
                                        <div
                                          onClick={() => {
                                            if (index == 0)
                                              router.push(
                                                `/transaction/${
                                                  Object.values(
                                                    transactionData
                                                  )[index]
                                                }`
                                              );
                                            else if (index == 2)
                                              router.push(
                                                `/block/${
                                                  Object.values(
                                                    transactionData
                                                  )[index]
                                                }`
                                              );
                                          }}
                                          style={{
                                            cursor:
                                              index == 0 || index == 2
                                                ? 'pointer'
                                                : 'default',
                                          }}
                                        >
                                          {getUIValue(
                                            Object.keys(transactionData),
                                            Object.values(transactionData),
                                            index
                                          )}
                                        </div>
                                      ) : (
                                        <Chip
                                          label={getTransactionMethod(
                                            Object.values(transactionData)[
                                              index
                                            ]
                                          )}
                                          bgcolor={colors.nordic}
                                          border={`1px solid ${colors.actionPrimary}`}
                                          titlecolor={colors.neutral100}
                                        />
                                      )}
                                    </CustomTableCellBox>
                                  </CustomTableCell>
                                </React.Fragment>
                              );
                            })}
                          </>
                        </TableRow>
                      );
                    }
                  )}
              </TableBody>
            </Table>
          </>
        ) : (
          <Box>
            <CustomSkeleton rows={10} />
          </Box>
        )}
      </CustomTableContainer>
    </BlockTableContainer>
  );
};

export default TransactionsTableV2;
