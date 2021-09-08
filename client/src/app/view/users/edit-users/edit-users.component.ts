import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {UsersService} from "../../../service/users/users.service";
import {User} from "../../../model/user";
import {NgForm} from "@angular/forms";
import {Restaurant} from "../../../model/restaurant";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {

  user: User;

  constructor(
    private usersService: UsersService,
    private router: ActivatedRoute,
    private redirect: Router
  ) {
    this.router.params.pipe(
      switchMap((params: any) => {
        return usersService.getById(params.id);
      })
    ).subscribe((data: User) => {
      this.user = data;
    });
  }

  onSubmit(ngForm: NgForm): void {
    let roles = [];
    roles.push(ngForm.value.roles);
    ngForm.value.roles = roles;
    this.usersService.update(ngForm.value, this.user.id).pipe(
      switchMap(() => {
        return this.usersService.list();
      }),
      map((data: Restaurant) => {
        this.usersService.updateList(data);
      })
    ).subscribe();
    this.redirect.navigate(['admin/users']);
  }
}
