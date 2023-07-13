import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerDoc } from './Utils/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  swaggerDoc(app);
  await app.listen(PORT);
}
bootstrap();
