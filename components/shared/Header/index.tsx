import React from 'react'
import Logo from '@components/shared/Logo'
import { Stack } from '@mui/material'
import { MainContiner, Wrapper, Link } from './styles'
import { ROUTES } from '@constants/routes'
import { Route } from '@types'

const Header = () => {
  return (
    <MainContiner>
      <Wrapper>
        <Logo />
        <Stack spacing={'40px'} direction={'row'}>
          {ROUTES.map(({ name, link }: Route, index) => (
            <Link key={index} href={link}>
              {name}
            </Link>
          ))}
        </Stack>
      </Wrapper>
    </MainContiner>
  )
}

export default Header
