import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import TransactionDetail from '@components/TransactionDetail'
import { useRouter } from 'next/router'
import {
  useGetBlocksLazyQuery,
  useGetTransactionByHashQuery,
} from 'lib/graphql/generated'
import { useEffect, useState } from 'react'
import { TransactionDetails } from 'types'
import { etherToGwei, getDifference } from 'utils'
import { Box } from '@mui/material'
import CustomSkeleton from '@components/shared/CustomSkeleton'

const Transaction: NextPage = () => {
  const router = useRouter()
  const { transactionhash } = router.query
  const [blockConfirmation, setBlockConfirmation] = useState<number>()
  const [transactionDetailData, setTransactionDetailData] =
    useState<TransactionDetails>()

  const { data: transactionDetails, error: transactionError } =
    useGetTransactionByHashQuery({
      variables: {
        data: transactionhash as string,
      },
    })

  if (transactionError) {
    console.error(transactionError, setTransactionDetailData)
  }

  const [
    getLatestBlocks,
    { data: latestBlock, error: blockError, loading: blockLoading },
  ] = useGetBlocksLazyQuery()
  if (blockError) {
    console.error(blockError)
  }

  useEffect(() => {
    if (latestBlock)
      setBlockConfirmation(latestBlock?.getBlocks?.blocks[0]?.number)
  }, [latestBlock])

  useEffect(() => {
    if (transactionDetails) {
      getLatestBlocks({
        variables: {
          data: {
            pageSize: 1,
          },
        },
      })
      if (blockConfirmation && !blockLoading)
        setTransactionDetailData({
          Nonce: transactionDetails?.getTransactionByHash?.nonce,
          TransactionIndex:
            transactionDetails?.getTransactionByHash?.transaction_index,
          TransactionHash: transactionDetails?.getTransactionByHash.hash || '',
          Status: transactionDetails?.getTransactionByHash.receipt_status,
          Block: transactionDetails?.getTransactionByHash?.block_number,
          BlockConfirmation:
            blockConfirmation -
            Number(transactionDetails?.getTransactionByHash?.block_number),
          Timestamp: {
            time: `${getDifference(
              parseInt(
                transactionDetails?.getTransactionByHash.block_timestamp || ''
              )
            )} ago`,
            Date: `(${new Date(
              parseInt(
                transactionDetails?.getTransactionByHash.block_timestamp || ''
              ) * 1000
            ).toUTCString()})`,
          },
          Gas_limit: transactionDetails.getTransactionByHash.gas,
          Usage_Txn: transactionDetails.getTransactionByHash.receipt_gas_used,
          TransactionAction: {
            approved: 'Approved',
            kuno: 'KUNO',
            trade: 'For Trade On',
            router: 'Uniswap V3: Router 2',
            checkIn: 'Check in',
            token: 'Token Approvals',
          },
          From: transactionDetails?.getTransactionByHash.from_address || '',
          To: transactionDetails?.getTransactionByHash.to_address || '',
          Value: `${transactionDetails?.getTransactionByHash.value} Ether`,
          Value_usd: `($${parseFloat(
            transactionDetails?.getTransactionByHash?.value_usd || ''
          ).toFixed(2)})`,
          TransactionFee: `${
            transactionDetails?.getTransactionByHash.transaction_fees
          } Ether ($${parseFloat(
            transactionDetails?.getTransactionByHash?.transaction_fees_usd || ''
          ).toFixed(2)})`,
          GasPrice: `${
            transactionDetails?.getTransactionByHash.gas_price
          } Ether (${etherToGwei(
            transactionDetails?.getTransactionByHash.gas_price
          )} Gwei)`,
          BaseFee: transactionDetails?.getTransactionByHash?.baseFee,
          MaxFee: transactionDetails?.getTransactionByHash?.maxFee,
          MaxPriorityFee:
            transactionDetails?.getTransactionByHash?.maxPriorityFee,
          TxnBurntFee: transactionDetails?.getTransactionByHash?.txnBurntFee,
          TxnSavingFee: transactionDetails?.getTransactionByHash?.txnSavingFee,
          input: transactionDetails?.getTransactionByHash?.input,
        })
    }
  }, [
    blockConfirmation,
    blockLoading,
    getLatestBlocks,
    latestBlock,
    transactionDetails,
  ])

  return (
    <>
      <Hero
        title="Transaction Details"
        showChips={false}
        showPagination={true}
        showDropdown={true}
      />
      {transactionDetailData ? (
        <TransactionDetail TransactionData={transactionDetailData} />
      ) : (
        <Box sx={{ width: '100%' }}>
          <CustomSkeleton rows={10} />
        </Box>
      )}
    </>
  )
}

export default Transaction
