import { ProductoService } from './producto.service';
import { ProductoCrearDTO } from './dto/producto-crear.dto';
export declare class ProductoController {
    private _productoService;
    constructor(_productoService: ProductoService);
    guardar(productoCrearDto: ProductoCrearDTO): Promise<{
        ok: boolean;
        resultado: import("./producto.model").IProducto & {
            _id: any;
        };
    }>;
    listar(): Promise<import("./producto.model").IProducto[]>;
    obtener(id: string): Promise<import("./producto.model").IProducto>;
    modificar(id: string, productoCrearDto: ProductoCrearDTO): Promise<import("./producto.model").IProducto>;
}
