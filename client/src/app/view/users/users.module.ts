import {NgModule} from "@angular/core";
import {Route, Router, RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";

const routes: Route[] = [{}];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    RouterModule
  ]
})

export class UsersModule {}
