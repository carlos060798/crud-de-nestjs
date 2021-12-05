import*as mongoose from 'mongoose';

export const ProductoShema= new mongoose.Schema({ 
// este modulo tiene los  modelos de la estructura de datos
  nombre:{
    type:String,
    required:true
  },
  descripcion:{
    type:String,
  },
  cantidad:{
    type:Number,
    default:0
  } ,

  precio:{
    type:Number,
    required:true,
  },

   colores:[{
    nombre:String,
    color:String
   }]
});

export interface IProducto extends mongoose.Document{ // modelo de datos de la inetrfas de la base de datos
    nombre:string,
    descripcion:string,
    cantidad:number,
    precio:number,
    colores:[]
}