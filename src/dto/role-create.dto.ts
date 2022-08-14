import { Permission } from "src/entities/Permission.entity";

export class RoleCreateDTO {
    roleName: string;
    roleDescription: string;
    permissions?: Permission[]
}