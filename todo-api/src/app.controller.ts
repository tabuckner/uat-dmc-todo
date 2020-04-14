import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getToDos(): Array<string> {
    return this.appService.getToDoItems();
  }
}
