import {NgModule} from "@angular/core";
import {AddRestaurantsComponent} from './add-restaurants/add-restaurants.component';
import {ListRestaurantsComponent} from './list-restaurants/list-restaurants.component';
import {EditRestaurantsComponent} from './edit-restaurants/edit-restaurants.component';
import {DetailsRestaurantsComponent} from './details-restaurants/details-restaurants.component';
import {RouterModule, Routes} from "@angular/router";
import {RestaurantsComponent} from "./restaurants.component";
import {CommonModule} from "@angular/common";
import {MealsComponent} from "../meals/meals.component";

const routes: Routes = [
  {path: '', component: RestaurantsComponent, children: [
      {path: 'add', component: AddRestaurantsComponent},
      {path: 'details/:id', component: DetailsRestaurantsComponent},
      {path: 'edit/:id', component: EditRestaurantsComponent},
      {path: 'meals', component: MealsComponent}
    ]
  }
]

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AddRestaurantsComponent,
    ListRestaurantsComponent,
    EditRestaurantsComponent,
    DetailsRestaurantsComponent,
    RestaurantsComponent
  ],
  exports: [RouterModule],
  providers: []
})

export class RestaurantsModule {
}
