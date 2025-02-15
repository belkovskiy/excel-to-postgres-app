import { Controller, Get } from "@nestjs/common";

@Controller('lift') 
export class LiftController {
  @Get()
  getLift(): string {
    return 'Привет от Лифта МогилёвЛифтМаш!!!';
  }

}
 