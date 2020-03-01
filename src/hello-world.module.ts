import { Module } from '@nestjs/common';
import { HelloCrudRoutes } from './routes/hello-crud-routes';
import { HelloCrudService } from './services/hello-crud-service';

@Module({
  imports: [],
  controllers: [HelloCrudRoutes],
  providers: [HelloCrudService],
})
export class HelloWorldApp {}
