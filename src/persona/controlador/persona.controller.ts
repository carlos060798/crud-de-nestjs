import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { PersonaCreardto } from '../dto/persona-crear.dto';
import { PersonaModificarDTO } from '../dto/persona-modificar';
import { PersonaService } from '../servicio/persona.servece';
// este modulo meustra la obtencio de los datos consultaods mediante  los  metodos post y get
@Controller('persona') 
export class PersonaController {
    constructor(private _personaService: PersonaService){}
      // metodo pos para guardar la informacion obtenida desde el cliente
        @Post()
 guardar(@Body()personacreardto: PersonaCreardto){
           let id= this._personaService.guardar(
                personacreardto.nombre,
                personacreardto.edad, 
                personacreardto.correo);// se obtienen los datos
            return {ok:true,id};// de vuelve los datos en un json
} 
 @Get()
 listar(){
    return this._personaService.listar();
 }
 @Get(":id")
 obtener(@Param("id")id:string){
    let respuesta= this._personaService.obtener(id);
    if (respuesta==null){
        throw new HttpException({
          status:  HttpStatus.NOT_FOUND,
          error:'persona no encontrada'    
         },404 )
        } 
        return respuesta;
 }
 @Patch(":id")
 modificar(
     @Param("id") id: string,
     @Body() personaModificarDto: PersonaModificarDTO
 ) {
     let respuesta = this._personaService.modificar(
         id,
         personaModificarDto.nombre,
         personaModificarDto.edad,
         personaModificarDto.correo
     );
     if (respuesta == null) {
         throw new HttpException({
             status: HttpStatus.NOT_FOUND,
             error: 'Persona no encontrada'
         }, 404);
     }

     return { ok: true };
 }


}