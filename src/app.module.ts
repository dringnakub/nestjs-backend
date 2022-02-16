import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/cours.controller';
import { UserProfileController } from './user-profile/user-profile.controller';
import { UserProfileService } from './user-profile/user-profile.service';

@Module({
  controllers: [AppController, CoursesController, UserProfileController],
  providers: [AppService, UserProfileService],
})
export class AppModule { }
