console.time('cold-start');

import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module.mjs';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { logger: false });
  app.getHttpServer().keepAliveTimeout = 5000;
  await app.listen(3005, () => {
    console.timeEnd('cold-start');
    console.log('Nestjs started on port 3005');
  });
}
bootstrap();
