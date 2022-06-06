import { Stack } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import React from 'react'
import Chip from '@components/shared/Chip'
import { MainHeading, Container, SubHeading } from './styles'
import { HeroProps } from 'types'

const Hero = ({ title, showChips, blockNumber }: HeroProps) => {
  return (
    <Container>
      <MainHeading>
        {title} <SubHeading> {blockNumber} </SubHeading>{' '}
      </MainHeading>
      {showChips && (
        <Stack direction="row" spacing={1}>
          <Chip
            label="Network Utilization: 50.1%"
            bgColor={colors.blackberry}
            border={`1px solid ${colors.actionTertiary}`}
            titleColor={colors.neutral100}
          />
          <Chip
            label="🔥 Burnt Fees: 2,366,401.24 ETH"
            bgColor={colors.neutral700}
            border={`1px solid ${colors.neutral300}`}
            titleColor={colors.neutral100}
          />
        </Stack>
      )}
    </Container>
  )
}

export default Hero
