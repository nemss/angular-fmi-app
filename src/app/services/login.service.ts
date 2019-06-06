import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: Users[] = [
    {
      id: '1',
      isBlocked: true,
      name: 'Pesho Ivanov',
      email: 'pesh@mail.bg',
      password: '123',
      role: 'user'
    },
    {
      id: '2',
      isBlocked: false,
      name: 'Misho Simov',
      email: 'misho@mail.bg',
      password: '123',
      role: 'user'
    },
    {
      id: '3',
      isBlocked: false,
      name: 'Gosho Petrov',
      email: 'gosho@mail.bg',
      password: '123',
      role: 'admin'
    }
  ];

  constructor() {
  }

  login(user) {
    if (this.users.find(users => users.email === user.email && user.password === users.password)) {
      localStorage.setItem('login', String(this.users.find(users => users.email === user.email && user.password === users.password).id));
      return of(true);
    }
  }
  getAll() {
    return of(this.users);
  }

  block(id) {
    this.users.find(u => u.id === id).isBlocked = !this.users.find(u => u.id === id).isBlocked;
  }
}


interface Users {
  id: string;
  isBlocked: boolean;
  name: string;
  email: string;
  password: string;
  role: string;
}
