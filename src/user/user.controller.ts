import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}