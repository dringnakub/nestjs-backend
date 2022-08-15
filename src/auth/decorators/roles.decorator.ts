import { SetMetadata } from '@nestjs/common';

export enum RoleRole {
    ADMIN = "admin",
    USER = "user",
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleRole[]) => SetMetadata(ROLES_KEY, roles);

