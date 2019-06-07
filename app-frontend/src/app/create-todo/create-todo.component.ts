import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from '../todo';
import { TodoFuncService } from '../todo-func.service';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  createForm;
  todos: Todo[];
  constructor(private formBuilder: FormBuilder,
  private todoFuncService: TodoFuncService,
) {

   this.createForm = this.formBuilder.group({
      title: '',
      done: '',
      description: ''
    });

 }
  onSubmit(customerData) {
    this.todoFuncService.createTodo(customerData)
      .subscribe(customerData => this.todos.push(customerData));
    customerData.done=false;
    console.warn('Your todo has been submitted', customerData);
    this.createForm.reset();
  }



  ngOnInit() {
  }

}