import * as mongoose from 'mongoose';
export declare const ProductoShema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any>;
export interface IProducto extends mongoose.Document {
    nombre: string;
    descripcion: string;
    cantidad: number;
    precio: number;
    colores: [];
}
