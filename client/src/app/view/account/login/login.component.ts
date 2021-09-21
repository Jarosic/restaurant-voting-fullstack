import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../../service/account/account.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../service/localStorage/local-storage.service";

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
    private localStorageService: LocalStorageService
  ) {
  }

  onSubmit(ngForm: NgForm): void {
    this.accountService.login(ngForm.value.email, ngForm.value.password)
      .subscribe(
        (u) => {
          u.password = ngForm.value.password;
          this.localStorageService.addUser(u);
          this.isAuth = true;
          this.accountService.isAuth = true;
          this.router.navigate(['restaurants'])
        }, error => {
          this.isAuth = false;
        });
  }
}
