import React from 'react'
import Logo from '@components/shared/Logo'
import { Stack } from '@mui/material'
import { Container, Wrapper, StyledLink } from './styles'
import { ROUTES } from '@constants/routes'
import { Route } from '@types'
import Link from 'next/link'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Link passHref href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Stack spacing={'40px'} direction={'row'}>
          {ROUTES.map(({ name, link }: Route, index) => (
            <Link passHref key={index} href={link}>
              <StyledLink>{name}</StyledLink>
            </Link>
          ))}
        </Stack>
      </Wrapper>
    </Container>
  )
}

export default Header
