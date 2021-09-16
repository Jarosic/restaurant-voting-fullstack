import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {
  title: string;
  headTitle: string;
  isAdmin: boolean = false;
  user: User;

  constructor() {
    this.title = "Restaurants";
    this.headTitle = "Restaurants Voting"

    this.user = JSON.parse(window.localStorage.getItem('authUser'))
    let role = []
    role = this.user.roles;
    if (role[0] === 'ADMIN') {
      this.isAdmin = true;
    }
  }
}
