import { styled } from '@mui/system'
import { Box, Stack } from '@mui/material'

const Container = styled(Box)({
  display: 'flex',
  padding: '56px 0px',
  '@media (max-width: 1360px)': {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px',
  },
})

const PriceStack = styled(Stack)({
  width: '42%',
  '@media (max-width: 1360px)': {
    width: '50%',
  },
})
const TransactionStack = styled(Stack)({
  width: '58%',
  '@media (max-width: 1360px)': {
    width: '50%',
  },
})

const CardsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
})

export { Container, PriceStack, TransactionStack, CardsBox }
