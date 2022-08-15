export enum Gender {
    MALE = "male",
    FEMALE = "female",
}

export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export class UserCreateDTO {
    id?: number;
    role?: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    userImg: string;
    gender: Gender;
    mobileNumber: string;
    lastLogin: Date;
    status: Status;
    createdOn: Date;
    updatedOn?: Date;
    createdBy: number;
    updatedBy?: number;
}