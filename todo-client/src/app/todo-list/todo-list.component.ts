import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoListItems: Array<string> = ['Buy milk', 'Vacuum', 'Bake a freaking cake bro', 'Eat most of the cake bro'];

  constructor() { }

  ngOnInit() {
  }

}
