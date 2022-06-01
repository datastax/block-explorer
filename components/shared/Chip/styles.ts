import { Chip, styled } from '@mui/material'
import { ChipProps } from 'types'

const CustomChip = styled(Chip)((props: ChipProps) => ({
  backgroundColor: props.bgColor,
  border: props.borderColor,
  color: props.titleColor,
}))

export { CustomChip }
