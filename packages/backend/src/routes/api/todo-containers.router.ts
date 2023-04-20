import { Router } from 'express';

import { dataValidationMiddleware } from '../../middlewares/data-validation.middleware';
import todoContainerController from '../../controllers/todo-container.controller';

const todoContainersRouter: Router = Router();

todoContainersRouter.get('', todoContainerController.getAllTodoContainers);
todoContainersRouter.get('/:id', todoContainerController.getTodoContainer);
todoContainersRouter.post(
  '',
  dataValidationMiddleware,
  todoContainerController.createTodoContainer
);
todoContainersRouter.put(
  '/:id',
  dataValidationMiddleware,
  todoContainerController.updateTodoContainer
);
todoContainersRouter.delete('/:id', todoContainerController.deleteTodoContainer);

export default todoContainersRouter;
