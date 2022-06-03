import { gql } from '@apollo/client'

const TestQuery = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`

export { TestQuery }
