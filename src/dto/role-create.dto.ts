import { Permission } from "src/entities/Permission.entity";
import { Status } from "src/enums/status.enum";

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