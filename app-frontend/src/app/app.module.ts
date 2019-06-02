import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppIndexComponent } from './app-index/app-index.component';
import { AppListTodosComponent } from './app-list-todos/app-list-todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoFuncService } from './todo-func.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    RouterModule.forRoot([
      { path: '', component: AppIndexComponent },
            { path: 'listoftodos', component: AppListTodosComponent },
     { path: 'createtodo', component: CreateTodoComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AppIndexComponent,
    AppListTodosComponent,
    CreateTodoComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [TodoFuncService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/