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


@Injectable()

export class AuthGuards implements CanActivate, CanActivateChild {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.accountService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/'], {
        queryParams: {
          accessDenied: true
        }
      });
      return false;
    }
    return undefined;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }

}
