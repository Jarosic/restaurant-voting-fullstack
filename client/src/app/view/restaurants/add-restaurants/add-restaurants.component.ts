import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {NgForm} from "@angular/forms";
import {Meals} from "../../../model/meal";

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.css']
})
export class AddRestaurantsComponent {

  meals: Meals = [];

  constructor(
    private router: Router,
    private restaurantsService: RestaurantsService
  ) {
  }

  onSubmit(ngForm: NgForm): void {
    ngForm.value.meals = this.meals;
    this.restaurantsService.saveDataRestaurant(ngForm.value);
    this.router.navigate(['/']);
  }

  addMeal(ngForm: NgForm): void {
    this.meals.push(ngForm.value)
    ngForm.reset();
  }

  deleteMeal(id: number) {
    this.meals.splice(id, 1);
  }
}
