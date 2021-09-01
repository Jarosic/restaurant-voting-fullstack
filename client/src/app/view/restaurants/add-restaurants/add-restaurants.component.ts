import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {NgForm} from "@angular/forms";
import {Restaurant} from "../../../model/restaurant";

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.css']
})
export class AddRestaurantsComponent {

  restaurant: Restaurant = new Restaurant();

  constructor(
    private router: Router,
    private restaurantsService: RestaurantsService
  ) { }

  onSubmit(ngForm: NgForm): void {
    this.restaurantsService.saveDataRestaurant(ngForm.value);
    this.router.navigate(['/']);
  }
}
