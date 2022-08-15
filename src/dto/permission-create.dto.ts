import { Status } from "src/enums/status.enum";

export class PermissionCreateDTO {
    headerMenu: string;
    subMenu?: string;
    linkTo?: string;
    status: Status;
    createdOn: Date;
    updatedOn?: Date;
    createdBy: number;
    updatedBy?: number;
}