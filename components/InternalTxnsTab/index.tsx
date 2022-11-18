import { Typography } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import { InternalTxnTitle } from 'constants/stubs'
import { InternalTxnsTabData } from 'types'
import TxnsTable from './Table'

interface props {
  data: InternalTxnsTabData[]
}

const InternalTxns = ({ data }: props) => {
  return (
    <>
      <Typography fontWeight={500} fontSize="22px" color={colors.neutral100}>
        Internal Transactions
      </Typography>
      <TxnsTable titles={InternalTxnTitle} Data={data} loading={false} />
    </>
  )
}
export default InternalTxns
