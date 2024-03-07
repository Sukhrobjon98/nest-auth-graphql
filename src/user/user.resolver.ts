import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { JWtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }


  @Query(() => [User], { name: 'users' })
  @UseGuards(JWtAuthGuard)
  findAll() {
    return this.userService.findAll();
  }

}
