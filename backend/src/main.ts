import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig, envs } from '@/src/config';
import { ValidationPipe } from '@nestjs/common';

const GLOBAL_PREFIX = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(corsConfig);
  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await app.listen(envs.NEST_PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
