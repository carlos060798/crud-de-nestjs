import { Module } from '@nestjs/common';
import { PersonaController } from './controlador/persona.controller';
import { PersonaService } from './servicio/persona.servece';

@Module({
    imports:[],
    controllers:[PersonaController],
    providers:[PersonaService]
})
 
export class PersonaModule {}
