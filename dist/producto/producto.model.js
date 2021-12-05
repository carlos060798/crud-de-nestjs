"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoShema = void 0;
const mongoose = require("mongoose");
exports.ProductoShema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
    },
    cantidad: {
        type: Number,
        default: 0
    },
    precio: {
        type: Number,
        required: true,
    },
    colores: [{
            nombre: String,
            color: String
        }]
});
//# sourceMappingURL=producto.model.js.map