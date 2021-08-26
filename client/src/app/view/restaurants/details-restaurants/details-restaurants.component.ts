import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-restaurants',
  templateUrl: './details-restaurants.component.html',
  styleUrls: ['./details-restaurants.component.css']
})
export class DetailsRestaurantsComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(i => this.id = i.id)
    console.log(this.id);
  }

  ngOnInit(): void {
  }
}
