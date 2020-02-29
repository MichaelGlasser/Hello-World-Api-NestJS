import { Controller, Get, Post, Delete, HttpCode, Body, Header, Param } from '@nestjs/common';
import { HelloCrudService } from '../services/hello-crud-service';

@Controller('hello')
export class HelloCrudRoutes {
  constructor(private readonly appService: HelloCrudService) {}

  @Get()
  @Header('Custom-Header', 'someValue')
  getAll(): string {
    return this.appService.getAll();
  }

  @Get(':id')
  getSingle(@Param('id') id): string {
    return this.appService.getSingle(id);
  }

  @Post()
  post(@Body() requestBody): string {
    return this.appService.create(requestBody);
  }

  @Delete()
  @HttpCode(204)
  delete(): string {
    return this.appService.delete();
  }
}
