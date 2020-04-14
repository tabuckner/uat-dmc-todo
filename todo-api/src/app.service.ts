import { Injectable } from '@nestjs/common';
import { MOCK_TODO_ITEMS } from './constants/mocks/todo-items';

@Injectable()
export class AppService {
  getToDoItems(): Array<string> {
    return [...MOCK_TODO_ITEMS];
  }
}
