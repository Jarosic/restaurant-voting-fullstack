import {EventEmitter, Injectable} from '@angular/core';
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

  mealsList$: Subject<Restaurant> = new Subject<Restaurant>();
  changeData: EventEmitter<Restaurant> = new EventEmitter();
  newList: EventEmitter<Restaurant> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.toString()}`
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
      (r) => this.mealsList$.next(r)
    );
    return this.restaurant
      .pipe(
        catchError(RestaurantsService.handleError)
      );
  }

  create(restaurant: Restaurant): Observable<Restaurant> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.post<Restaurant>(`${this.baseUrl}`, restaurant, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      )
  }

  update(restaurant: Restaurant, id: number): any {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.put<Restaurant>(`${this.baseUrl}/${id}`, restaurant, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      )
  }

  delete(id: number): Observable<Restaurant> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.delete<Restaurant>(`${this.baseUrl}/${id}`, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      )
  }

  vote(id: number): any {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user@gmail.com' + ':' + 'user')});
    return this.http.patch(`${this.baseUrl}/vote?restaurantId=${id}`, null, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      )
  }

  unVote(): any {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user@gmail.com' + ':' + 'user')});
    return this.http.patch(`${this.baseUrl}/unVote`, null, {headers})
      .pipe(
        catchError(RestaurantsService.handleError)
      )
  }

  saveDataRestaurant(data: Restaurant): void {
    this.changeData.emit(data);
  }

  updateList(data) {
    this.newList.emit(data);
  }
}
