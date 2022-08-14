import { PermissionCreateDTO } from './../dto/permission-create.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { UserCreateDTO } from 'src/dto/user-create.dto';
import { RoleCreateDTO } from 'src/dto/role-create.dto';

import { Permission } from 'src/entities/Permission.entity';
import { Role } from './../entities/role.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
        @InjectRepository(Role)
        private roleRepo: Repository<Role>,
        @InjectRepository(Permission)
        private permissionRepo: Repository<Permission>
    ) { }

    async findAllUser(): Promise<User[]> {
        return this.userRepo.createQueryBuilder('user')
            .leftJoinAndSelect("user.role", "role")
            .leftJoinAndSelect('role.permissions', 'permission')
            .getMany()
    }
    async createUser(createUserDTO: UserCreateDTO) {
        return this.userRepo.save({ role: createUserDTO.roleId, ...createUserDTO })
    }

    async findAllRole(): Promise<Role[]> {
        return this.roleRepo.createQueryBuilder('role').leftJoinAndSelect("role.permissions", "permission").getMany()
    }

    async createRole(createRoleDTO: RoleCreateDTO) {
        return this.roleRepo.save(createRoleDTO);
    }

    async findAllPermission(): Promise<Permission[]> {
        return this.permissionRepo.find()
    }

    async createPermission(createPermissionDTO: PermissionCreateDTO) {
        return this.permissionRepo.save(createPermissionDTO);
    }
}
