import {NgModule} from "@angular/core";
import {ListMealsComponent} from './list-meals/list-meals.component';
import {EditMealsComponent} from './edit-meals/edit-meals.component';
import {AddMealsComponent} from "./add-meals/add-meals.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MealsComponent} from "./meals.component";

const routes: Routes = [
  {path: 'meals', component: MealsComponent, children: [
      {path: 'list', component: ListMealsComponent},
      {path: 'list/add', component: AddMealsComponent},
      {path: 'list/edit/:id', component: EditMealsComponent},
    ]
  }
]

@NgModule({
  declarations:[
    ListMealsComponent,
    EditMealsComponent,
    AddMealsComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ListMealsComponent
  ],
  providers:[]
})

export class MealsModule {}
