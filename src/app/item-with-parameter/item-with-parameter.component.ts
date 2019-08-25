import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { ListData } from "../services/resolver.service";

@Component({
  selector: "app-item-with-parameter",
  templateUrl: "./item-with-parameter.component.html",
  styleUrls: ["./item-with-parameter.component.scss"]
})
export class ItemWithParameterComponent implements OnInit {
  subscription: Subscription;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //get params:
    const paramValue = this.route.snapshot.paramMap.get("id");
    this.route.data.subscribe(data => {
      console.log("route data: ", data);
    });
    console.log("paramValue", paramValue);
    this.subscription = this.route.paramMap.subscribe(p =>
      console.log("Routh Parammeter: ", +p.get("id"))
    );
    //get data object and/or resolved data:
    //??????????when to use subscribe?
    this.route.data.subscribe((data: { listOfData: ListData }) => {
      console.log("resolvedData", data.listOfData);
    });
    console.log(
      "second option to get resolved data: ",
      this.route.snapshot.data["listOfData"]
    );
  }

  goToItem1() {
    this.router.navigate(["item-one"]);
  }
}
