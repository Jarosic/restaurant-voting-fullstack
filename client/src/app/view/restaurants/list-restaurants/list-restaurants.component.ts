import {Component} from '@angular/core';
import {Restaurant, Restaurants} from "../../../model/restaurant";
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantsService} from "../../../service/restaurants/restaurants.service";
import {switchMap, map} from "rxjs/operators";
import {User} from "../../../model/user";
import {LocalStorageService} from "../../../service/localStorage/local-storage.service";

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})

export class ListRestaurantsComponent {

  restaurants: Restaurants;
  voteRestaurantName: string = '';
  isVote: boolean = false;
  user: User;
  isAdmin: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantsService: RestaurantsService,
    private localStorageService: LocalStorageService,
  ) {

    this.user = JSON.parse(window.localStorage.getItem('authUser'))

    let role = []
    role = this.user.roles;
    if (role[0] === 'ADMIN') {
      this.isAdmin = true;
    }

    restaurantsService.list()
      .subscribe((data) => this.restaurants = data)

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

    if (this.user.restaurantId != null) {
      restaurantsService.getById(this.user.restaurantId).subscribe(
        (r) => {
          this.voteRestaurantName = r.name
          this.isVote = true;
        })
    }
  }

  deleteRestaurant(id: number): void {
    this.restaurantsService.delete(id)
      .pipe(
        switchMap(() => {
          return this.restaurantsService.list()
        })
      ).subscribe(restaurants => this.restaurants = restaurants);
  }

  vote(restaurantId: number, flag: boolean, name: string): void {
    this.restaurantsService.vote(restaurantId)
      .subscribe((u: User) => {
        this.user.restaurantId = u.restaurantId;
        this.user.votingDateTime = u.votingDateTime;
        this.localStorageService.updateUser(this.user);
        this.voteRestaurantName = name;
        this.isVote = flag;
        this.router.navigate(['/'])
      });
  }

  unVote(flag: boolean): void {
    let c = confirm("Cancel selection ?");
    if (c) {
      this.restaurantsService.unVote()
        .subscribe(
          (u: User) => {
            this.user.restaurantId = u.restaurantId;
            this.user.votingDateTime = u.votingDateTime;
            this.localStorageService.updateUser(this.user);
            this.voteRestaurantName = '';
            this.isVote = flag;
          });
    }
  }
}
