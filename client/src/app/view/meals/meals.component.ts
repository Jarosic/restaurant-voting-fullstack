import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  constructor(router: Router) {
    console.log("Meals component")
    //router.navigate(['/meals/list'])
  }

  ngOnInit(): void {
  }

}
