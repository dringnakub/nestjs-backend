import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { jwtConstants } from '../constants';


Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        console.log('start JwtStrategy')
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        })
    }

    validate(payload: any) {
        console.log('validate JwtStrategy ', payload)
        return { ...payload.user };
    }
}