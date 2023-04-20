import { Response, Request, NextFunction } from 'express';

import { HttpExeption } from '../types/http-exeption.model';
import { todoItemService } from '../services/todo-item.service';

export class TodoItemController {
  getContainerTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoItems = await todoItemService.findContainerTodoItems(req.params?.id);

      return res.status(201).send(todoItems);
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };

  createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await todoItemService.create(req.body);

      return res.status(201).send({
        message: 'Successfuly created!'
      });
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };

  updateTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await todoItemService.update(req.params?.id, req.body);

      return res.status(200).send({
        message: 'Successfuly updated!'
      });
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };

  deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await todoItemService.delete(req.params?.id);

      return res.status(200).send({
        message: 'Successfuly deleted!'
      });
    } catch {
      next(new HttpExeption(500, 'Internal server error'));
    }
  };
}

const todoItemController = new TodoItemController();
export default todoItemController;
