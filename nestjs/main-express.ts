console.time('cold-start');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.listen(3004, () => {
    console.timeEnd('cold-start');
    console.log('Nestjs started on port 3004');
  });
}
bootstrap();
