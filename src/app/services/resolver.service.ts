import { Injectable } from "@angular/core";
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, of } from "rxjs";

export interface ListData {
  name: string;
  color: string;
}

@Injectable({
  providedIn: "root"
})
export class ResolverService implements Resolve<ListData> {
  constructor(private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ListData> | Observable<never> {
    let id = route.paramMap.get("id");
    console.log("ResolverService parameter:", id);
    return of({
      name: "vered",
      color: "pink"
    });
  }
}
