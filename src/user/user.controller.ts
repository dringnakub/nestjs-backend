import { UserCreateDTO } from './../dto/user-create.dto';
import { PermissionCreateDTO } from './../dto/permission-create.dto';
import { UserService } from './user.service';
import { Controller, Get, Patch, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Permission } from 'src/entities/permission.entity';
import { RoleCreateDTO } from "src/dto/role-create.dto";
import { Role } from 'src/entities/role.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    async findAllUser(): Promise<User[]> {
        return this.userService.findAllUser();
    }

    @Patch()
    updateUser(@Body() updateUserDTO: UserCreateDTO) {
        const updateUser = this.userService.updateUser(updateUserDTO);
        return updateUser
    }
    @Post()
    createUser(@Body() createUserDTO: UserCreateDTO) {
        console.log('create ', createUserDTO)
        if (createUserDTO.userName === undefined) {
            throw new HttpException({
                userMessage: 'Error',
                errorCode: 'E1018'
            }, HttpStatus.BAD_REQUEST)
        }
        const createUser = this.userService.createUser(createUserDTO)
        return createUser
    }

    @Get('role')
    async findAllRole(): Promise<Role[]> {
        return this.userService.findAllRole();
    }

    @Post('role')
    createRole(@Body() createRoleDTO: RoleCreateDTO) {
        console.log('createRoleDTO ', createRoleDTO)
        const createUser = this.userService.createRole(createRoleDTO)
        return createUser
    }


    @Post('permission')
    createPermission(@Body() createPermissionDTO: PermissionCreateDTO) {
        const createUser = this.userService.createPermission(createPermissionDTO)
        return createUser
    }

    @Get('permission')
    async findAllPermission(): Promise<Permission[]> {
        return this.userService.findAllPermission();
    }
}