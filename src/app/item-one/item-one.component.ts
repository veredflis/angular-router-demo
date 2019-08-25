import { Component, OnInit } from "@angular/core";
import {
  Router,
  ChildActivationStart,
  ChildActivationEnd
} from "@angular/router";

@Component({
  selector: "app-item-one",
  templateUrl: "./item-one.component.html",
  styleUrls: ["./item-one.component.scss"]
})
export class ItemOneComponent implements OnInit {
  parameter: number = 17;
  constructor(private router: Router) {
    // router.events.subscribe(e => {
    //   console.log("router events: ", e);
    //   if (e instanceof ChildActivationStart) {
    //     console.log("ChildActivationStart");
    //   } else if (e instanceof ChildActivationEnd) {
    //     console.log("ChildActivationEnd");
    //   }
    // });
  }

  ngOnInit() {}

  navigateWithParams() {
    this.router.navigate(["item-with-parameter", this.parameter]);
  }
}
