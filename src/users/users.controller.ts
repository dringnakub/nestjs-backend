import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';

interface RequestQuery {
  name: string,
  age: number
}
@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query() query: RequestQuery): RequestQuery {
    console.log('query ', query)
    return {
      name: 'string',
      age: 10
    }
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
