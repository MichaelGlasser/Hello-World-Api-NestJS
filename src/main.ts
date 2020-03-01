import { NestFactory } from '@nestjs/core';
import { HelloWorldApp } from './hello-world.module';

async function bootstrap() {
  const app = await NestFactory.create(HelloWorldApp);
  await app.listen(3000);
}
bootstrap();
