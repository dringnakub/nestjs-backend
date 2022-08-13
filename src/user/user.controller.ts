import { UserCreateDTO } from './../dto/user-create.dto';
import { UserService } from './user.service';
import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body() createUserDTO: UserCreateDTO) {
        if (createUserDTO.userName === undefined) {
            throw new HttpException({
                userMessage: 'Error',
                errorCode: 'E1018'
            }, HttpStatus.BAD_REQUEST)
        }
        const createUser = this.userService.create(createUserDTO)
        return createUser
    }
}