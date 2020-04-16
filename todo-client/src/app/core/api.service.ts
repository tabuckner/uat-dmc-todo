import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ToDoItemModel } from './models/to-do-item.model';
import { ToDoDtoModel } from './models/to-do-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly hostname = 'http://localhost:3000';
  private readonly baseUrl = 'api/v1';
  private readonly route = 'todos';
  private readonly toDosEndpoint = `${this.hostname}/${this.baseUrl}/${this.route}`;

  constructor(private http: HttpClient) { }

  public getToDos(): Observable<Array<ToDoItemModel>> {
    const url = this.toDosEndpoint;
    return this.http.get<Array<ToDoItemModel>>(url);
  }

  public addToDo(nextToDo: ToDoDtoModel): Observable<any> {
    const url = this.toDosEndpoint;
    return this.http.post(url, { ...nextToDo });
  }

  public removeToDo(id: number): Observable<any> {
    const url = `${this.toDosEndpoint}/${id}`;
    return this.http.delete(url);
  }
}
