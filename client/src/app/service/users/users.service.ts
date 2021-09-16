import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {User, Users} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:8080/api/admin/users";
  changeData: EventEmitter<User> = new EventEmitter();
  newList: EventEmitter<User> = new EventEmitter();

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

  list(): Observable<Users> {
    let authUser = JSON.parse(window.localStorage.getItem('authUser'));
    console.log(authUser.password)
    let headers = new HttpHeaders({Authorization: 'Basic ' + btoa(authUser.email + ':' + authUser.password)});
    return this.http.get<Users>(`${this.baseUrl}`, {headers})
      .pipe(
        catchError(UsersService.handleError)
      );
  }

  getById(id: number): Observable<User> {
    let authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let headers = new HttpHeaders({Authorization: 'Basic ' + btoa(authUser.email + ':' + authUser.roles)});
    return this.http.get<User>(`${this.baseUrl}/${id}`, {headers})
      .pipe(
        catchError(UsersService.handleError));
  }

  create(user: User): Observable<User> {
    let authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let headers = new HttpHeaders({Authorization: 'Basic ' + btoa(authUser.email + ':' + authUser.roles)});
    return this.http.post<User>(`${this.baseUrl}`, user, {headers})
      .pipe(
        catchError(UsersService.handleError)
      )
  }

  update(user: User, id: number): any {
    let authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let headers = new HttpHeaders({Authorization: 'Basic ' + btoa(authUser.email + ':' + authUser.roles)});
    return this.http.put<User>(`${this.baseUrl}/${id}`,user,{headers})
      .pipe(
        catchError(UsersService.handleError)
      )
  }

  delete(id: number): Observable<User> {
    let authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let headers = new HttpHeaders({Authorization: 'Basic ' + btoa(authUser.email + ':' + authUser.roles)});
    return this.http.delete<User>(`${this.baseUrl}/${id}`, {headers})
      .pipe(
        catchError(UsersService.handleError)
      )
  }

  saveDataUsers(data: User): void {
    this.changeData.emit(data);
  }

  updateList(data) {
    this.newList.emit(data);
  }
}
