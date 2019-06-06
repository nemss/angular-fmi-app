import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {CoursesListComponent} from './components/courses-list/courses-list.component';
import {CoursesFormComponent} from './components/courses-form/courses-form.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {IsadminGuard} from './isadmin.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'all-courses',
    component: CoursesListComponent
  },
  {
    path: 'add-course',
    component: CoursesFormComponent,
    canActivate: [IsadminGuard]
  },
  {
    path: 'edit-course/:id',
    component: CoursesFormComponent,
    canActivate: [IsadminGuard]
  },
  {
    path: 'all-users',
    component: UsersListComponent,
    canActivate: [IsadminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
