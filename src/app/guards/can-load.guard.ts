import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class CanLoadGuard implements CanLoad {
  constructor(private authService: AuthService) {}
  canLoad(route: Route): boolean {
    console.log("CanLoad guard");
    return this.authService.isUserLoggedIn();
  }
}
