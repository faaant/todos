import { model, Schema } from 'mongoose';
import crypto from 'crypto';

export interface ITodoItem {
  id: string;
  containerId: string;
  title: string;
}

export const todoSchema: Schema = new Schema({
  id: {
    type: String,
    default: () => crypto.randomUUID(),
    unique: true,
    required: true
  },
  containerId: {
    type: String,
    require: true
  },
  title: {
    type: String,
    required: true
  }
});

export const Todo = model<ITodoItem>('todo-item', todoSchema);
