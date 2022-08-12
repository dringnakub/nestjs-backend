import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
    async findAll(): Promise<User[]> {
        return [
            {
                roleId: 1,
                userName: "dringrider",
                password: "123456",
                firstName: "Komsan",
                lastName: "Kawichai",
                dateOfBirth: '1992-03-13',
                email: "dring_za@hotmail.com",
                gender: "MALE",
                userImg: "/image/user/dringrider.jpg",
                mobileNumber: "0875674716",
                status: "ACTIVE",
                lastLogin: null,
                createdOn: new Date(),
                updatedOn: new Date(),
                createdBy: 1,
                updatedBy: 1,
            }
        ]
    }
}
