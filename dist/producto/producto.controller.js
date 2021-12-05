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
exports.ProductoController = void 0;
const common_1 = require("@nestjs/common");
const producto_service_1 = require("./producto.service");
const producto_crear_dto_1 = require("./dto/producto-crear.dto");
let ProductoController = class ProductoController {
    constructor(_productoService) {
        this._productoService = _productoService;
    }
    async guardar(productoCrearDto) {
        const resultado = await this._productoService.guardar(productoCrearDto);
        return { ok: true, resultado };
    }
    async listar() {
        return await this._productoService.listar();
    }
    async obtener(id) {
        const resultado = await this._productoService.obtener(id);
        if (resultado == null) {
            throw new common_1.HttpException("Producto no encontrado", common_1.HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
    async modificar(id, productoCrearDto) {
        const resultado = await this._productoService.modificar(id, productoCrearDto);
        if (resultado == null) {
            throw new common_1.HttpException("Producto no encontrado", common_1.HttpStatus.NOT_FOUND);
        }
        return resultado;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [producto_crear_dto_1.ProductoCrearDTO]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "guardar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "obtener", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, producto_crear_dto_1.ProductoCrearDTO]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "modificar", null);
ProductoController = __decorate([
    (0, common_1.Controller)("producto"),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controller.js.map