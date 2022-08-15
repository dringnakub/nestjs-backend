export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

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