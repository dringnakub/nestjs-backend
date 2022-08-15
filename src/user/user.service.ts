import * as bcrypt from 'bcrypt';
import { PermissionCreateDTO } from './../dto/permission-create.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { UserCreateDTO } from 'src/dto/user-create.dto';
import { RoleCreateDTO } from 'src/dto/role-create.dto';

import { Permission } from 'src/entities/Permission.entity';
import { Role } from './../entities/role.entity';
import { User } from 'src/entities/user.entity';

import { Status } from "src/enums/status.enum";

export type UserProfile = any;

@Injectable()
export class UserService {
    private readonly users: UserProfile[];
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
        @InjectRepository(Role)
        private roleRepo: Repository<Role>,
        @InjectRepository(Permission)
        private permissionRepo: Repository<Permission>
    ) { }

    async hashPassword(password: string) {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepo.findOne({ userName: username })
    }

    async findUser(id?: string, take: number = 10, skip: number = 10): Promise<User[]> {
        const status: string = 'active'
        let query = this.userRepo.createQueryBuilder('user')
            .leftJoinAndSelect("user.role", "role")
            .leftJoinAndSelect('role.permissions', 'permission')
            .where('user.status = :status ', { status })
            .orderBy('post.createdAt', 'DESC')
            .take(take)
            .skip(skip)
        if (id) {
            query = query.andWhere(`user.id = ${id}`);
        }
        const result = query.getMany()
        return result

    }
    async createUser(createUserDTO: UserCreateDTO) {
        const userResult = await this.userRepo.findOne({ userName: createUserDTO.userName })
        if (userResult) {
            if (userResult.email === createUserDTO.email) {
               throw 'email exist'
            }
            throw 'username exist'
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(createUserDTO.password, salt)
        createUserDTO.password = passwordHash;
        return this.userRepo.save(createUserDTO)
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
