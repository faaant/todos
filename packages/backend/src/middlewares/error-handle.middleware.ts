import { NextFunction, Request, Response } from 'express';

import { HttpExeption } from '../types/http-exeption.model';

export const errorHandlingMiddleware = (
  err: HttpExeption,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Internal server error';

  res.status(errStatus).json({
    statusCode: errStatus,
    message: errMsg
  });

  next();
};
