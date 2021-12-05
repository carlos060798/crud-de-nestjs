import { Injectable} from "@nestjs/common";
import { PersonaModel } from "../model/persona.model";
@Injectable()
export class PersonaService{


private personas: Array<PersonaModel>=[];

// metodos para el servicio de la para  de los datos
// any para indicar que devueleve cualquiere tipo de datos
  guardar( nombre:string, edad:number,correo:string):String{
 let id=(Math.random()* 4000+1).toString(); // PARA GENERAR UN ID ALEATORIO
 let per= new PersonaModel(id,nombre,edad,correo)
 this.personas.push(per);
 return id;
}
listar(): Array<PersonaModel> {
    return [...this.personas]; //de esta liena se devueleve una copia del elemento apora no modificar el original
} 

obtener(id : string) {
 let datos=this.buscar(id) //liena para extraer datos
 if(datos==null){ // en caso de que no encuentre devuelve nulo
return null; 
 }
 return{...datos.per}; // esta linea devueleve una copia de los datos
}
buscar(id: string){
 let index= this.personas.findIndex(e=>e.id ==id); // esta line abusca por id en el index
 let per=this.personas[index] // devuelve la eprsona encontrada
 if(index==-1){  // condsicional apr aque devuelva el valor encaso de ser nulo
     return null;
 }
 return{per,index} // devueleve lo que encuentra 
}

modificar(id: string, nombre: string, edad: number, correo: string){ // metodo para modificar usarios
    let datos = this.buscar(id);  // se ingtresa el id
    if(datos == null){ // los ciclos if valdian el valor de los datos modificados
        return null;
    }
    let persona = this.personas[datos.index]; // retorno todo con los cambios incluidos
    if(nombre != null){
        persona.nombre = nombre;
    }
    if(edad != null){
        persona.edad = edad;
    }
    if(correo != null){
        persona.correo = correo;
    }
    this.personas[datos.index] = persona;
    return true;
}
}