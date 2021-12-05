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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaCreardto = void 0;
const class_validator_1 = require("class-validator");
class PersonaCreardto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "el nombre es requerido" }),
    __metadata("design:type", String)
], PersonaCreardto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "la edad es requerida" }),
    (0, class_validator_1.Min)(1, { message: "la edad debe ser mayor a 1 año" }),
    __metadata("design:type", Number)
], PersonaCreardto.prototype, "edad", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], PersonaCreardto.prototype, "correo", void 0);
exports.PersonaCreardto = PersonaCreardto;
//# sourceMappingURL=persona-crear.dto.js.map