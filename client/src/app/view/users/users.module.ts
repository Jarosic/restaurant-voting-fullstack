import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users.component";
import {ListUsersComponent} from './list-users/list-users.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AddUsersComponent} from './add-users/add-users.component';
import {EditUsersComponent} from './edit-users/edit-users.component';
import {AuthGuards} from "../../service/auth.guards";

const routes: Routes = [
  {
    path: '', component: UsersComponent, canActivate: [AuthGuards], children: [
      {path: 'add', component: AddUsersComponent},
      {path: 'edit/:id', component: EditUsersComponent}
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
    ListUsersComponent,
    AddUsersComponent,
    EditUsersComponent
  ],
  exports:[RouterModule]
})

export class UsersModule {}
