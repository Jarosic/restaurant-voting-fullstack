import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, Subject, throwError} from "rxjs";
import {Restaurant, Restaurants} from "../../model/restaurant";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {
  baseUrl: string = "http://localhost:8080/api/restaurants";
  restaurant: Observable<Restaurant>;
  event$: Subject<Restaurant> = new Subject<Restaurant>();

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

  list(): Observable<Restaurants> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.get<Restaurants>(`${this.baseUrl}`, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      );
  }

  getById(id: number): Observable<Restaurant> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
      this.restaurant = this.http.get<Restaurant>(`${this.baseUrl}/${id}`, {headers})
      this.restaurant.subscribe(
        (r) => this.event$.next(r)
      );
      return this.restaurant
        .pipe(
          catchError(RestaurantsService.handleError)
        );
  }

  add(restaurant: Restaurants): Observable<Restaurants> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.post<Restaurants>(`${this.baseUrl}`, restaurant, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      )
  }
}
