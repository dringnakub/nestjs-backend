import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { IUserProfile } from './interface/user_profile.interface'
import { UserProfileService } from './user-profile.service';
@Controller('users')
export class UserProfileController {
  constructor(private userProfileService: UserProfileService) { }

  @Get()
  async findAll(): Promise<IUserProfile[]> {
    return this.userProfileService.findAll();
  }

  @Post()
  create(@Body() requestBody: any): string {
    console.log('requestBody ', requestBody)
    return 'Created'
  }

  @Get(':id/:user')
  findOne(@Param('id') id: string, @Param('user') user: string) {
    console.log(id)
    return `This action returns a #${id} and user ${user}`;
  }
}
