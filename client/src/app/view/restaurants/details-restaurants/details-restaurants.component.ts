import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {Restaurant} from "../../../model/restaurant";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-details-restaurants',
  templateUrl: './details-restaurants.component.html',
  styleUrls: ['./details-restaurants.component.css']
})
export class DetailsRestaurantsComponent {

  restaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
  ) {
    this.route.params.pipe(
      switchMap((params: any) => {
        return restaurantsService.getById(params.id);
      })
    ).subscribe((data: Restaurant) => {
      this.restaurant = data;
    });
  }
}
