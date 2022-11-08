import { mediumBlogUrl } from '@constants'
import { Stack } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import { Wrapper, Container, StyledTypography } from './styles'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Stack spacing={'24px'} direction={'row'}>
          <StyledTypography color={colors.neutral100}>
            DataStax © 2022
          </StyledTypography>
          <StyledTypography color={colors.neutral100}>
            🚀️ Powered By Astra -{' '}
            <span onClick={() => window.open(mediumBlogUrl, '_blank')}>
              See How It’s Done
            </span>
          </StyledTypography>
        </Stack>
      </Wrapper>
    </Container>
  )
}

export default Footer
