import { styled } from '@mui/system'
import { Box, Stack } from '@mui/material'

const Container = styled(Box)({
  display: 'flex',
  padding: '56px 0px',
  justifyContent: 'space-between',
  maxWidth: '100%',
  '@media (max-width: 1200px)': {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px',
  },
})

const PriceStack = styled(Stack)({
  width: '320px',
  '@media (max-width: 1360px)': {
    width: '30%',
  },
})
const TransactionStack = styled(Stack)({
  width: '434px',
  '@media (max-width: 1200px)': {
    width: '70%',
  },
})

const CardsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
})

export { Container, PriceStack, TransactionStack, CardsBox }
