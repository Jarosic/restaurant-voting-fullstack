import {Component, OnInit} from '@angular/core';
import {Restaurants} from "../../../model/restaurant";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})

export class ListRestaurantsComponent implements OnInit {

  restaurants: Restaurants = [
    {
      "id": 100001,
      "name": "Bartolomeo",
      "meals": [
        {
          "id": 100002,
          "description": "Milk",
          "price": 35
        },
        {
          "id": 100003,
          "description": "Cake",
          "price": 50
        },
        {
          "id": 100004,
          "description": "Ice cream",
          "price": 20
        }
      ]
    },
    {
      "id": 100003,
      "name": "Celentano",
      "meals": [
        {
          "id": 100010,
          "description": "Pizza",
          "price": 120
        },
        {
          "id": 100011,
          "description": "Beer",
          "price": 50
        }
      ]
    },
    {
      "id": 100002,
      "name": "Khutor",
      "meals": [
        {
          "id": 100005,
          "description": "Soup",
          "price": 25
        },
        {
          "id": 100006,
          "description": "Omelette",
          "price": 35
        },
        {
          "id": 100007,
          "description": "Salad",
          "price": 20
        },
        {
          "id": 100008,
          "description": "Juice",
          "price": 15
        },
        {
          "id": 100009,
          "description": "Bread",
          "price": 10
        }
      ]
    }
  ]

  counter: number;

  constructor(private route: ActivatedRoute) {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  vote(restaurantId: any): void {
      console.log(restaurantId)
  }

  deleteRestaurant(id: any): void {
    for (let i = 0; i < this.restaurants.length; i++) {
      if (this.restaurants[i].id === id) {
        this.restaurants.splice(i, 1);
      }
    }
  }
}
