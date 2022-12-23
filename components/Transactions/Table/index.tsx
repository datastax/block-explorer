import React, { Dispatch, SetStateAction, useState } from 'react';
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
import BottomPagination from '@components/shared/Pagination/BottomPagination';
import UpperPagination from '@components/shared/Pagination/UpperPagination';
import { GetPaginatedEThTransactionsQuery } from 'lib/graphql/generated/generate';
import { Exchange, Eye } from '@components/shared/Icons';
import Chip from '@components/shared/Chip';
import { formatAddress, getDifference, weiToEther } from 'utils';
import router from 'next/router';
import CustomSkeleton from '@components/shared/CustomSkeleton';
import { Box } from '@mui/material';
import { PAGINATION_EVENT } from '@constants';

interface TransactionsTableProps {
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
  titles: string[];
  transactions: GetPaginatedEThTransactionsQuery | undefined;
  loading: boolean;
  handlePagination: (paginationEvent: PAGINATION_EVENT) => void;
}

const TransactionsTable = ({
  pageSize,
  setPageSize,
  titles,
  transactions,
  loading,
  handlePagination,
}: TransactionsTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lengthOfEachPage = transactions?.transactions?.values?.length;

  const getUIValue = (
    keys: string[],
    values: (string | number | null | [])[],
    index: number
  ) => {
    if (index > 7) return;

    if (keys[index] === 'transaction_fees')
      return parseFloat(values[index]?.toString() || '').toFixed(8);
    else if (keys[index] === 'block_timestamp')
      return `${getDifference(Number(values[index]))} ago`;
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

  return (
    <BlockTableContainer>
      <CustomTableContainer>
        {!loading ? (
          <>
            <UpperPagination
              transaction={true}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={pageSize}
              lengthOfEachPage={lengthOfEachPage || 0}
              startingBlock={0}
              endingBlock={0}
              handlePagination={handlePagination}
            />
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
                {transactions?.transactions?.values?.map(
                  (transaction, index) => (
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      key={index}
                    >
                      <>
                        {[...Array(Object.keys(transaction).length)].map(
                          (_, index) => (
                            <React.Fragment key={index}>
                              <>
                                {transaction && index == 5 && (
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
                                color={Object.keys(transaction)[index]}
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
                                  {Object.keys(transaction)[index] !==
                                  'method' ? (
                                    <div
                                      onClick={() => {
                                        if (index == 0)
                                          router.push(
                                            `/transaction/${
                                              Object.values(transaction)[index]
                                            }`
                                          );
                                        else if (index == 2)
                                          router.push(
                                            `/block/${
                                              Object.values(transaction)[index]
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
                                        Object.keys(transaction),
                                        Object.values(transaction),
                                        index
                                      )}
                                    </div>
                                  ) : (
                                    <Chip
                                      label={getTransactionMethod(
                                        Object.values(transaction)[index]
                                      )}
                                      bgcolor={colors.nordic}
                                      border={`1px solid ${colors.actionPrimary}`}
                                      titlecolor={colors.neutral100}
                                    />
                                  )}
                                </CustomTableCellBox>
                              </CustomTableCell>
                            </React.Fragment>
                          )
                        )}
                      </>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
            <BottomPagination
              pageSize={pageSize}
              setPageSize={setPageSize}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lengthOfEachPage={lengthOfEachPage || 0}
              handlePagination={handlePagination}
            />
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

export default TransactionsTable;
