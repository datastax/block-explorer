import { Stack } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import React from 'react'
import Chip from '@components/shared/Chip'
import { MainHeading, Container } from './styles'

interface BlocksHeaderProps {
  title: string
}
const BlocksHero = ({title}: BlocksHeaderProps) => {
  return (
    <Container>
      <MainHeading>{title}</MainHeading>
      {title == 'Blocks' && (
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
    </Container>
  )
}

export default BlocksHero
