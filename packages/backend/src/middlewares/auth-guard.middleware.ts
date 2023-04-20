import { NextFunction, Request, Response } from 'express';

import { userService } from '../services/user.service';
import { ROUTES } from '../constats/routes.constant';
import { authService } from '../services/auth.service';
import { HttpExeption } from '../types/http-exeption.model';

export const authGuardMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  if (req.path === ROUTES.SIGN_IN || req.path === ROUTES.SIGN_UP) {
    return next();
  }

  const secret =
    req.path === ROUTES.REFRESH ? process.env.JWT_REFRESH_SECRET : process.env.JWT_SECRET;

  const { authorization } = req.headers;
  if (!authorization) {
    return next(new HttpExeption(401, 'Unathorized!'));
  }

  const token = req.path === ROUTES.REFRESH ? req.cookies.jwt : authorization.split(' ')[1];
  const payload = await authService.verifyToken(token, secret);

  if (!payload) {
    return next(new HttpExeption(401, 'Unathorized!'));
  }

  if (typeof payload !== 'object') {
    return next(new HttpExeption(500, 'Internal server error!'));
  }

  const user = await userService.findByUserName(payload.username);
  if (!user) {
    return next(new HttpExeption(401, 'Unathorized'));
  }

  req.user = user;

  next();
};
