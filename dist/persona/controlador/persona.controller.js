"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaController = void 0;
const common_1 = require("@nestjs/common");
const persona_crear_dto_1 = require("../dto/persona-crear.dto");
const persona_modificar_1 = require("../dto/persona-modificar");
const persona_servece_1 = require("../servicio/persona.servece");
let PersonaController = class PersonaController {
    constructor(_personaService) {
        this._personaService = _personaService;
    }
    guardar(personacreardto) {
        let id = this._personaService.guardar(personacreardto.nombre, personacreardto.edad, personacreardto.correo);
        return { ok: true, id };
    }
    listar() {
        return this._personaService.listar();
    }
    obtener(id) {
        let respuesta = this._personaService.obtener(id);
        if (respuesta == null) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'persona no encontrada'
            }, 404);
        }
        return respuesta;
    }
    modificar(id, personaModificarDto) {
        let respuesta = this._personaService.modificar(id, personaModificarDto.nombre, personaModificarDto.edad, personaModificarDto.correo);
        if (respuesta == null) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Persona no encontrada'
            }, 404);
        }
        return { ok: true };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [persona_crear_dto_1.PersonaCreardto]),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "guardar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "obtener", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, persona_modificar_1.PersonaModificarDTO]),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "modificar", null);
PersonaController = __decorate([
    (0, common_1.Controller)('persona'),
    __metadata("design:paramtypes", [persona_servece_1.PersonaService])
], PersonaController);
exports.PersonaController = PersonaController;
//# sourceMappingURL=persona.controller.js.map