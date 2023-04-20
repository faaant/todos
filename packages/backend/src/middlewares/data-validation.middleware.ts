import { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';

import { HttpExeption } from '../types/http-exeption.model';
import { dataValidationService } from '../services/data-validation.service';

export const dataValidationMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  let path = req.originalUrl;

  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (Object.values(req.params).length) {
    path = path.split('/').slice(0, -1).join('/');
  }

  const dataObj = dataValidationService.createDataObject(req.body, path, req.method);
  const errors = await validate(dataObj);
  if (errors.length) {
    next(new HttpExeption(400, 'Validation error!'));
  }

  next();
};
