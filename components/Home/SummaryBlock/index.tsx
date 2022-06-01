import colors from '@styles/ThemeProvider/colors'
import { Box, Typography } from '@mui/material'
import { StyledCard, StyledTypograph } from './styles'
import { SummaryBlocksProps } from 'types'

const SummaryBlock = ({
  icon,
  title,
  value,
  stat,
  supportingStat,
  secondaryTitle,
  secondaryValue,
  fontSizeOfValue,
  secondayStat,
  width,
}: SummaryBlocksProps) => {
  return (
    <StyledCard width={width}>
      <Box padding="4px 1px">{icon()}</Box>
      <Box marginLeft="8px">
        <Typography
          color={colors.neutral300}
          fontSize="16px"
          fontWeight={500}
          lineHeight="24px"
        >
          {title}
        </Typography>
        <Typography
          color={colors.neutral100}
          fontSize={fontSizeOfValue}
          fontWeight={700}
          lineHeight="36px"
        >
          {value}
        </Typography>
        {stat && (
          <StyledTypograph>
            {stat}
            {supportingStat && <span>{supportingStat}</span>}
          </StyledTypograph>
        )}
      </Box>
      {secondaryTitle && (
        <Box marginLeft="40px">
          <Typography
            color={colors.neutral300}
            fontSize="16px"
            fontWeight={500}
            lineHeight="24px"
          >
            {secondaryTitle}
          </Typography>
          <Typography
            color={colors.neutral100}
            fontSize={fontSizeOfValue}
            fontWeight={700}
            lineHeight="36px"
          >
            {secondaryValue}
          </Typography>
          {secondayStat && <StyledTypograph>{secondayStat}</StyledTypograph>}
        </Box>
      )}
    </StyledCard>
  )
}

export default SummaryBlock
