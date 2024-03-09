import { Resolver, Query, Subscription } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
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
