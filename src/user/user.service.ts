import { Gender, Status } from './../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepo: Repository<User>) { }
    async findAll(): Promise<User[]> {
        return this.userRepo.find();
    }
}
