import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemOneComponent } from "./item-one/item-one.component";
import { ItemTwoComponent } from "./item-two/item-two.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ItemWithParameterComponent } from "./item-with-parameter/item-with-parameter.component";

const routes: Routes = [
  { path: "item-one", component: ItemOneComponent },
  { path: "item-two", component: ItemTwoComponent },
  { path: "item-with-parameter/:id", component: ItemWithParameterComponent },
  { path: "", redirectTo: "/item-two", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
