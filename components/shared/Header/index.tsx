import React from 'react'
import Logo from '@components/shared/Logo'
import { Stack } from '@mui/material'
import {
  Container,
  Wrapper,
  StyledLink,
  StyledLabel,
  SearchBox,
  LogoBox,
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
  const { pathname } = useRouter()
  return (
    <Container>
      <Wrapper
        flexDirection="column"
        theme={theme}
        height="72px"
        padding={pathname !== '/' ? '26px 44px 0px' : ''}
      >
        <LogoBox>
          <Link passHref href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </LogoBox>

        {pathname !== '/' ? (
          <SearchBox>
            <Search />
          </SearchBox>
        ) : (
          <Stack spacing={'40px'} direction={'row'}>
            {ROUTES.map(({ name, link }: Route, index) => (
              <Link passHref key={index} href={link}>
                <StyledLink>{name}</StyledLink>
              </Link>
            ))}
          </Stack>
        )}
      </Wrapper>
      {pathname !== '/' && (
        <Wrapper theme={theme} height="auto" padding="0px 44px 26px">
          <Chip
            label={<ChipLabel />}
            bgcolor={colors.neutral700}
            border={`1px solid ${colors.neutral300}`}
            titlecolor={colors.neutral100}
          />
          <Stack spacing={'40px'} direction={'row'}>
            {ROUTES.map(({ name, link }: Route, index) => (
              <Link passHref key={index} href={link}>
                <StyledLink>{name}</StyledLink>
              </Link>
            ))}
          </Stack>
        </Wrapper>
      )}
    </Container>
  )
}

export default Header
