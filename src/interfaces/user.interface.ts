export interface User {
    roleId?: number;
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    email: string,
    gender: string,
    userImg: string,
    mobileNumber: string,
    status: string,
    lastLogin?: Date,
    createdOn: Date,
    updatedOn: Date,
    createdBy: number,
    updatedBy: number,
}