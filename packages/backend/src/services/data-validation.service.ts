import {
  SignUpDto,
  SignInDto,
  TodoContainerDto,
  CreateTodoItemDto,
  TodoItemDto
} from '../models/dto';
import { ROUTES } from '../constats/routes.constant';

class DataValidationService {
  createDataObject = (data: any, path: string, method: string) => {
    switch (path) {
      case ROUTES.SIGN_UP:
        return new SignUpDto(data);

      case ROUTES.SIGN_IN:
        return new SignInDto(data);

      case ROUTES.TODO_CONTAINERS:
        return new TodoContainerDto(data);

      case ROUTES.TODO_ITEMS:
        if (method === 'POST') return new CreateTodoItemDto(data);
        if (method === 'PUT') return new TodoItemDto(data);
        return {};

      default:
        return {};
    }
  };
}

export const dataValidationService = new DataValidationService();
