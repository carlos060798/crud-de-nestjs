import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {ProductoController} from"./producto.controller"
import {ProductoService} from "./producto.service"
import{ProductoShema} from "./producto.model"
@Module({
    imports:[MongooseModule.forFeature([{ name: "Producto", schema: ProductoShema }])],
    controllers:[ProductoController],
    providers:[ProductoService]
})
 
export class ProductoModule {}

