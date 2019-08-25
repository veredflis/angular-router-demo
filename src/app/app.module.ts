import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Location } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemOneComponent } from "./item-one/item-one.component";
import { ItemTwoComponent } from "./item-two/item-two.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { Routes, RouterModule, UrlSerializer } from "@angular/router";
import { ItemWithParameterComponent } from "./item-with-parameter/item-with-parameter.component";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";
import { InvalidUrlComponent } from "./invalid-url/invalid-url.component";
import { GuardCanActivateGuard } from "./guards/guard-can-activate.guard";
import { CanDeactivateGuard } from "./guards/can-deactivate.guard";
import { ResolverService } from "./services/resolver.service";
import { CanLoadGuard } from "./guards/can-load.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NewGuard } from "./guards/new.guard";

const routes: Routes = [
  {
    path: "item-one",

    component: ItemOneComponent,
    data: { animation: "one" },
    children: [
      {
        path: "",
        canActivateChild: [GuardCanActivateGuard],
        component: Child1Component
      },
      {
        path: "child-two",
        component: Child2Component,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  {
    path: "item-two",
    component: ItemTwoComponent,
    data: { animation: "two" }
  },
  {
    path: "item-with-parameter/:id1/:id2",
    component: ItemWithParameterComponent,
    data: { color: "red" },
    resolve: {
      listOfData: ResolverService
    }
  },
  { path: "", redirectTo: "/item-two", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemOneComponent,
    ItemTwoComponent,
    NotFoundComponent,
    ItemWithParameterComponent,
    Child1Component,
    Child2Component,
    InvalidUrlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes
      // { enableTracing: true } // <-- debugging purposes only
    )
    //AppRoutingModule // <-- for router module
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
