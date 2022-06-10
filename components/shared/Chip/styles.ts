import { Chip, styled } from '@mui/material'
import { ChipProps } from 'types'

const CustomChip = styled(Chip)((props: ChipProps) => ({
  backgroundColor: props.bgColor,
  border: props.borderColor,
  color: props.titleColor,
  paddingLeft: props.icon && '10px',
  '& .css-6od3lo-MuiChip-label': {
    paddingLeft: props.icon && '5px',
  },
}))

export { CustomChip }
