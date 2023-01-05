import React, { useEffect, useState } from 'react';
import Logo from '@components/shared/Logo';
import { Box, useMediaQuery } from '@mui/material';
import {
  Container,
  Wrapper,
  StyledLink,
  StyledLabel,
  SearchBox,
  LogoBox,
  CustomStack,
} from './styles';
import { ROUTES } from '@constants';
import { Route } from '@types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from '@components/shared/Search';
import Chip from '@components/shared/Chip';
import colors from '@styles/ThemeProvider/colors';
import theme from '@styles/ThemeProvider/theme';
import { Dashboard_Analytics_HeaderQuery } from 'lib/graphql/generated/generate';
import { fixed, GET, handleError } from 'utils';

interface ChiplabelProps {
  data: Dashboard_Analytics_HeaderQuery | undefined;
}
const ChipLabel = ({ data }: ChiplabelProps) => {
  return (
    <>
      {data && (
        <StyledLabel>
          Eth: $
          {fixed(data?.dashboard_analytics?.values?.[0]?.ether_price_usd, 2)}
          <span>
            {' '}
            (
            {fixed(
              data?.dashboard_analytics?.values?.[0]?.price_percentage_change,
              2
            )}
            %){' '}
          </span>
          <span>
            | ⛽️{' '}
            {Number(data?.dashboard_analytics?.values?.[0]?.network_base_fee) +
              Number(
                data?.dashboard_analytics?.values?.[0]?.network_priority_fee
              )}{' '}
            Gwei
          </span>
        </StyledLabel>
      )}
    </>
  );
};

const Header = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('smA'));
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  const [dashboardAnalytics, setDashboardAnalytics] =
    useState<Dashboard_Analytics_HeaderQuery>();

  useEffect(() => {
    (async () => {
      const { data, error } = await GET('getDashboardAnalyticsHeader');
      setDashboardAnalytics(data);

      if (error) {
        handleError('getDashboardAnalyticsHeader', error);
      }
    })();
  }, []);

  return (
    <Container>
      <Wrapper theme={theme} height="72px" isHome={isHome}>
        <LogoBox theme={theme} isHome={isHome}>
          <Link passHref href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </LogoBox>

        {!isHome ? (
          <SearchBox>
            <Search />
          </SearchBox>
        ) : (
          <CustomStack
            spacing={isMobile ? '20px' : '40px'}
            direction={'row'}
            theme={theme}
            $isHome={isHome}
          >
            {ROUTES.map(({ name, link }: Route, index) => (
              <Link passHref key={index} href={link}>
                <StyledLink>{name}</StyledLink>
              </Link>
            ))}
          </CustomStack>
        )}
      </Wrapper>

      {!isHome && (
        <Wrapper
          theme={theme}
          height="auto"
          padding="12px 44px 26px !important"
          marginTop="60px"
        >
          {!isMobile && dashboardAnalytics ? (
            <Chip
              label={<ChipLabel data={dashboardAnalytics} />}
              bgcolor={colors.neutral700}
              border={`1px solid ${colors.neutral300}`}
              titlecolor={colors.neutral100}
            />
          ) : (
            <Box />
          )}
          <CustomStack spacing={'40px'} direction={'row'} theme={theme}>
            {ROUTES.map(({ name, link }: Route, index) => (
              <Link passHref key={index} href={link}>
                <StyledLink>{name}</StyledLink>
              </Link>
            ))}
          </CustomStack>
        </Wrapper>
      )}
    </Container>
  );
};

export default Header;
