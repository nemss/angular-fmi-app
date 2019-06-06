import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getAll().subscribe(users => {
      this.users = users;
    });
  }


  onBlockUnbock(id) {
    this.loginService.block(id);
  }
}
