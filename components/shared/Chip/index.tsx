import React from 'react'
import { ChipProps } from 'types'
import { CustomChip } from './styles'

const Chip = ({ label, bgColor, borderColor, titleColor, icon }: ChipProps) => {
  return (
    <CustomChip
      label={label}
      variant="outlined"
      bgColor={bgColor}
      borderColor={borderColor}
      titleColor={titleColor}
      icon={icon}
    />
  )
}

export default Chip
