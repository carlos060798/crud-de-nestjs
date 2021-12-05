// este archovo es el modelo de datos que contendra la base d edatos objeto dee consulta
export class PersonaModel{
    // construictor para  los aprametos del archivo
    constructor(
        public id:string,
        public nombre:string,
        public edad:number,
        public correo:string,
    ){}

}