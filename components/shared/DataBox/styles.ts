import { Button, styled } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import theme from '@styles/ThemeProvider/theme'

const InputBox = styled('div')({
  border: `1px solid ${colors.neutral500}`,
  borderRadius: '5px',
  padding: '10px',
  [theme.breakpoints.down('smA')]: {
    width: '500px',
  },
  wordBreak: 'break-word',
  width: '100%',
  color: colors.neutral300,
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  alignItems: 'center',
  overflowX: 'scroll',
  transition: 'all 1s ease-in',
})

const CustomButton = styled(Button)({
  display: 'flex',
  alignSelf: 'flex-start',
  marginLeft: '10px',
  '&:disabled': {
    background: colors.neutral300,
    color: colors.neutral100,
  },
})

export { InputBox, CustomButton }
