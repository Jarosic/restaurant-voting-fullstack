import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../../service/users/users.service";

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {

  constructor(
    private router: Router,
    private userService: UsersService
  ) {}

  onSubmit(ngForm: NgForm): void {
    let roles = [];
    roles.push(ngForm.value.roles);
    ngForm.value.roles = roles;
    this.userService.saveDataUsers(ngForm.value)
    this.router.navigate(['admin/users']);
  }
}
