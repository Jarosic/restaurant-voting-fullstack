import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./account.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '', component: AccountComponent, children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AccountComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
