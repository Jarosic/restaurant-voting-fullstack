import { Component } from '@angular/core';
import {User} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authUser: User;
  isAuth: boolean;

   constructor() {
      if (this.authUser != null) {
          this.isAuth = true;
      }
   }
}
