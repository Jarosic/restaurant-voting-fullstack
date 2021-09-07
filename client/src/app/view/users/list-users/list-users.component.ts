import {Component} from '@angular/core';
import {Users} from "../../../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../service/users/users.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  users: Users;
  voteRestaurantName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) {
    userService.list()
      .subscribe((users) => this.users = users);
  }

  deleteUser(id: number): void {
      this.userService.delete(id)
        .pipe(
        switchMap(() => {
          return this.userService.list()
        })
      ).subscribe(users => this.users = users);
  }
}
