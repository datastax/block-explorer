import { Button } from '@mui/material'
import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
const CustomPagingButton = styled(Button)({
  backgroundColor: colors.nordic,
  color: colors.neutral100,
  border: `1px solid ${colors.actionPrimary}`,
  height: '32px',
})

const ArrowBackStyle = styled(ArrowBackIosNewIcon)({
  color: colors.neutral100,
  height: '10px',
})
const ArrowForwardStyle = styled(ArrowForwardIosIcon)({
  color: colors.neutral100,
  height: '10px',
})
export { CustomPagingButton, ArrowBackStyle, ArrowForwardStyle }
