import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function swaggerDoc(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Api Documentation')
    .setDescription('User CRUD Operations')
    .setVersion('1.0')
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDoc);
}
