import { sign, verify, decode } from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET_KEY as string;
const REFRESH_KEY = process.env.JWT_REFRESH_KEY as string;
const TOKEN_EXPIRED = process.env.JWT_TOKEN_EXPIRED as string;
const VERIFY_USER_LINK_TOKEN_EXPIRED = process.env.JWT_VERIFY_USER_LINK_TOKEN_EXPIRED as string;
const REFRESH_EXPIRED = process.env.JWT_REFRESH_EXPIRED as string;

export const decodeToken = (token: string) => {
  return decode(token);
};

export const generateToken = (payload: object) => {
  console.log('TOKEN_EXPIRED', TOKEN_EXPIRED, typeof TOKEN_EXPIRED)
  return sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRED });
};

export const generateRefreshToken = (payload: object) => {
  console.log('REFRESH_EXPIRED', REFRESH_EXPIRED, typeof REFRESH_EXPIRED)
  return sign(payload, REFRESH_KEY, { expiresIn: REFRESH_EXPIRED });
};

export const extractToken = (token: string) => {
  return verify(token, SECRET_KEY);
};

export const verifyToken = (token: string): Promise<boolean> => {
  return new Promise(resolve => {
    try {
      verify(token, SECRET_KEY);
      resolve(true);
    } catch (error) {
      resolve(false);
    }
  });
};

export const verifyRefreshToken = (token: string): Promise<boolean> => {
  return new Promise(resolve => {
    try {
      resolve(true);
    } catch (error) {
      resolve(false);
    }
  });
};

export const generateVerifyToken = (payload: object) => {
  return sign(payload, SECRET_KEY, { expiresIn: VERIFY_USER_LINK_TOKEN_EXPIRED });
};
