import type { NextPage } from 'next'
import Hero from '@components/shared/Hero'
import TransactionDetail from '@components/TransactionDetail'
import { useRouter } from 'next/router'
import { useGetTransactionByHashQuery } from 'lib/graphql/generated'
import { useEffect, useState } from 'react'
import { TransactionDetails } from 'types'
import { etherToGwei, getDifference } from 'utils'
import { Box } from '@mui/material'
import CustomSkeleton from '@components/shared/CustomSkeleton'

const Transaction: NextPage = () => {
  const router = useRouter()
  const { transactionhash } = router.query

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

  useEffect(() => {
    if (transactionDetails) {
      setTransactionDetailData({
        TransactionHash: transactionDetails?.getTransactionByHash.hash || '',
        Status: '',
        Block:
          transactionDetails?.getTransactionByHash?.block_number,
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
        Value: `(${transactionDetails?.getTransactionByHash.value})`,
        TransactionFee: `${transactionDetails?.getTransactionByHash.transaction_fees} Ether ($)`,
        GasPrice: `${
          transactionDetails?.getTransactionByHash.gas_price
        } Ether (${etherToGwei(
          transactionDetails?.getTransactionByHash.gas_price
        )} Gwei)`,
      })
    }
  }, [transactionDetails])

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
