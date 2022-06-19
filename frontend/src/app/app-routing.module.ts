import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {SomeTestComponent} from "./some-test/some-test.component";
import {AuthGuard} from "./auth/auth.guard";
import {ChildDashboardComponent} from "./dashboard/child-dashboard/child-dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LegComponent} from "./leg/leg.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "auth", component: AuthComponent },
  { path: "some-test", component: SomeTestComponent },
  { path: "score", component: LegComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: "child-dashboard", component:  ChildDashboardComponent },
    ]
  },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/page-not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
