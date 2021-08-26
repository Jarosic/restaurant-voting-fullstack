import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {
  baseUrl: string = "http://localhost:8080/api/restaurants";
  private headers: HttpHeaders = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin') });

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
      return throwError(
        'Something bad happened; please try again later.'
      );
    }
  }
}
