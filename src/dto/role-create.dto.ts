import { Permission } from "src/entities/Permission.entity";

export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export class RoleCreateDTO {
    roleName: string;
    roleDescription: string;
    permissions?: Permission[];
    status: Status;
    createdOn: Date;
    updatedOn?: Date;
    createdBy: number;
    updatedBy?: number;
}