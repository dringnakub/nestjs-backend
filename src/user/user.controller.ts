import { UserCreateDTO } from './../dto/user-create.dto';
import { PermissionCreateDTO } from './../dto/permission-create.dto';
import { UserService } from './user.service';
import { Controller, Get, Patch, Post, Body, Param, HttpException, HttpStatus, Delete, UseGuards } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Permission } from 'src/entities/permission.entity';
import { RoleCreateDTO } from "src/dto/role-create.dto";
import { Role } from 'src/entities/role.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    async findAllUser(): Promise<User[]> {
        return this.userService.findUser();
    }

    @Get(':id')
    async findUserById(@Param('id') id: string): Promise<User[]> {
        return this.userService.findUser(id);
    }

    @Patch()
    updateUser(@Body() updateUserDTO: UserCreateDTO) {
        const updateUser = this.userService.updateUser(updateUserDTO);
        return updateUser
    }

    @Delete()
    DeleteUser(@Body() deleteUserDTO: UserCreateDTO) {
        const deleteUser = this.userService.deleteUser(deleteUserDTO);
        return deleteUser
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

    @UseGuards(JwtAuthGuard)
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