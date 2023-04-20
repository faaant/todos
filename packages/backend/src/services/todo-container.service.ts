import TodoContainer from '../models/database/todo-container';
import { TodoContainerDto } from '../models/dto';

class TodoContainerService {
  findUserContainers = async (userId: string) => {
    const containers = await TodoContainer.find({ userId }).select('title id');

    return containers;
  };

  findContainerById = async (id: string) => {
    const container = await TodoContainer.findOne({ id }).select('title id');

    return container;
  };

  create = async (todoContainer: TodoContainerDto, userId: string) => {
    await TodoContainer.create({ ...todoContainer, userId });
  };

  update = async (id: string, todoContainer: TodoContainerDto) => {
    await TodoContainer.updateOne({ id }, todoContainer);
  };

  delete = async (id: string) => {
    await TodoContainer.deleteOne({ id });
  };
}

export const todoContainerService = new TodoContainerService();
