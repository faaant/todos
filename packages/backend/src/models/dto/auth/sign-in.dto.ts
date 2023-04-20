import { Length } from 'class-validator';

export class SignInDto {
  constructor(user: { nameOrEmail?: string; password?: string }) {
    this.nameOrEmail = user?.nameOrEmail ?? '';
    this.password = user?.password ?? '';
  }

  @Length(5, 25, {
    message: 'Username length must be in range from 5 to 14!'
  })
  nameOrEmail!: string;

  @Length(6, 18, {
    message: 'Password length must be in range from 5 to 14!'
  })
  password!: string;
}
