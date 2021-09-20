import {Component} from '@angular/core';
import {User} from "../../../model/user";
import {AccountService} from "../../../service/account/account.service";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {Restaurant} from "../../../model/restaurant";
import {LocalStorageService} from "../../../service/localStorage/local-storage.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  user: User;
  role: string;
  restaurantName: string = 'No votes yet';

  constructor(
    private accountService: AccountService,
    private localStorageService: LocalStorageService,
    private restaurantsService: RestaurantsService
  ) {

    this.user = localStorageService.getUser()
    let r = [];
    r = this.user.roles;
    this.role = r[0];

    if (this.user.restaurantId != null) {
      restaurantsService.getById(this.user.restaurantId)
        .subscribe((restaurant: Restaurant) => {
          this.restaurantName = restaurant.name;
        })
    }
  }
}
