import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async findOne(username: string): Promise<User> {
    let user = this.userRepository.findOneByOrFail({ username })
    return user

  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    let user = this.userRepository.create(createUserInput)
    return this.userRepository.save(user)
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }
}
