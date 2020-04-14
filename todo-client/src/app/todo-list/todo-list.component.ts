import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoListItems: Array<string> = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getToDos().subscribe(todoItems => {
      this.todoListItems = [...todoItems];
    });
  }

}
