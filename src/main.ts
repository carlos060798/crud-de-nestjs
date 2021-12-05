import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'; // para configurar las variables de entorno
import { ValidationPipe } from '@nestjs/common';
const PORT=process.env.PORT||'3000'; //con esta constante se configura las variables glovales en el .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//PARA VALIDAR DATOS para qie esto sirva se instala npm install class-validator --save junto con || npm install class-transformer --save
  app.useGlobalPipes(new ValidationPipe()); 
  await app.listen(3000);
}
bootstrap();

