import { SignUpDto } from '../models/dto';
import { User } from '../models/database/user';

class UserService {
  findAll = async () => {
    const users = await User.find();

    return users;
  };

  findByUserName = async (username: string) => {
    const user = await User.findOne({ username });

    return user;
  };

  create = async (user: SignUpDto) => {
    const newUser = await User.create(user);

    return newUser;
  };
}

export const userService = new UserService();
