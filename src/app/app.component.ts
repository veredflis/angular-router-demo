import { Component } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "demo-routing";
  id: number = 17;
  constructor() {}
}
