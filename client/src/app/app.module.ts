import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AccountService} from "./service/account/account.service";
import {AuthGuards} from "./service/auth.guards";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AccountService, AuthGuards],
  bootstrap: [AppComponent],
})
export class AppModule {
}
