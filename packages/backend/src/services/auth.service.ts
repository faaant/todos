import jwt from 'jsonwebtoken';

import { IUser, User } from '../models/database/user';
import { SignInDto } from '../models/dto';

class AuthService {
  generateTokens = (user: IUser) => {
    const payload = {
      username: user.username
    };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION
    });

    return {
      accessToken,
      refreshToken
    };
  };

  refreshAccessToken = (user: IUser) => {
    const payload = {
      username: user.username
    };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });

    return accessToken;
  };

  verifyToken = async (token: string, secret: string) => {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      return undefined;
    }
  };

  verifyUser = async (user: SignInDto): Promise<IUser | null> => {
    let userData = await User.findOne({ username: user.nameOrEmail });
    if (!userData) {
      userData = await User.findOne({ email: user.nameOrEmail });
    }

    if (userData?.password !== user.password) {
      return null;
    }

    return userData;
  };
}

export const authService = new AuthService();
