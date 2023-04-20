import { IsEmail, Length, Matches } from 'class-validator';

import { IUser } from '../../database/user';

export class SignUpDto {
  constructor(user: Partial<IUser>) {
    this.username = user?.username ?? '';
    this.email = user?.email ?? '';
    this.password = user?.password ?? '';
  }

  @Matches('[^ ]+')
  @Length(5, 14, {
    message: 'Username length must be in range from 5 to 14!'
  })
  username!: string;

  @Length(6, 18, {
    message: 'Password length must be in range from 5 to 14!'
  })
  password!: string;

  @IsEmail(
    {},
    {
      message: 'Email is incorrect!'
    }
  )
  email!: string;
}
