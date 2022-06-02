import React from 'react'
import { ChipProps } from 'types'
import { CustomChip } from './styles'

const Chip = ({ label, bgColor, border, titleColor }: ChipProps) => {
  return (
    <CustomChip
      label={label}
      variant="outlined"
      bgColor={bgColor}
      border={border}
      titleColor={titleColor}
    />
  )
}

export default Chip
