import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LotocModule } from './lotoc/lotoc.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Lotoc routes')
    .setDescription('The lotoc API description')
    .setVersion('1.0')
    .addTag('Lotoc integration')
    .build();
  const lotocDocument = SwaggerModule.createDocument(app, options, {
    include: [LotocModule]
  });
  SwaggerModule.setup('swagger/lotoc', app, lotocDocument);

//   const secondOptions = new DocumentBuilder()
//   .setTitle('Second routes')
//   .setDescription('The second API description')
//   .setVersion('1.0')
//   .addTag('Second integration')
//   .build();
// const secondDocument = SwaggerModule.createDocument(app, options, {
//   include: [SecondModule]
// });
// SwaggerModule.setup('swagger/second', app, secondDocument);

  await app.listen(3000);
}
bootstrap();
