import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { User } from 'src/user/entities/user.entity';
import passport from 'passport';
import { RegisterResponse } from './dto/register.response';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
     constructor(private userService: UserService, private jwtService: JwtService) { }

     async validate(username: string, password: string) {
          let user = await this.userService.findOne(username)
          if (user && user.password == password) {
               return user
          }
          return null
     }

     async login(loginUserInput: LoginUserInput) {
          let { password, ...user } = await this.userService.findOne(loginUserInput.username)

          return {
               access_token: this.jwtService.sign({ username: user.username, sub: user.id }),
               user
          }
     }


     async register(registerUserInput: RegisterUserInput) {
          let users = await this.userService.findOne(registerUserInput.username)
          if (users) {
               throw new HttpException("User already exists", 400)
          }

          let { password, ...user } = await this.userService.create(registerUserInput)

          return {
               user,
               access_token: this.jwtService.sign({ username: user.username, sub: user.id })
          }



     }
}
