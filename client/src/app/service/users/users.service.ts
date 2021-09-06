import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {User} from "../../model/user";

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

  getById(id: number): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin@gmail.com' + ':' + 'admin')});
    return this.http.get<User>(`${this.baseUrl}/${id}`, {headers})
      // .pipe(
      //   catchError(UsersService.handleError));
  }
}
