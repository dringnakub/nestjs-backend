import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants';


@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '120s' }
  })],
  exports: [AuthService]
})
export class AuthModule { }
