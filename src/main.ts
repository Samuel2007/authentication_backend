import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  app.enableCors({
    origin: 'http://localhost:3000', // adres frontendu
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // tylko jeśli używasz cookies / auth
  });
  await app.listen(port);
  console.log(`Listening on port ${port}`);
}

// mark intentionally — avoids linter complaining about unhandled promise
void bootstrap();
