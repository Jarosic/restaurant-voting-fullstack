import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {Restaurants} from "../../model/restaurant";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {
  baseUrl: string = "http://localhost:8080/api/restaurants";

  constructor(private http: HttpClient) {
  }

  private static handleError(error: HttpErrorResponse) {
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

  list(): any {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.get<Restaurants>(`${this.baseUrl}`, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      );
  }

  getById(id: number): any {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
      return this.http.get(`${this.baseUrl}/${id}`, {headers})
        .pipe(
          catchError(RestaurantsService.handleError)
        );
  }

  add(restaurant: Restaurants): any {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.post(`${this.baseUrl}`, restaurant, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      )
  }
}
