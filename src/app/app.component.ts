import { Component } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { slideInAnimation } from "./animations/animations";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = "demo-routing";
  id1: number = 17;
  id2: number = 18;
  constructor() {}

  prepareRoute(outlet: RouterOutlet) {
    // console.log(outlet);
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
