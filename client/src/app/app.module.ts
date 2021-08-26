import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {AddMealsComponent} from './view/meals/add-meals/add-meals.component';
import {MealsComponent} from './view/meals/meals.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AddMealsComponent,
    MealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
