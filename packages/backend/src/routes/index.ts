import { Application } from 'express';

import todoContainersRouter from './api/todo-containers.router';
import todoItemRouter from './api/todo-item.router';
import authRouter from './api/auth.router';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/todos', todoItemRouter);
    this.app.use('/api/todo-containers', todoContainersRouter);
    this.app.use('/api/auth', authRouter);
  }
}

export default AppRouter;
