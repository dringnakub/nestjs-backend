import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatModule } from './cat/cat.module';
import { DrinkModule } from './drink/drink.module';

@Module({
  imports: [CatModule, DrinkModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
