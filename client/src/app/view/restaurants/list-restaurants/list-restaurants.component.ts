import {Component} from '@angular/core';
import {Restaurant, Restaurants} from "../../../model/restaurant";
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {switchMap} from "rxjs/operators";
import {User} from "../../../model/user";

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})

export class ListRestaurantsComponent {

  restaurants: Restaurants;
  isVote: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantsService: RestaurantsService
  ) {
    restaurantsService.list()
      .subscribe(restaurant => this.restaurants = restaurant);

    restaurantsService.changeData
      .pipe(
        switchMap((data: Restaurant) => {
          return this.restaurantsService.create(data);
        }),
        switchMap(() => {
          return restaurantsService.list();
        })
      ).subscribe((data: Restaurants) => {
      this.restaurants = data;
    })

    restaurantsService.newList.subscribe((data: Restaurants) => {
      this.restaurants = data;
    });
  }

  deleteRestaurant(id: number): void {
    this.restaurantsService.delete(id)
      .pipe(
        switchMap(() => {
          return this.restaurantsService.list()
        })
      ).subscribe(restaurant => this.restaurants = restaurant);
  }

  vote(restaurantId: number, flag: boolean): void {
    this.isVote = flag;

    console.log("list")
    console.log(restaurantId)

    if (!this.isVote) {
      this.restaurantsService.vote(restaurantId)
        .subscribe(() => this.isVote = true)
    } else {
      this.restaurantsService.vote(0)
        .subscribe(() => this.isVote = false)
    }
  }
}
