import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {User, Users} from "../../model/user";
import {Restaurant} from "../../model/restaurant";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:8080/api/admin/users";
  user: User;

  constructor(private http: HttpClient) { }

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

  list(): Observable<Users> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.get<Users>(`${this.baseUrl}`, {headers})
      .pipe(
        catchError(UsersService.handleError)
      );
  }

  getById(id: number): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.get<User>(`${this.baseUrl}/${id}`, {headers})
      .pipe(
        catchError(UsersService.handleError));
  }

  delete(id: number): Observable<User> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.delete<User>(`${this.baseUrl}/${id}`, {headers})
      .pipe(
        catchError(UsersService.handleError)
      )
  }
}