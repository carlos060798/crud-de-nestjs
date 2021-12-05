import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import{IProducto} from './producto.model'
import { ProductoCrearDTO } from "./dto/producto-crear.dto";
@Injectable()
export class ProductoService {
     constructor(@InjectModel("Producto") private readonly productoModel: Model<IProducto>){}
// metodos para la base de datos 
// metodo para guardar datos
async guardar(productoCreardto: ProductoCrearDTO){
 const crear=new this.productoModel(productoCreardto)
 return await crear.save();
}
// metodo para lsitar productos
async listar():Promise<IProducto[]>{
     try{
     return await this.productoModel.find().exec();
     }catch(Exception){
      return null;
     }
}
// metodo para obteenr un producto por id 
async obtener(id:string):Promise<IProducto> {
  try{
    return await this.productoModel.findById(id).exec();
  } catch(Exception){
     return null; // retona un valor nulo
    }}
// metodo  para modificar un producto
async modificar(id:string, productoCreardto: ProductoCrearDTO):Promise<IProducto>{
     try{
 // return await this.productoModel.findByIdAndUpdate(id, productoCreardto,{new:true}).exec(); para retorna ya sea un producto  modificado o crear uno nuevo con los datos alterados

     return await this.productoModel.findByIdAndUpdate(id, productoCreardto,{new:true}).exec();
     }catch(Exception){
          return null;
     }
}


}



