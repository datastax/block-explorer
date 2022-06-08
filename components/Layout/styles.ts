import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box } from '@mui/material'
const MainContainer = styled(Box)({
  background: colors.surfaceCard,
  width: '100%',
})

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1440px',
  margin: 'auto',
  padding: '40px 44px',
  // [theme.breakpoints.down('lg')]: {
  //   padding: '40px 34px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '40px 24px',
  // },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 15px',
  },
}))

export { MainContainer, Wrapper }
