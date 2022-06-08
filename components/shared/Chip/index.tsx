import React from 'react'
import { ChipProps } from 'types'
import { CustomChip } from './styles'

const Chip = ({ label, bgcolor, border, titlecolor }: ChipProps) => {
  return (
    <CustomChip
      label={label}
      variant="outlined"
      bgcolor={bgcolor}
      border={border}
      titlecolor={titlecolor}
    />
  )
}

export default Chip
