import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { SearchButton, SearchInput, Wrapper, CustomFilter } from './styles'
import { Box, FormControl, MenuItem, SelectChangeEvent } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useSearchRawLazyQuery } from 'lib/graphql/generated'
import router from 'next/router'
const Search = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [filter, setFilter] = useState<string>('')
  const [search, setSearch] = useState('')

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setFilter(event.target.value as string)
  }

  const [getSearchRaw, { data, loading, error }] = useSearchRawLazyQuery()

  if (error) {
    console.log('Error Getting Search Results :>> ', error?.message)
  }

  const handleClick = () => {
    if (search)
      getSearchRaw({
        variables: {
          data: search,
        },
      })
  }

  useEffect(() => {
    if (data?.searchRaw.block?.number) {
      router.push(`/block/${data?.searchRaw.block?.number}`)
    } else if (data?.searchRaw.transaction?.hash) {
      router.push(`/transaction/${data?.searchRaw.transaction?.hash}`)
    } else if (
      data &&
      (!data?.searchRaw.transaction?.hash || !data?.searchRaw.block?.number)
    ) {
      router.push(`/404`)
    }
  }, [data])

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        handleClick()
      }}
    >
      {!isMobile ? (
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
      <SearchInput
        placeholder="Search by Txn Hash or Block Number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton type="submit" disabled={loading} onClick={handleClick}>
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  )
}

export default Search
