import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItemModel } from './models/to-do-item.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly hostname = 'http://localhost:3000';
  private readonly baseUrl = 'api/v1';
  private readonly route = 'todos';

  constructor(private http: HttpClient) { }

  public getToDos(): Observable<Array<ToDoItemModel>> {
    const url = `${this.hostname}/${this.baseUrl}/${this.route}`;
    return this.http.get<Array<ToDoItemModel>>(url);
  }
}
