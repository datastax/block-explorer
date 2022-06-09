import { styled } from '@mui/system'
import { Box, Stack } from '@mui/material'

const Container = styled(Box)({
  display: 'flex',
  padding: '56px 0px',
  width: '100%',
  justifyContent: 'space-between',
  
})

const PriceStack = styled(Stack)({
  minWidth: '320px',
  margin: 0,
  padding: 0,
  
})
const TransactionStack = styled(Stack)({
  minWidth: '434px',
  // marginLeft: '25px',
  // '@media (max-width: 1400px)': {
  //   width: '',
  // },
})

const CardsBox = styled(Box)({
  width: '57.55%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export { Container, PriceStack, TransactionStack, CardsBox }
