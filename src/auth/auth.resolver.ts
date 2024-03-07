import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginUserInput } from './dto/login-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';
import { RegisterResponse } from './dto/register.response';
import { RegisterUserInput } from './dto/register-user.input';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }


  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput, @Context() context: any) {
    return this.authService.login(context.user)
  }

  @Mutation(() => RegisterResponse)
  register(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return this.authService.register(registerUserInput)
  }
}
