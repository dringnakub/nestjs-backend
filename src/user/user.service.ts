import { Gender, Status } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDTO } from 'src/dto/user-create.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepo: Repository<User>) { }

    async findAll(): Promise<User[]> {
        return this.userRepo.find();
    }
    async create(createUserDTO: UserCreateDTO) {
        return this.userRepo.save(createUserDTO);
    }
}
