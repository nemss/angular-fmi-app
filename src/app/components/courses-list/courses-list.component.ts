import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {LoginService} from '../../services/login.service';

class Courses {
}

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Courses[];
  loggedIn: string;
  isAdmin: boolean;

  constructor(private coursesService: CoursesService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.courses = this.coursesService.courses;
    this.loggedIn = localStorage.getItem('login');
    if (localStorage.getItem('login')) {
      this.isAdmin = this.loginService.users.find(users => users.id === localStorage.getItem('login')).role === 'admin';
    } else {
      this.isAdmin = false;
    }
  }

  addVote(courses, rate) {
    this.coursesService.reitCourses(courses, rate).subscribe();
  }
}
