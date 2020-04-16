import { Injectable } from '@nestjs/common';
import { MOCK_TODO_ITEMS } from './constants/mocks/todo-items';

@Injectable()
export class AppService {
  getToDoItems(): Array<string> {
    return [...MOCK_TODO_ITEMS];
  }

  public getToDoItem(id: number): string {
    return MOCK_TODO_ITEMS[id + 1];
  }

  public addToDoItem(toDoItem: string): void {
    MOCK_TODO_ITEMS.push(toDoItem);
  }

  public updateToDoItem(toDoItem: string) {
    // Update.
    // NOTE: Might need the whole model.
  }

  public removeToDoItem(id: number): void {
    // Remove.
  }
}
