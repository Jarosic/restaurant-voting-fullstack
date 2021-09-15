import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../../service/account/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isAuth: boolean = true;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
  }

  onSubmit(ngForm: NgForm): void {
    this.accountService.login(ngForm.value.email, ngForm.value.password)
      .subscribe(
        (u) => {
          console.log(u)
          window.localStorage.setItem("authUser", JSON.stringify(u))
          this.isAuth = true;
          this.router.navigate(['restaurants'])
        }, error => {
          this.isAuth = false;
        });
  }
}
