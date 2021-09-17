import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { AccountService } from "./account/account.service";
import {User} from "../model/user";
import {switchMap} from "rxjs/operators";


@Injectable()

export class AuthGuards implements CanActivate, CanActivateChild {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (state.url === '/admin/users' && this.accountService.isLoggedIn()) {
      let role = [];
      role = JSON.parse(window.localStorage.getItem('authUser')).roles;
      return role[0] === 'ADMIN';
    }

    if (this.accountService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/account'], {
        queryParams: {
          accessDenied: true
        }
      });
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
