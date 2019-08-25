import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class NewGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("from guard", next.url);
    this.router.navigate(["/item-two"]);
    return false;
  }
}
