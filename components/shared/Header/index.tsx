import React from 'react'
import Logo from '@components/shared/Logo'
import { useMediaQuery } from '@mui/material'
import {
  Container,
  Wrapper,
  StyledLink,
  StyledLabel,
  SearchBox,
  LogoBox,
  CustomStack,
} from './styles'
import { ROUTES } from '@constants/routes'
import { Route } from '@types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from '@components/shared/Search'
import Chip from '@components/shared/Chip'
import colors from '@styles/ThemeProvider/colors'
import theme from '@styles/ThemeProvider/theme'
const ChipLabel = () => {
  return (
    <StyledLabel>
      Eth: $1,825.88 <span>(-6.79%) </span>
      <span>| ⛽️ 40 Gwei</span>
    </StyledLabel>
  )
}

const Header = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('smA'))
  const { pathname } = useRouter()
  const isHome = pathname === '/'
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
            isHome={isHome}
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
          padding="0px 44px 26px !important"
          marginTop="60px"
        >
          {!isMobile && (
            <Chip
              label={<ChipLabel />}
              bgcolor={colors.neutral700}
              border={`1px solid ${colors.neutral300}`}
              titlecolor={colors.neutral100}
            />
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
  )
}

export default Header
