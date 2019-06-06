import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {CoursesComponent} from './components/courses/courses.component';
import {CoursesListComponent} from './components/courses-list/courses-list.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {CoursesFormComponent} from './components/courses-form/courses-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    CoursesComponent,
    CoursesListComponent,
    UsersListComponent,
    CoursesFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
