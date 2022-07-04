import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {
  SearchButton,
  SearchInput,
  Wrapper,
  CustomFilter,
} from './styles'
import { Box, FormControl, MenuItem, SelectChangeEvent } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
const Search = () => {
  const [filter, setFilter] = React.useState<string>('')

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setFilter(event.target.value as string)
  }
  const theme = useTheme()
  const showFilter = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Wrapper>
      {!showFilter ? (
        <Box>
          <FormControl sx={{ minWidth: '160px' }}>
            <CustomFilter
              value={filter}
              onChange={(event) => handleChange(event)}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="">
                <span style={{ paddingRight: '15px' }}>All Filters</span>
              </MenuItem>
              <MenuItem value={10}>Address</MenuItem>
              <MenuItem value={20}>Txn Hash</MenuItem>
              <MenuItem value={30}>Block</MenuItem>
              <MenuItem value={40}>Token</MenuItem>
              <MenuItem value={50}>Ens</MenuItem>
            </CustomFilter>
          </FormControl>
        </Box>
      ) : null}
      <SearchInput placeholder="Search by Address / Txn Hash/ Block / Token / Ens" />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  )
}

export default Search
