import { PersonaCreardto } from '../dto/persona-crear.dto';
import { PersonaModificarDTO } from '../dto/persona-modificar';
import { PersonaService } from '../servicio/persona.servece';
export declare class PersonaController {
    private _personaService;
    constructor(_personaService: PersonaService);
    guardar(personacreardto: PersonaCreardto): {
        ok: boolean;
        id: String;
    };
    listar(): import("../model/persona.model").PersonaModel[];
    obtener(id: string): {
        id: string;
        nombre: string;
        edad: number;
        correo: string;
    };
    modificar(id: string, personaModificarDto: PersonaModificarDTO): {
        ok: boolean;
    };
}
