import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import'dotenv/config'; // para usar el archivo .env
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { ProductoModule } from './producto/producto.module';

const URL=process.env.MONGODB;
@Module({

// se importan los nuevos modulos
  imports: [ PersonaModule,
  MongooseModule.forRoot(URL), // LA URL TIENE LA CONSTANTE DE LA BASE DE DATOS
  ProductoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
