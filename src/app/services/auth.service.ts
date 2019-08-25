import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isLogged: boolean = false;
  constructor() {}

  isUserLoggedIn() {
    return this.isLogged;
  }
}
