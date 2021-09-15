import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./not-found/not-found.component";

const appRoutes: Routes = [
  {path: 'account', loadChildren: () => import('src/app/view/account/account.module').then(m => m.AccountModule)},
  {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
  {path: 'restaurants', loadChildren: () => import('src/app/view/restaurants/restaurants.module').then(m => m.RestaurantsModule)},
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
