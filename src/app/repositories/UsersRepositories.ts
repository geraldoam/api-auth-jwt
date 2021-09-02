import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };
