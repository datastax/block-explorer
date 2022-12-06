import { JWT_KEY } from '@constants'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { TokenGenerationPayload } from 'types'

const verifyJWT = (token: string): JwtPayload | undefined => {
  console.log('token', token)
  let payload
  try {
    payload = jwt.verify(token, JWT_KEY) as JwtPayload
  } catch (error) {
    console.log('error==verifyJWT', error)
  }
  return payload
}

const createJWt = (data: TokenGenerationPayload, expiryTime: number) => {
  return jwt.sign(data, JWT_KEY ?? '', {
    expiresIn: expiryTime,
  })
}

export { verifyJWT, createJWt }
