import { Button } from '@mui/material'
import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
const CustomDropButton = styled(Button)({
  backgroundColor: colors.nordic,
  color: colors.neutral100,
  border: `1px solid ${colors.actionPrimary}`,
  height: '32px',
})
const TextStyle = styled('span')({
  fontSize: '12px',
})
export { CustomDropButton, TextStyle }
