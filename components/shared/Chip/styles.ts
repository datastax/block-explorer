import { Chip, styled } from '@mui/material'
import { ChipProps } from 'types'

const CustomChip = styled(Chip)((props: ChipProps) => ({
  backgroundColor: props.bgColor,
  border: props.border,
  color: props.titleColor,
}))

export { CustomChip }
