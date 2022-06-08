import { styled } from '@mui/system'
import { Button, ButtonGroup } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
const CustomButtonGroup = styled(ButtonGroup)({
  height: '36px',
})

const CustomButton = styled(Button)({
  color: 'white',
  '&:disabled': {
    color: colors.neutral300,
    border: `1px solid ${colors.neutral300}`,
  },
})

const ArrowBackStyle = styled(ArrowBackIosNewIcon)({
  color: colors.neutral300,
  height: '10px',
})
const ArrowForwardStyle = styled(ArrowForwardIosIcon)({
  color: colors.neutral100,
  height: '10px',
})

export { CustomButtonGroup, ArrowBackStyle, ArrowForwardStyle, CustomButton }
