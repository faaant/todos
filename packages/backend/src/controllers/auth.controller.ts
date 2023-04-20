import { Response, Request, NextFunction } from 'express';

import { HttpExeption } from '../types/http-exeption.model';
import { IUser } from '../models/database/user';
import { authService } from '../services/auth.service';
import { userService } from '../services/user.service';

export class AuthController {
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: IUser = await userService.create(req.body);

      const { accessToken, refreshToken } = authService.generateTokens(user);

      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: true,
        secure: true,
        path: 'api/auth/refresh'
      });

      return res.status(201).send({
        accessToken
      });
    } catch (err) {
      next(new HttpExeption(409, 'Account already exist'));
    }
  };

  signIn = async (req: Request, res: Response, next: NextFunction) => {
    const user = await authService.verifyUser(req.body);
    if (!user) {
      return next(new HttpExeption(400, "User doesn't exist!"));
    }

    const { accessToken, refreshToken } = authService.generateTokens(user);

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: true,
      secure: true,
      path: 'api/auth/refresh'
    });

    return res.status(200).send({
      accessToken
    });
  };

  refresh = async (req: Request, res: Response) => {
    const accessToken = authService.refreshAccessToken(req.user);

    return res.status(200).send({
      accessToken
    });
  };

  logout = async (_: Request, res: Response) => {
    res.cookie('jwt', 'deleted', {
      httpOnly: true,
      sameSite: true,
      secure: true,
      path: 'api/auth/refresh',
      maxAge: Date.now()
    });

    return res.status(200).json({
      message: 'Successfuly logged out!'
    });
  };
}

const authController = new AuthController();
export default authController;
