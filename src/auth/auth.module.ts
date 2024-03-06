import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local-strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthResolver, AuthService, LocalStrategy],
  imports: [UserModule,PassportModule]
})
export class AuthModule { }
