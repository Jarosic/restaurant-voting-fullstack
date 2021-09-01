import {Component} from '@angular/core';
import {Restaurant, Restaurants} from "../../../model/restaurant";
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})

export class ListRestaurantsComponent {

  restaurants: Restaurants;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantsService: RestaurantsService
  ) {
    console.log("List Restaurant comp")
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
    //this.router.navigate(['/'])
  }

  vote(restaurantId: any, name: string): void {
    alert(`Vote by restaurant name: ${name}, id: ${restaurantId}`)
  }
}
