import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../../service/account/account.service";
import {switchMap} from "rxjs/operators";
import {Router} from "@angular/router";
import {User} from "../../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isRegister: boolean = true;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
  }

  onSubmit(ngForm: NgForm) {
    let roles = [];
    roles.push(ngForm.value.roles)
    ngForm.value.roles = roles
    this.accountService.register(ngForm.value)
      .pipe(
        switchMap((user: User) => {
          return this.accountService.login(user.email, ngForm.value.password)
        })
      ).subscribe(
      (u: User) => {
        window.localStorage.setItem("authUser", JSON.stringify(u))
        this.accountService.isAuth = true;
        this.router.navigate(['/restaurants'])
      }, error => {
        this.isRegister = false
      })
  }
}
