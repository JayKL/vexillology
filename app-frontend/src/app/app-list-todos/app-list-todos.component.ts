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



  constructor( 
        private todoFuncService: TodoFuncService) { 
       this.b = this.todoFuncService.getTodos();
  }

  ngOnInit() {
  }
  

}