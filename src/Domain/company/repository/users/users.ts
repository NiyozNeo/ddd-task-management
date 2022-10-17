import { User } from '../../entities/users.entity';

export interface Users {
  find(userId: string): Promise<User>;
  findAll(): Promise<User[]>;
  findOneByUsername(username: string): Promise<User | null>;
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
}

