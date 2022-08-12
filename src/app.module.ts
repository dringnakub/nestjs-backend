import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
