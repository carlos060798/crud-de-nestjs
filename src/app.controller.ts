import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// cad controlador es una ruta dentro del proyecto
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
