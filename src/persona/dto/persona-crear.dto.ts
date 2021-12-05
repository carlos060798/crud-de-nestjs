import { IsEmail, IsInt, IsNotEmpty, Min } from "class-validator";

// modelo de dto para crear persona
export class PersonaCreardto{
@IsNotEmpty({message: "el nombre es requerido"}) // para que no eprmita espacios vacios o el ingreso de datos no texto
  readonly nombre:string ;
@IsInt({message: "la edad es requerida"}) // solo eprmita datos tipo numericos 
@Min(1,{message: "la edad debe ser mayor a 1 año"}) //inicie el codigo en 1
  readonly edad: number ;
@IsEmail() // parea que solo permita  datos  de correo
  readonly correo:string;
}

