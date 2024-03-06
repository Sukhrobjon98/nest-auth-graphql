import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
     constructor(private userService: UserService) { }

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
               access_token: "JWt",
               user
          }
     }
}
