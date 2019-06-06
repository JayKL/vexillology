import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoFuncService } from '../todo-func.service';


@Component({
  selector: 'app-app-list-todos',
  templateUrl: './app-list-todos.component.html',
  styleUrls: ['./app-list-todos.component.css']
})
export class AppListTodosComponent implements OnInit {
  listoftodos;
  todos: Todo[];




  constructor( 
        private todoFuncService: TodoFuncService) { 
       this.listoftodos = this.todoFuncService.getTodos();
  }

  ngOnInit(): void {
  }


  

}