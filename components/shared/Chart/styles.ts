import { styled } from '@mui/system'
import { Box } from '@mui/material'

const Container = styled(Box)({
  marginTop: '16px',
  width: '485px',
  height: '192px',
  '@media (max-width: 1360px)': {
    width: '1360px',
  },
})
export { Container }
