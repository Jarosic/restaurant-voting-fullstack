import {Component} from '@angular/core';
import {Restaurants} from "../../../model/restaurant";
import {ActivatedRoute} from "@angular/router";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})

export class ListRestaurantsComponent {
  restaurants: Restaurants

  constructor(private route: ActivatedRoute, restaurantsService: RestaurantsService) {
    restaurantsService.list()
      .subscribe(restaurant => this.restaurants = restaurant)
  }

  vote(restaurantId: any): void {
      console.log(restaurantId)
  }

  deleteRestaurant(id: any): void {
    for (let i = 0; i < this.restaurants.length; i++) {
      if (this.restaurants[i].id === id) {
        this.restaurants.splice(i, 1);
      }
    }
  }
}
