import { PermissionCreateDTO } from './../dto/permission-create.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { UserCreateDTO } from 'src/dto/user-create.dto';
import { RoleCreateDTO } from 'src/dto/role-create.dto';

import { Permission } from 'src/entities/Permission.entity';
import { Role } from './../entities/role.entity';
import { User } from 'src/entities/user.entity';

export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

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

    async findUser(id?: string): Promise<User[]> {
        const status: string = 'active'
        let query = this.userRepo.createQueryBuilder('user')
            .leftJoinAndSelect("user.role", "role")
            .leftJoinAndSelect('role.permissions', 'permission')
            .where('user.status = :status ', { status })
        if (id) {
            query = query.andWhere(`user.id = ${id}`);
        }
        const result = query.getMany()
        return result

    }
    async createUser(createUserDTO: UserCreateDTO) {
        return this.userRepo.save({ role: createUserDTO.role, ...createUserDTO })
    }
    updateUser(createUserDTO: UserCreateDTO) {
        return this.userRepo.update(createUserDTO.id, createUserDTO)
    }

    deleteUser(createUserDTO: UserCreateDTO) {
        return this.userRepo.update(createUserDTO.id, { status: Status.INACTIVE })
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
