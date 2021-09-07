import {Component} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  title: string;

  constructor() {
    this.title = 'Users';
  }
}
