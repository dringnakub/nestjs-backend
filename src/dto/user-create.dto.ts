import { IsEmail, IsNotEmpty } from 'class-validator';


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
    @IsNotEmpty()
    userName: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    dateOfBirth: string;
    @IsEmail()
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