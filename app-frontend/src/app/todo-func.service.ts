import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable()
export class TodoFuncService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {     }

  getTodos():  Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + '/api/todos/').pipe(
      map(response => response as Todo[])
      );
  }

  createTodo(todoData: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl + '/api/todos/', todoData)
    .pipe(
      map(response => response as Todo)

      );
  }



}