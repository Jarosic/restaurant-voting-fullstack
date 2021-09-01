import {Component, Input} from '@angular/core';
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {Meals} from "../../../model/meal";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.css']
})
export class ListMealsComponent {

  meals: Meals;
  restaurantName: string;

  constructor(private restaurantsService: RestaurantsService) {
    restaurantsService.mealsList$
      .subscribe((restaurant) => {
        this.restaurantName = restaurant.name
        this.meals = restaurant.meals
      });
  }

  delete(id: number): void {
    console.log(id);
  }
}
