import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {
  title: string;
  headTitle: string;

  constructor() {
    this.title = "Restaurants";
    this.headTitle = "Restaurants Voting"
  }
}
