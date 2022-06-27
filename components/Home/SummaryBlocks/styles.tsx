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

  '@media (max-width: 1330px)': {
    minWidth: '280px',
  },
  '@media (max-width: 1190px)': {
    minWidth: '205px',
  },
})
const TransactionStack = styled(Stack)({
  minWidth: '434px',
  '@media (max-width: 1330px)': {
    minWidth: '400px',
  },
  '@media (max-width: 1240px)': {
    minWidth: '350px',
  },
  '@media (max-width: 1190px)': {
    minWidth: '325px',
  },
})

const CardsBox = styled(Box)({
  width: '57.55%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export { Container, PriceStack, TransactionStack, CardsBox }
