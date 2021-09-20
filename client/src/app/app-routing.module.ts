import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuards} from "./service/auth.guards";
import {DetailsComponent} from "./view/account/details/details.component";
import {EditComponent} from "./view/account/edit/edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
  {path: 'account', loadChildren: () => import('src/app/view/account/account.module').then(m => m.AccountModule)},
  {path: 'account/details', canActivate: [AuthGuards], component: DetailsComponent},
  {path: 'account/edit', canActivate: [AuthGuards], component: EditComponent},
  {path: 'restaurants', canActivate: [AuthGuards], loadChildren: () => import('src/app/view/restaurants/restaurants.module').then(m => m.RestaurantsModule)},
  {path: "admin/users", loadChildren: () => import('src/app/view/users/users.module').then(m => m.UsersModule)},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations:[
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
