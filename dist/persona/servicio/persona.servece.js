"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaService = void 0;
const common_1 = require("@nestjs/common");
const persona_model_1 = require("../model/persona.model");
let PersonaService = class PersonaService {
    constructor() {
        this.personas = [];
    }
    guardar(nombre, edad, correo) {
        let id = (Math.random() * 4000 + 1).toString();
        let per = new persona_model_1.PersonaModel(id, nombre, edad, correo);
        this.personas.push(per);
        return id;
    }
    listar() {
        return [...this.personas];
    }
    obtener(id) {
        let datos = this.buscar(id);
        if (datos == null) {
            return null;
        }
        return Object.assign({}, datos.per);
    }
    buscar(id) {
        let index = this.personas.findIndex(e => e.id == id);
        let per = this.personas[index];
        if (index == -1) {
            return null;
        }
        return { per, index };
    }
    modificar(id, nombre, edad, correo) {
        let datos = this.buscar(id);
        if (datos == null) {
            return null;
        }
        let persona = this.personas[datos.index];
        if (nombre != null) {
            persona.nombre = nombre;
        }
        if (edad != null) {
            persona.edad = edad;
        }
        if (correo != null) {
            persona.correo = correo;
        }
        this.personas[datos.index] = persona;
        return true;
    }
};
PersonaService = __decorate([
    (0, common_1.Injectable)()
], PersonaService);
exports.PersonaService = PersonaService;
//# sourceMappingURL=persona.servece.js.map