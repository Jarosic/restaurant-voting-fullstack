import { Injectable } from '@angular/core';
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  addUser(user: User) {
    let str = JSON.stringify(user);
    window.localStorage.setItem('authUser', str);
  }

  getUser(): User {
    return JSON.parse(window.localStorage.getItem('AuthUser'));
  }

  updateUser(user: User) {
    window.localStorage.clear()
    let str = JSON.stringify(user);
    window.localStorage.setItem('authUser', str);
  }

  clearLocalStorage() {
    window.localStorage.clear();
  }
}
