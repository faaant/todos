import { model, Schema } from 'mongoose';
import crypto from 'crypto';

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

export const userSchema: Schema = new Schema({
  id: {
    type: String,
    default: () => crypto.randomUUID(),
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    require: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    require: true
  }
});

export const User = model<IUser>('user', userSchema);
