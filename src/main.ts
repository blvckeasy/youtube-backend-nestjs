import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from 'config/configuration'



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000

  
  await app.listen(PORT, configuration().callback);
}

bootstrap();
