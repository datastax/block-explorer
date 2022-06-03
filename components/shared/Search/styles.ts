import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Box, Button, InputBase } from '@mui/material'
import Select from '@mui/material/Select'
const Wrapper = styled(Box)({
  p: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: '779px',
  background: 'none',
})

const SearchInput = styled(InputBase)({
  ml: 1,
  flex: 1,
  color: colors.darkTextSecondary,
  border: `1px solid ${colors.darkTextSecondary}`,
  height: '40px',
  borderRight: 'none',
  borderLeft: 'none',
  padding: '5px 15px 5px',
  '& .css-yz9k0d-MuiInputBase-input': {
    color: colors.darkTextSecondary,
  },
})

const SearchButton = styled(Button)({
  width: '40px',
  height: '40px',
  border: `1px solid ${colors.actionPrimary}`,
  background: colors.nordic,
  borderRadius: '0px 4px 4px 0px',
})

const CustomFilter = styled(Select)({
  color: colors.darkTextSecondary,
  height: '40px',
  border: `1px solid ${colors.darkTextSecondary}`,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  '&:select': {
    border: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
})

export { Wrapper, SearchInput, SearchButton, CustomFilter }
