import { RolesGuard } from './guards/roles.guard';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants';
import { JwtStrategy } from './guards/jwt.strategy';


@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy, RolesGuard],
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60m' }
  })],
  exports: [AuthService]
})
export class AuthModule { }
