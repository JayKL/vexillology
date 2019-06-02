import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';

import { TodoFuncService } from '../todo-func.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-list-todos',
  templateUrl: './app-list-todos.component.html',
  styleUrls: ['./app-list-todos.component.css']
})
export class AppListTodosComponent implements OnInit {
  todos=Todos;
  b;

  getTodos() {
    return this.http.get('/assets/todos.json');
  }

  constructor( 
        private todoFuncService: TodoFuncService,
       private http: HttpClient) { 
       this.b = this.getTodos();
  }

  ngOnInit() {
  }
  

}