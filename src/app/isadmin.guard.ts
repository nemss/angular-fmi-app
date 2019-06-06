import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsadminGuard implements CanActivate {
  constructor(private login: LoginService) {

  }

  canActivate() {
    if (this.login.users.find(users => users.id === localStorage.getItem('login')) &&
      this.login.users.find(users => users.id === localStorage.getItem('login')).role === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
