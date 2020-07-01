/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const port = process.env.PORT || 5000;

  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule,  {
    transport:  Transport.GRPC,
    options: {
      url: `localhost:${port}`,
      package: 'hero',
      protoPath: join(process.cwd(), 'protos/hero/hero.proto'),
    },
  });
  await app.listen(() => {
    Logger.log(`Listening at localhost:${port}`);
  });
}

bootstrap();
