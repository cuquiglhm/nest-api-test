import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from './enviroments/env';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.API_PORT || 3300, ()=>{
    console.log(`API LISTENING AT PORT ${ENV.API_PORT ? ENV.API_PORT : 3300}`);
  });
}

bootstrap();
