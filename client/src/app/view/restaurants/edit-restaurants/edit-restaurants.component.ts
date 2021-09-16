import {Component} from '@angular/core';
import {Restaurant} from "../../../model/restaurant";
import {Meals} from "../../../model/meal";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-restaurants',
  templateUrl: './edit-restaurants.component.html',
  styleUrls: ['./edit-restaurants.component.css']
})
export class EditRestaurantsComponent {

  restaurant: Restaurant;
  meals: Meals;
  restaurantName: string;

  constructor(
    private restaurantsService: RestaurantsService,
    private router: ActivatedRoute,
    private routes: Router
  ) {
    this.router.params.pipe(
      switchMap((params: any) => {
        return restaurantsService.getById(params.id);
      })
    ).subscribe((data: Restaurant) => {
      this.restaurant = data;
      this.meals = data.meals;
      this.restaurantName = this.restaurant.name;
    });
  }

  onSubmit(ngForm: NgForm): void {
    this.restaurant.name = ngForm.value.name;
    this.restaurant.meals = this.meals;
    this.restaurantsService.update(this.restaurant, this.restaurant.id).pipe(
      switchMap(() => {
        return this.restaurantsService.list();
      }),
      map((data: Restaurant) => {
        this.restaurantsService.updateList(data);
      })
    ).subscribe();

    this.routes.navigate(['/restaurants']);
  }

  addMeal(ngForm: NgForm): void {
    this.meals.push(ngForm.value)
    ngForm.reset();
  }

  deleteMeal(id: number): void {
    this.meals.splice(id, 1);
  }
}
