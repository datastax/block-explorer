import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchButton, SearchInput, Wrapper, CustomFilter } from './styles';
import { Box, FormControl, MenuItem, SelectChangeEvent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import router from 'next/router';
import { searchPlaceHolders } from '@constants';
import { isNumber } from 'utils';

const Search = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [filter, setFilter] = useState<unknown>(0);
  const [search, setSearch] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setFilter(event.target.value);
  };

  const handleClick = () => {
    const transactionsbyTextPage = {
      pathname: '/transactionsbytext', // The target page
      query: { search },
    };

    if (search) {
      if (filter === 3) {
        router.push(transactionsbyTextPage);
      } else if (isNumber(search)) router.push(`/block/${search}`);
      else router.push(`/transaction/${search}`);
    }
  };

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {!isMobile ? (
        <Box>
          <FormControl sx={{ minWidth: '160px' }}>
            <CustomFilter
              value={filter}
              onChange={(event: SelectChangeEvent<unknown>) =>
                handleChange(event)
              }
              displayEmpty
              variant="outlined"
            >
              <MenuItem value={0}>
                <span style={{ paddingRight: '15px' }}>All Filters</span>
              </MenuItem>
              <MenuItem value={1}>Txn Hash</MenuItem>
              <MenuItem value={2}>Block</MenuItem>
              <MenuItem value={3}>Txn by Text</MenuItem>
            </CustomFilter>
          </FormControl>
        </Box>
      ) : null}
      <SearchInput
        placeholder={searchPlaceHolders[filter as number]}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton type="submit" onClick={handleClick}>
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  );
};

export default Search;
