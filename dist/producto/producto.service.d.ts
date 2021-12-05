import { Model } from "mongoose";
import { IProducto } from './producto.model';
import { ProductoCrearDTO } from "./dto/producto-crear.dto";
export declare class ProductoService {
    private readonly productoModel;
    constructor(productoModel: Model<IProducto>);
    guardar(productoCreardto: ProductoCrearDTO): Promise<IProducto & {
        _id: any;
    }>;
    listar(): Promise<IProducto[]>;
    obtener(id: string): Promise<IProducto>;
    modificar(id: string, productoCreardto: ProductoCrearDTO): Promise<IProducto>;
}
