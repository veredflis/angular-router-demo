import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DialogService } from "../services/dialog.service";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.scss"]
})
export class Child2Component implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm("Discard changes?");
  }
}
