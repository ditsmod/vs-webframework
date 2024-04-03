console.time('cold-start');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.mjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.getHttpAdapter().getInstance().set('etag', false).set('x-powered-by', false);
  await app.listen(3004, () => {
    console.timeEnd('cold-start');
    console.log('Nestjs started on port 3004');
  });
}
bootstrap();
