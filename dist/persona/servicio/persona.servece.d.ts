import { PersonaModel } from "../model/persona.model";
export declare class PersonaService {
    private personas;
    guardar(nombre: string, edad: number, correo: string): String;
    listar(): Array<PersonaModel>;
    obtener(id: string): {
        id: string;
        nombre: string;
        edad: number;
        correo: string;
    };
    buscar(id: string): {
        per: PersonaModel;
        index: number;
    };
    modificar(id: string, nombre: string, edad: number, correo: string): boolean;
}
