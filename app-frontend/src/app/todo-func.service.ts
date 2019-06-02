import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoFuncService {

  constructor(    private http: HttpClient) { }
  getTodos() {
    return this.http.get('/assets/todos.json');
  }
}