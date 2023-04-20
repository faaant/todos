import { IsNotEmpty, Length, Matches } from 'class-validator';

import { TodoItemDto } from './todo-item.dto';
import { ITodoItem } from '../../database/todo-item';

export class CreateTodoItemDto extends TodoItemDto {
  constructor(todoItem: Partial<ITodoItem>) {
    super(todoItem);
    this.title = todoItem?.title ?? '';
    this.containerId = todoItem?.containerId ?? '';
  }

  @Matches('[^ ]+')
  @Length(1, 9, {
    message: 'Title length must be in range from 1 to 9!'
  })
  title: string;

  @IsNotEmpty({
    message: 'Container id is empty!'
  })
  containerId: string;
}
