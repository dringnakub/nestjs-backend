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
    gender: Gender;
    userImg: string;
    mobileNumber: string;
    lastLogin: Date;
    createdOn: Date;
    updatedOn: Date;
    createdBy: number;
    updatedBy: number;
}