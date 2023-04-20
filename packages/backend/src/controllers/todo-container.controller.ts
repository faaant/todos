import { Response, Request, NextFunction } from 'express';

import { HttpExeption } from '../types/http-exeption.model';
import { todoContainerService } from '../services/todo-container.service';

export class TodoContainerController {
  getAllTodoContainers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = await todoContainerService.findUserContainers(req.user.id);

      return res.status(200).send(todos);
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };

  getTodoContainer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = await todoContainerService.findContainerById(req.params?.id);

      return res.status(200).send(todos);
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };

  createTodoContainer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await todoContainerService.create(req.body, req.user.id);

      return res.status(201).send({
        message: 'Successfuly created!'
      });
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };

  updateTodoContainer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await todoContainerService.update(req.params?.id, req.body);

      return res.status(200).send({
        message: 'Successfuly updated!'
      });
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };

  deleteTodoContainer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await todoContainerService.delete(req.params?.id);

      return res.status(200).send({
        message: 'Successfuly deleted!'
      });
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };
}

const todoContainerController = new TodoContainerController();
export default todoContainerController;
