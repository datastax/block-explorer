import { Chip, styled } from '@mui/material'
import { ChipProps } from 'types'

const CustomChip = styled(Chip)((props: ChipProps) => ({
  backgroundColor: props.bgcolor,
  border: props.border,
  color: props.titlecolor,
}))

export { CustomChip }
