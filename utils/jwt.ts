import { JWT_KEY } from '@constants';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TokenGenerationPayload } from 'types';

const verifyJWT = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_KEY) as JwtPayload;
};

const createJWt = (data: TokenGenerationPayload, expiryTime: number) => {
  return jwt.sign(data, JWT_KEY ?? '', {
    expiresIn: expiryTime,
  });
};

export { verifyJWT, createJWt };
