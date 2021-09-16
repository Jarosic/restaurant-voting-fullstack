import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../../service/account/account.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isAuth: boolean = true;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private routes: ActivatedRoute
  ) {
    // routes.params.subscribe(
    //   (params: Params) => {
    //     if (params['accessDenied']) {
    //       console.log('Access denied!')
    //     }
    //   }
    // )
  }

  onSubmit(ngForm: NgForm): void {
    this.accountService.login(ngForm.value.email, ngForm.value.password)
      .subscribe(
        (u) => {
          window.localStorage.setItem("authUser", JSON.stringify(u))
          this.isAuth = true;
          this.accountService.isAuth = true;
          this.router.navigate(['restaurants'])
        }, error => {
          this.isAuth = false;
        });
  }
}
