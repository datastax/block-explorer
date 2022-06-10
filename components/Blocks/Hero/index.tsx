import { Stack } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import React from 'react'
import Chip from '@components/shared/Chip'
import {
  MainHeading,
  Container,
  SubHeading,
  PaginationContainer,
} from './styles'
import { HeroProps } from 'types'
import PaginationButton from '@components/TransactionDetail/TransactionHero/PaginationButton'
import DropdownButton from '@components/TransactionDetail/TransactionHero/DropdownButton'

const Hero = ({
  title,
  showChips,
  blockNumber,
  showDropdown,
  showPagination,
}: HeroProps) => {
  return (
    <Container>
      <Stack spacing={2} direction="row">
        <MainHeading>
          {title} <SubHeading> {blockNumber} </SubHeading>
        </MainHeading>
        {showPagination && (
          <PaginationContainer>
            <PaginationButton />
          </PaginationContainer>
        )}
      </Stack>
      {showChips && (
        <Stack direction="row" spacing={1}>
          <Chip
            label="Network Utilization: 50.1%"
            bgColor={colors.blackberry}
            borderColor={`1px solid ${colors.actionTertiary}`}
            titleColor={colors.neutral100}
          />
          <Chip
            label="🔥 Burnt Fees: 2,366,401.24 ETH"
            bgColor={colors.neutral700}
            borderColor={`1px solid ${colors.neutral300}`}
            titleColor={colors.neutral100}
          />
        </Stack>
      )}
      {showDropdown && (
        <Stack direction="row" spacing={1}>
          <DropdownButton title="Buy" />
          <DropdownButton title="Exchange" />
          <DropdownButton title="Earn" />
          <DropdownButton title="Gaming" />
        </Stack>
      )}
    </Container>
  )
}

export default Hero
