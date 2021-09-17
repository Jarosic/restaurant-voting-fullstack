import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AccountService} from "./service/account/account.service";
import {AuthGuards} from "./service/auth.guards";
import {LocalStorageService} from "./service/localStorage/local-storage.service";

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
  providers: [AccountService, AuthGuards, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
