import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { ListOfTodos } from './list-of-todos';
import { TodoService } from './todo.service';
import { AddTodos } from './addtodos';
@NgModule({
  declarations: [
    AppComponent,
    ListOfTodos,
    AddTodos
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }