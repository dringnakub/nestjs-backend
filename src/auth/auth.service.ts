import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        console.log('auth service validateUser')
        const user = await this.userService.findOne(username);
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const { password, ...result } = user;
            return result
        }
        return null
    }

    async login(user: any) {
        console.log('login', user)
        const payload = { username: user.userName, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}