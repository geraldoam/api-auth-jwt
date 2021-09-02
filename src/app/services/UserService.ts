import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

import validator from 'validator';
import { hash } from 'bcryptjs';

interface IUser {
  email: string;
  password: string;
}

class UserService {
  async execute({ email, password }: IUser) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userEmailValidator = validator.isEmail(email);

    if (!userEmailValidator) {
      throw new Error('Email invalid!');
    }

    const userExists = await usersRepositories.findOne({
      where: { email },
    });

    if (userExists) {
      throw new Error('Email already exists!');
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepositories.create({ email, password: passwordHash });

    await usersRepositories.save(user);

    return user;
  }
}

export { UserService };
