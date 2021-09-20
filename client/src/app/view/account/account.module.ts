import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./account.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {DetailsComponent} from "./details/details.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '', component: AccountComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  }
]

@NgModule({
  declarations: [
    AccountComponent,
    RegisterComponent,
    LoginComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountModule { }
