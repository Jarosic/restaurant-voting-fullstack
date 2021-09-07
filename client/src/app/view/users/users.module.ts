import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";
import {ListUsersComponent} from './list-users/list-users.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

const routes: Route[] = [
  {
    path: '', component: UsersComponent, children: [
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    UsersComponent,
    ListUsersComponent
  ],
  exports:[RouterModule]
})

export class UsersModule {}
