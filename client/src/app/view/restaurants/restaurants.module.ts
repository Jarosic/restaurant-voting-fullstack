import {NgModule} from "@angular/core";
import {AddRestaurantsComponent} from './add-restaurants/add-restaurants.component';
import {ListRestaurantsComponent} from './list-restaurants/list-restaurants.component';
import {EditRestaurantsComponent} from './edit-restaurants/edit-restaurants.component';
import {DetailsRestaurantsComponent} from './details-restaurants/details-restaurants.component';
import {RouterModule, Routes} from "@angular/router";
import {RestaurantsComponent} from "./restaurants.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthGuards} from "../../service/auth.guards";

const routes: Routes = [
  {path: '', component: RestaurantsComponent, canActivate: [AuthGuards], children: [
      {path: 'add', component: AddRestaurantsComponent},
      {path: 'details/:id', component: DetailsRestaurantsComponent},
      {path: 'edit/:id', component: EditRestaurantsComponent},
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    AddRestaurantsComponent,
    ListRestaurantsComponent,
    EditRestaurantsComponent,
    DetailsRestaurantsComponent,
    RestaurantsComponent,
  ],
  exports: [RouterModule],
})

export class RestaurantsModule {
}
