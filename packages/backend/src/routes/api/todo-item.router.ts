import { Router } from 'express';

import { dataValidationMiddleware } from '../../middlewares/data-validation.middleware';
import todoItemController from '../../controllers/todo-item.controller';

const todoItemRouter: Router = Router();

todoItemRouter.get('/:id', todoItemController.getContainerTodos);
todoItemRouter.post('', dataValidationMiddleware, todoItemController.createTodo);
todoItemRouter.put('/:id', dataValidationMiddleware, todoItemController.updateTodo);
todoItemRouter.delete('/:id', todoItemController.deleteTodo);

export default todoItemRouter;
