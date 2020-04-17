import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { ToDoItemModel } from '../core/models/to-do-item.model';
import { ReloadListService } from '../core/reload-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoListItems: Array<ToDoItemModel> = [];
  public completedItems = 0;

  constructor(private api: ApiService,
              private reload: ReloadListService) { }

  ngOnInit() {
    this.api.getToDos().subscribe(todoItems => {
      this.todoListItems = [...todoItems];
      this.completedItems = this.todoListItems.filter(item => item.is_completed).length;
    });
    this.reload.reload$.subscribe(() => {
      this.onReloadList();
    });
  }

  public onDeleteItem(event, id: number) {
    event.preventDefault();
    event.stopPropagation();
    this.api.removeToDo(id).subscribe(() => {
      this.onReloadList();
    });
  }

  public onReloadList() {
    this.api.getToDos().subscribe(todoItems => {
      this.todoListItems = [...todoItems];
      this.completedItems = this.todoListItems.filter(item => item.is_completed).length;
    });
  }

  public onSelection(toDoItem: ToDoItemModel) {
    const nextToDo: ToDoItemModel = {
      ...toDoItem
    };
    nextToDo.is_completed = !toDoItem.is_completed;
    this.api.updateToDo(nextToDo).subscribe(() => {
      this.onReloadList();
    });
  }



}
