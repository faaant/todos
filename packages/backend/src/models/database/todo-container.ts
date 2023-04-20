import { model, Schema } from 'mongoose';
import crypto from 'crypto';

import { ITodoItem } from './todo-item';

export interface ITodoContainer {
  id: string;
  title: string;
  userId: string;
  todos?: ITodoItem[];
}

const todoContainerSchema: Schema = new Schema({
  id: {
    type: String,
    default: () => crypto.randomUUID(),
    unique: true,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const TodoContainer = model<ITodoContainer>('todoContainer', todoContainerSchema);

export default TodoContainer;
