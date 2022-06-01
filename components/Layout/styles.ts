import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box } from '@mui/material'
const MainContainer = styled(Box)({
  background: colors.surfaceCard,
  width: '100%',
})
const Wrapper = styled(Box)({
  maxWidth: '1440px',
  margin: 'auto',
  padding: '0px 44px 44px',
})
export { MainContainer, Wrapper }
