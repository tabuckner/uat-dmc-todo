import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly hostname = 'http://localhost:3000';
  private readonly baseUrl = 'api/v1';

  constructor(private http: HttpClient) { }

  public getToDos(): Observable<Array<string>> {
    const url = `${this.hostname}/${this.baseUrl}`;
    return this.http.get<Array<string>>(url);
  }
}
