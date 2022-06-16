import { Skeleton } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import React from 'react'

interface CustomSkeletonProps {
  rows: number
}

const CustomSkeleton = ({ rows }: CustomSkeletonProps) => {
  return (
    <>
      {[...Array(rows)].map((_, index) => (
        <Skeleton
          height={'60px'}
          key={index}
          animation={index % 2 === 0 ? 'wave' : 'pulse'}
          sx={{ color: colors.darkTextSecondary, bgcolor: colors.nightRider }}
        />
      ))}
    </>
  )
}

export default CustomSkeleton
