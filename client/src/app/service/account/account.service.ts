import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = "http://localhost:8080/api/account";
  isAuth: boolean = false

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

  login(email: string, password: string): Observable<User> {
    let headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email + ':' + password)});
    return this.http.get<User>(this.baseUrl, {headers})
      .pipe(
        catchError(AccountService.handleError));
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user)
      .pipe(
        catchError(AccountService.handleError));
  }

  logout() {
    this.isAuth = false;
    window.localStorage.clear()
  }

  isLoggedIn(): boolean {
    if (window.localStorage.getItem('authUser') != null) {
      this.isAuth = true;
    }
    return this.isAuth;
  }
}
