import { Box, styled } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'

const FontStyling = styled(Box)({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
  paddingBottom: '27px',
})
const BlockStyle = styled('span')({
  color: colors.neutral300,
  marginLeft: '5px',
})

export { FontStyling, BlockStyle }
