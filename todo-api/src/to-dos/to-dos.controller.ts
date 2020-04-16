import { Controller, Get, Param } from '@nestjs/common';
import { ToDoItemModel } from 'src/models/todo-item.model';
import { ToDosService } from './to-dos.service';

@Controller('todos')
export class ToDosController {

  constructor(private toDos: ToDosService) {}
  
  @Get()
  public async getToDos(): Promise<Array<ToDoItemModel>> {
    return this.toDos.getToDoItems();
  }

  @Get(':id')
  public async getToDo(@Param('id') id): Promise<Array<ToDoItemModel>> {
    console.warn('finding ', id)
    return this.toDos.getToDoItem(id);
  }
}
