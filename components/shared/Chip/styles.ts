import { Chip, styled } from '@mui/material'
import { ChipProps } from 'types'

const CustomChip = styled(Chip)((props: ChipProps) => ({
  backgroundColor: props.bgcolor,
  border: props.border,
  color: props.titlecolor,
  paddingLeft: props.icon && '10px',
  '& .css-6od3lo-MuiChip-label': {
    paddingLeft: props.icon && '5px',
  },
}))

export { CustomChip }
