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
  ) {

  }

  onSubmit(ngForm: NgForm): void {
    let rolesArr = [];
    let role = this.checkRole(ngForm.value.roles)
    rolesArr.push(role)
    ngForm.value.roles = rolesArr;
    console.log(ngForm.value)
    this.userService.saveDataUsers(ngForm.value)
    this.router.navigate(['admin/users']);
  }

  checkRole(role: string): string {
    if (role.toUpperCase() === 'USER' || role.toUpperCase() === 'ADMIN') {
      return role.toUpperCase();
    }
    return 'USER';
  }
}
