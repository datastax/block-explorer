import { Stack } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import { Wrapper, MainContiner, StyledTypography } from './styles'

const Footer = () => {
  return (
    <MainContiner>
      <Wrapper>
        <Stack spacing={'24px'} direction={'row'}>
          <StyledTypography fontColor={colors.neutral100}>
            Krypton © 2022
          </StyledTypography>
          <StyledTypography fontColor={colors.neutral100}>
            🚀️ Powered By Astra - <span>See How It’s Done</span>
          </StyledTypography>
        </Stack>
      </Wrapper>
    </MainContiner>
  )
}

export default Footer
