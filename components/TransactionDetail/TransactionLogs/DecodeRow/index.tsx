import React, { useState } from 'react'
import { Row } from '../styles'
import { SelectChangeEvent, Typography, MenuItem } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import { CustomSelect } from './styles'

type dataDisplayType = 'dec' | 'hex'

interface DecodeRowProps {
  data: {
    dec: string
    hex: string
  }
}

const DecodeRow = ({ data }: DecodeRowProps) => {
  const [displayType, setDisplayType] = useState<dataDisplayType | string>(
    'hex'
  )

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setDisplayType(event.target.value as string)
  }
  return (
    <Row>
      <CustomSelect
        value={displayType}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="hex">hex</MenuItem>
        <MenuItem value="dec">dec</MenuItem>
      </CustomSelect>
      <Typography marginLeft={'10px'} color={colors.neutral100}>
        {data[displayType as dataDisplayType]}
      </Typography>
    </Row>
  )
}

export default DecodeRow