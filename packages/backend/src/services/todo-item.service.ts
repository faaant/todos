import { CreateTodoItemDto, TodoItemDto } from '../models/dto';
import { Todo } from '../models/database/todo-item';

class TodoItemService {
  findContainerTodoItems = async (containerId: string) => {
    const todos = await Todo.find({ containerId }).select('id title');

    return todos;
  };

  create = async (todoItem: CreateTodoItemDto) => {
    await Todo.create(todoItem);
  };

  update = async (id: string, todoItem: TodoItemDto) => {
    await Todo.updateOne({ id }, todoItem);
  };

  delete = async (id: string) => {
    await Todo.deleteOne({ id });
  };
}

export const todoItemService = new TodoItemService();
