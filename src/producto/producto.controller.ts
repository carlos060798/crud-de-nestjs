import { Controller, Get, HttpException, Param, HttpStatus, Post, Body, Patch } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoCrearDTO} from './dto/producto-crear.dto';

@Controller("producto") // RUTA PARA LA BASE DE DATOS
export class ProductoController { 


    // CONSTRUCTOR  PARA DEVOLVER LOS DATOS DE LOS EMTODODS ESCRITOS EN LA CLASE PRODUCTO SERVICE
    constructor(private _productoService : ProductoService){}

    @Post() // METODO PARA GUARDAR LOS DATOS DE PRODUCTOS CREADOS
    async guardar(@Body() productoCrearDto : ProductoCrearDTO){
        const resultado = await this._productoService.guardar(productoCrearDto);
        return {ok:true, resultado}
    }

    @Get() // METODO PARA LISTAR PRODUCTOS
    async listar(){
        return await this._productoService.listar();
    }

    @Get(":id") // METODO DE  LISTA  UN PRODUCTO POR SU ID
    async obtener(@Param("id") id :  string){
        const resultado = await this._productoService.obtener(id);
        if(resultado == null){
            throw new HttpException("Producto no encontrado", HttpStatus.NOT_FOUND);
        }
        return resultado;
    }

    @Patch(":id") // METODO PARA  MODIFICAR EL PRODUCTO POR ID 
    async modificar(@Param("id") id : string, @Body() productoCrearDto : ProductoCrearDTO){
        const resultado = await this._productoService.modificar(id, productoCrearDto);
        if(resultado == null){
            throw new HttpException("Producto no encontrado", HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
   
}