import { Length, Matches } from 'class-validator';

import { ITodoItem } from '../../database/todo-item';

export class TodoItemDto {
  constructor(todoItem: Partial<ITodoItem>) {
    this.title = todoItem.title ?? '';
  }

  @Matches('[^ ]+')
  @Length(1, 9, {
    message: 'Title length must be in range from 1 to 9!'
  })
  title: string;
}
