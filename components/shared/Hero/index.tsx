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
import { getBurntFee } from 'utils'

const Hero = ({
  title,
  showChips,
  blockNumber,
  showDropdown,
  showPagination,
  networkUtilization,
  burntFeeSum,
  setNextConsecutiveState,
  setPreviousConsecutiveState,
}: HeroProps) => {
  return (
    <Container>
      <Stack spacing={2} direction="row">
        <MainHeading>
          {title} <SubHeading> {blockNumber} </SubHeading>
        </MainHeading>
        {showPagination && (
          <PaginationContainer>
            <PaginationButton
              setNextConsecutiveState={setNextConsecutiveState}
              setPreviousConsecutiveState={setPreviousConsecutiveState}
            />
          </PaginationContainer>
        )}
      </Stack>
      {showChips && networkUtilization && (
        <Stack direction="row" spacing={1}>
          <Chip
            label={`Network Utilization: ${networkUtilization?.toFixed(2)}%`}
            bgcolor={colors.blackberry}
            border={`1px solid ${colors.actionTertiary}`}
            titlecolor={colors.neutral100}
          />
          <Chip
            label={`🔥 Burnt Fees: ${getBurntFee(burntFeeSum)} ETH`}
            bgcolor={colors.neutral700}
            border={`1px solid ${colors.neutral300}`}
            titlecolor={colors.neutral100}
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
