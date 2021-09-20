import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {AccountService} from "../../../service/account/account.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../service/localStorage/local-storage.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  user: User;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.user = this.localStorageService.getUser();
  }

  onSubmit(ngForm: NgForm) {
    this.accountService.updateAuthUser(ngForm.value)
      .subscribe((user: User) => {
        let u = this.localStorageService.getUser();
        user.password = u.password;
        this.localStorageService.updateUser(user);
        this.router.navigate(['/account/details'])
      })
  }
}
