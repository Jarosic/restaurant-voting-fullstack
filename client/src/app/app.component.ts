import { Component } from '@angular/core';
import {User} from "./model/user";
import {AccountService} from "./service/account/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authUser: User;
  isAuth: boolean;

   constructor(private accountService: AccountService) {
      if (this.authUser != null) {
          this.isAuth = true;
      }
   }

   logout() {
     this.accountService.logout()
     window.window.location.reload()
   }
}
