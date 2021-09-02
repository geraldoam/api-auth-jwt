import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

require('dotenv').config();

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRespositories = getCustomRepository(UsersRepositories);

    // -> Verify if email exists.
    const user = await usersRespositories.findOne({
      email,
    });

    if (!user) {
      throw new Error('Email/Password incorrect.');
    }

    // -> Verify if password is correct.
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect.');
    }

    // -> Generate token.
    const token = sign(
      {
        email: user.email,
      },
      'batata',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthService };
