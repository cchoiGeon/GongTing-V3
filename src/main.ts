import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomValidationPipe } from './common/pipe/validationPipe.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new CustomValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
