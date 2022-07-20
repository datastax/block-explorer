import { styled } from '@mui/system'
import colors from '@styles/ThemeProvider/colors'
import { Button, InputBase } from '@mui/material'
import Select from '@mui/material/Select'
const Wrapper = styled('form')((props) => ({
  p: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '779px',
  minWidth: '500px',
  background: 'none',
  [props.theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [props.theme.breakpoints.down('sm')]: {
    minWidth: '300px',
  },
}))

const SearchInput = styled(InputBase)((props) => ({
  ml: 1,
  flex: 1,
  color: colors.darkTextSecondary,
  border: `1px solid ${colors.darkTextSecondary}`,
  height: '40px',
  width: '100%',
  borderRight: 'none',
  borderLeft: 'none',
  padding: '5px 15px 5px',
  '& .css-yz9k0d-MuiInputBase-input': {
    color: colors.darkTextSecondary,
  },
  [props.theme.breakpoints.down('sm')]: {
    borderLeft: `1px solid ${colors.darkTextSecondary}`,
    borderRadius: '4px 0px 0px 4px',
    width: '100%',
  },
}))

const SearchButton = styled(Button)({
  minWidth: '40px !important',
  height: '40px',
  border: `1px solid ${colors.actionPrimary}`,
  background: colors.nordic,
  borderRadius: '0px 4px 4px 0px',
  svg: {
    color: colors.neutral100,
  },
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
  '& .MuiSvgIcon-root': {
    color: colors.darkTextSecondary,
  },
})

const MenuTitle = styled('span')({
  paddingRight: '15px',
})

export { Wrapper, SearchInput, SearchButton, CustomFilter, MenuTitle }
