import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {AccountService} from "../../../service/account/account.service";
import {pipe} from "rxjs";
import {switchMap} from "rxjs/operators";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {Restaurant} from "../../../model/restaurant";

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
    private restaurantsService: RestaurantsService
  ) {
    accountService.getAuthUser()
      .subscribe((user: User) => {
        this.user = user;
        let r = [];
        r = this.user.roles;
        this.role = r[0];

        if (user.restaurantId != null) {
          return restaurantsService.getById(user.restaurantId)
            .subscribe((restaurant: Restaurant) => {
                this.restaurantName = restaurant.name;
            })
        }
      })

    // accountService.getAuthUser()
    // pipe(
    //   switchMap((user: User) => {
    //     if (user.restaurantId != null) {
    //       return restaurantsService.getById(user.restaurantId)
    //     }
    //     this.user = user;
    //     return null;
    //   })
    // )
  }
}
