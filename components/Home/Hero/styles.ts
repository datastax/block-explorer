import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box, Typography } from '@mui/material'

const TitleText = styled(Typography)({
  fontWeight: 600,
  fontSize: '56px',
  lineHeight: '65.53px',
  color: colors.neutral100,
})

const SearchContainer = styled(Box)({
  display: 'flex',
  marginTop: '32px',
})

export { TitleText, SearchContainer }
