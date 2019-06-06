import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Courses[] = [
    {
      id: '1',
      image: 'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png',
      rating: 1,
      title: 'Kurs 1',
      description: 'Opisanie 1',
      users: []
    },
    {
      id: '2',
      image: 'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png',
      rating: 1,
      title: 'Kurs 2',
      description: 'Opisanie 2',
      users: []
    }
  ];

  constructor() {
  }

  getCourse(id) {
    return of(this.courses.find(course => course.id === id));
  }

  editCourses(course, id) {
    Object.assign(this.courses.find(courses => courses.id === id), course);
    return of(true);
  }

  addCourses(courses) {
    const newCourse = {
      id: this.courses[this.courses.length - 1].id + 1,
      image: courses.image,
      rating: 1,
      title: courses.title,
      description: courses.description,
      users: []
    };

    this.courses.push(newCourse);
    return of(true);
  }

  reitCourses(courses, rate) {
    this.courses.filter(course => course.id === courses.id)[0].rating =
      this.courses.filter(course => course.id === courses.id)[0].rating + rate;
    return of(true);
  }

  joinCourses(courses) {
    this.courses.find(course => course.id === courses.id).users.push(localStorage.getItem('login'));
    return of(true);
  }
}

interface Courses {
  id: string;
  image: string;
  rating: number;
  title: string;
  description: string;
  users: string[];
}
