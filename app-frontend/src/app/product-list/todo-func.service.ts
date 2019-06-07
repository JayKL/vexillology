import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TodoFuncService {
  private baseUrl = 'http://localhost:8080';


  constructor(    private http: HttpClient) { }
  getTodos() {
    return this.http.get(this.baseUrl + '/api/todos')  .toPromise()
    .then(response => response.json())
    .catch(this.handleError);;
  }

  createTodo(formData){
    return this.http.post('/assets/todos/json',formData);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}