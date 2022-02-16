import { Injectable } from '@nestjs/common';
import { IUserProfile } from './interface/user_profile.interface';

@Injectable()
export class UserProfileService {
    async findAll(): Promise<IUserProfile[]> {
        return []
    }
}
