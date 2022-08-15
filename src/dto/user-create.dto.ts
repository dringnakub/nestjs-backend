import { IsEmail, IsNotEmpty } from 'class-validator';
import { Gender } from "src/enums/gender.enum";
import { Status } from "src/enums/status.enum";

export class UserCreateDTO {
    id?: string;
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