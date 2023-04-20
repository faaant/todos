import { Length, Matches } from 'class-validator';

import { ITodoContainer } from '../../database/todo-container';

export class TodoContainerDto {
  constructor(todoContainer: Partial<ITodoContainer>) {
    this.title = todoContainer?.title ?? '';
  }

  @Matches('[^ ]+')
  @Length(1, 9, {
    message: 'Title length must be in range from 1 to 9!'
  })
  title: string;
}
