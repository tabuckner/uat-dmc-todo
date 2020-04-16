import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ToDoItemModel } from '../../lib/models/todo-item.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getToDos(): Promise<Array<ToDoItemModel>> {
    return this.appService.getToDoItems();
  }
}
