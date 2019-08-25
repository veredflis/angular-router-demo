import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild
} from "@angular/router";
import { Observable } from "rxjs";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class GuardCanActivateGuard implements CanActivate, CanActivateChild {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // <-- Guard Logic -->
    console.log("CanActivate Guard");
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }
}
